package br.com.alura.challenger.arquivo.extrator;

import br.com.alura.challenger.transacao.Transacao;
import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockMultipartFile;

import java.nio.charset.StandardCharsets;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class TransacaoExtractorTest {

    private final CsvTransacaoExtractor csvExtractor = new CsvTransacaoExtractor();
    private final XmlTransacaoExtractor xmlExtractor = new XmlTransacaoExtractor();

    @Test
    void extraiTransacaoDoCsvEConsideraVirgulaEntreAspas() throws Exception {
        String conteudo = "coluna-a,coluna-b,coluna-c,coluna-d,coluna-e,coluna-f,coluna-g,coluna-h\n"
                + "\"BANCO, DO BRASIL\",002,00003-1,BANCO DO BRASIL,005,00005-1,"
                + "158598.29,2027-01-04T10:19:07";
        MockMultipartFile arquivo = arquivo("transacoes.csv", conteudo);

        List<Transacao> transacoes = csvExtractor.extrair(arquivo);

        assertEquals(1, transacoes.size());
        assertEquals("BANCO, DO BRASIL", transacoes.get(0).getBancoOrigem());
        assertEquals("00003-1", transacoes.get(0).getContaOrigem());
        assertEquals(158598.29, transacoes.get(0).getValorTransacao());
        assertEquals("2027-01-04T10:19:07", transacoes.get(0).getDataHoraTransacao().toString());
    }

    @Test
    void extraiTransacaoDoXml() throws Exception {
        String conteudo = "<?xml version='1.0' encoding='UTF-8'?>"
                + "<transacoes><transacao><origem><banco>BANCO SANTANDER</banco>"
                + "<agencia>003</agencia><conta>00003-1</conta></origem>"
                + "<destino><banco>BANCO BRADESCO</banco><agencia>005</agencia>"
                + "<conta>00005-1</conta></destino><valorTransacao>67942.46</valorTransacao>"
                + "<dataHoraTransacao>2026-01-01T16:17:13</dataHoraTransacao>"
                + "</transacao></transacoes>";
        MockMultipartFile arquivo = arquivo("transacoes.xml", conteudo);

        List<Transacao> transacoes = xmlExtractor.extrair(arquivo);

        assertEquals(1, transacoes.size());
        assertEquals("BANCO SANTANDER", transacoes.get(0).getBancoOrigem());
        assertEquals("BANCO BRADESCO", transacoes.get(0).getBancoDestino());
        assertEquals(67942.46, transacoes.get(0).getValorTransacao());
    }

    @Test
    void rejeitaXmlComDoctype() {
        String conteudo = "<!DOCTYPE transacoes [<!ENTITY xxe SYSTEM \"file:///etc/passwd\">]>"
                + "<transacoes><transacao>&xxe;</transacao></transacoes>";

        assertThrows(IllegalArgumentException.class, () -> xmlExtractor.extrair(
                arquivo("transacoes.xml", conteudo)));
    }

    private MockMultipartFile arquivo(String nome, String conteudo) {
        return new MockMultipartFile(
                "files",
                nome,
                "application/octet-stream",
                conteudo.getBytes(StandardCharsets.UTF_8)
        );
    }
}
