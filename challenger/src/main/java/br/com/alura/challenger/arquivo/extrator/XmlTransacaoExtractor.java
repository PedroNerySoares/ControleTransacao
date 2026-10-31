package br.com.alura.challenger.arquivo.extrator;

import br.com.alura.challenger.transacao.Transacao;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.XMLConstants;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.InputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
public class XmlTransacaoExtractor implements TransacaoExtractor {

    @Override
    public boolean suporta(String extensao) {
        return "xml".equals(extensao);
    }

    @Override
    public List<Transacao> extrair(MultipartFile arquivo) throws IOException {
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            factory.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);
            factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
            factory.setFeature("http://xml.org/sax/features/external-general-entities", false);
            factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
            factory.setAttribute(XMLConstants.ACCESS_EXTERNAL_DTD, "");
            factory.setAttribute(XMLConstants.ACCESS_EXTERNAL_SCHEMA, "");
            factory.setXIncludeAware(false);
            factory.setExpandEntityReferences(false);

            Element raiz;
            try (InputStream input = arquivo.getInputStream()) {
                raiz = factory.newDocumentBuilder().parse(input).getDocumentElement();
            }
            if (!"transacoes".equals(raiz.getTagName())) {
                throw new IllegalArgumentException("A raiz do XML deve ser <transacoes>.");
            }

            NodeList itens = raiz.getElementsByTagName("transacao");
            List<Transacao> transacoes = new ArrayList<>();
            for (int i = 0; i < itens.getLength(); i++) {
                transacoes.add(criarTransacao((Element) itens.item(i)));
            }
            return transacoes;
        } catch (ParserConfigurationException | SAXException exception) {
            throw new IllegalArgumentException("O arquivo XML é inválido.", exception);
        }
    }

    private Transacao criarTransacao(Element elemento) {
        Element origem = elemento(elemento, "origem");
        Element destino = elemento(elemento, "destino");

        double valor;
        try {
            valor = Double.parseDouble(texto(elemento, "valorTransacao"));
        } catch (NumberFormatException exception) {
            throw new IllegalArgumentException("valorTransacao inválido no XML.", exception);
        }
        if (!Double.isFinite(valor)) {
            throw new IllegalArgumentException("valorTransacao deve ser um número finito.");
        }

        LocalDateTime dataHora;
        try {
            dataHora = LocalDateTime.parse(texto(elemento, "dataHoraTransacao"));
        } catch (RuntimeException exception) {
            throw new IllegalArgumentException("dataHoraTransacao inválida no XML.", exception);
        }

        return new Transacao(
                texto(origem, "banco"),
                texto(origem, "agencia"),
                texto(origem, "conta"),
                texto(destino, "banco"),
                texto(destino, "agencia"),
                texto(destino, "conta"),
                valor,
                dataHora
        );
    }

    private Element elemento(Element pai, String nome) {
        NodeList elementos = pai.getElementsByTagName(nome);
        if (elementos.getLength() == 0) {
            throw new IllegalArgumentException("Elemento " + nome + " obrigatório no XML.");
        }
        return (Element) elementos.item(0);
    }

    private String texto(Element pai, String nome) {
        String valor = elemento(pai, nome).getTextContent().trim();
        if (valor.isEmpty()) {
            throw new IllegalArgumentException("Elemento " + nome + " não pode ficar vazio.");
        }
        return valor;
    }
}
