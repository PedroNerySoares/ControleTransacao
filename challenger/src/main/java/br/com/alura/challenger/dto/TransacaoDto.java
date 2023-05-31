package br.com.alura.challenger.dto;

import java.util.List;

import br.com.alura.challenger.model.Arquivo;
import br.com.alura.challenger.model.Transacao;

public class TransacaoDto {
    
    private ArquivoDto arquivo;

    public TransacaoDto(ArquivoDto arquivo) {
        this.arquivo = arquivo;
    }

    public ArquivoDto getArquivo() {
        return arquivo;
    }

    public void setArquivo(ArquivoDto arquivo) {
        this.arquivo = arquivo;
    }
    
    
}
