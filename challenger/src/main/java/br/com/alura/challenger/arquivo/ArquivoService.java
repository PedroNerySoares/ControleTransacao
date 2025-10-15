package br.com.alura.challenger.arquivo;

import br.com.alura.challenger.transacao.DTOS.TesteDto;
import br.com.alura.challenger.usuario.UsuarioServices;
import br.com.alura.challenger.usuario.UsuarioModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ArquivoService {

    @Autowired
    ArquivoRepository arquivoRepository;

    @Autowired
    UsuarioServices usuarioServices;


    public void createFileTransaction(Long idUser, TesteDto arquivo) {

        UsuarioModel usuarioModel = usuarioServices.getUserById(idUser);
        Arquivo arq = new Arquivo(
                arquivo.getNomeArquivo(),
                arquivo.getTamanhoArquivo(),
                usuarioModel,
                LocalDateTime.now(),
                arquivo.getListaTransacao().get(0).getDataHoraTransacao().toLocalDate(),
                arquivo.getListaTransacao());


        arquivoRepository.saveAndFlush(arq);
    }

}
