package br.com.alura.challenger.usuario.DTOS;

import javax.validation.constraints.NotBlank;

public class CreateNewUserDTO {

    @NotBlank(message = "Nome de usuário obriatório!")
    private String usuario;

    @NotBlank(message = "e-mail do usuário obriatório!")
    private String email;

    private Long idRole;

    public CreateNewUserDTO() {
    }

    public CreateNewUserDTO(String usuario, String email, Long idRole) {
        this.usuario = usuario;
        this.email = email;
        this.idRole = idRole;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getIdRole() {
        return idRole;
    }

    public void setIdRole(Long idRole) {
        this.idRole = idRole;
    }
}
