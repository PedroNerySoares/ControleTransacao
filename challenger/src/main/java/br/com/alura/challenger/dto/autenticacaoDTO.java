package br.com.alura.challenger.dto;

import javax.validation.constraints.NotBlank;

public class autenticacaoDTO {
    @NotBlank
    private String usuario;
    @NotBlank
    private String senha;
    public autenticacaoDTO(){}
    
    public autenticacaoDTO(@NotBlank String usuario, @NotBlank String senha) {
        this.usuario = usuario;
        this.senha = senha;
    }
    public String getUsuario() {
        return usuario;
    }
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }




    
}
