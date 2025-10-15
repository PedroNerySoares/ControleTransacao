package br.com.alura.challenger.transacao.DTOS;

import br.com.alura.challenger.arquivo.ArquivoDto;

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
