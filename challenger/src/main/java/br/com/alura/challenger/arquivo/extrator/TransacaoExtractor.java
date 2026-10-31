package br.com.alura.challenger.arquivo.extrator;

import br.com.alura.challenger.transacao.Transacao;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface TransacaoExtractor {
    boolean suporta(String extensao);

    List<Transacao> extrair(MultipartFile arquivo) throws IOException;
}
