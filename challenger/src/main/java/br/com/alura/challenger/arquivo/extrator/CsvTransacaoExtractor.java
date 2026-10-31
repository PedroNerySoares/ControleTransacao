package br.com.alura.challenger.arquivo.extrator;

import br.com.alura.challenger.transacao.Transacao;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
public class CsvTransacaoExtractor implements TransacaoExtractor {
    private static final int QUANTIDADE_COLUNAS = 8;

    @Override
    public boolean suporta(String extensao) {
        return "csv".equals(extensao);
    }

    @Override
    public List<Transacao> extrair(MultipartFile arquivo) throws IOException {
        try (BufferedReader reader = new BufferedReader(
                new InputStreamReader(arquivo.getInputStream(), StandardCharsets.UTF_8))) {
            String header = reader.readLine();
            if (header == null) {
                throw new IllegalArgumentException("O arquivo CSV está vazio.");
            }

            List<Transacao> transacoes = new ArrayList<>();
            String linha;
            int numeroLinha = 1;

            while ((linha = reader.readLine()) != null) {
                numeroLinha++;
                if (linha.isBlank()) {
                    continue;
                }

                try {
                    transacoes.add(criarTransacao(parseLinha(linha)));
                } catch (IllegalArgumentException exception) {
                    throw new IllegalArgumentException(
                            "CSV inválido na linha " + numeroLinha + ": " + exception.getMessage(),
                            exception);
                }
            }
            return transacoes;
        }
    }

    private Transacao criarTransacao(List<String> valores) {
        if (valores.size() != QUANTIDADE_COLUNAS) {
            throw new IllegalArgumentException(
                    "cada linha deve conter exatamente " + QUANTIDADE_COLUNAS + " colunas.");
        }

        double valor;
        try {
            valor = Double.parseDouble(valor(valores, 6));
        } catch (NumberFormatException exception) {
            throw new IllegalArgumentException("valorTransacao inválido.", exception);
        }
        if (!Double.isFinite(valor)) {
            throw new IllegalArgumentException("valorTransacao deve ser um número finito.");
        }

        LocalDateTime dataHora;
        try {
            dataHora = LocalDateTime.parse(valor(valores, 7));
        } catch (RuntimeException exception) {
            throw new IllegalArgumentException("dataHoraTransacao inválida.", exception);
        }

        return new Transacao(
                valor(valores, 0),
                valor(valores, 1),
                valor(valores, 2),
                valor(valores, 3),
                valor(valores, 4),
                valor(valores, 5),
                valor,
                dataHora
        );
    }

    private String valor(List<String> valores, int indice) {
        String valor = valores.get(indice).trim();
        if (valor.isEmpty()) {
            throw new IllegalArgumentException("a coluna na posição " + (indice + 1) + " não pode ficar vazia.");
        }
        return valor;
    }

    private List<String> parseLinha(String linha) {
        List<String> campos = new ArrayList<>();
        StringBuilder campo = new StringBuilder();
        boolean dentroDeAspas = false;

        for (int i = 0; i < linha.length(); i++) {
            char atual = linha.charAt(i);
            if (atual == '"') {
                if (dentroDeAspas && i + 1 < linha.length() && linha.charAt(i + 1) == '"') {
                    campo.append('"');
                    i++;
                } else {
                    dentroDeAspas = !dentroDeAspas;
                }
            } else if (atual == ',' && !dentroDeAspas) {
                campos.add(campo.toString());
                campo.setLength(0);
            } else {
                campo.append(atual);
            }
        }

        if (dentroDeAspas) {
            throw new IllegalArgumentException("aspas não fechadas.");
        }
        campos.add(campo.toString());
        return campos;
    }
}
