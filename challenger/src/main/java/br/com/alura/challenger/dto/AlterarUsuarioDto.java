package br.com.alura.challenger.dto;

public class AlterarUsuarioDto {
    private String email;
    private String antigaSenha;
    private String novaSenha;


    public AlterarUsuarioDto(){}
    public AlterarUsuarioDto(String email, String antigaSenha, String novaSenha) {
        this.email = email;
        this.antigaSenha = antigaSenha;
        this.novaSenha = novaSenha;
    }
    
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getAntigaSenha() {
        return antigaSenha;
    }
    public void setAntigaSenha(String antigaSenha) {
        this.antigaSenha = antigaSenha;
    }
    public String getNovaSenha() {
        return novaSenha;
    }
    public void setNovaSenha(String novaSenha) {
        this.novaSenha = novaSenha;
    }

    
}
