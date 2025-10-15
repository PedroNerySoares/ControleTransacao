package br.com.alura.challenger.usuario.DTOS;

public class UserDetailsDTO {
    private String usuario;
    private String email;
    private String roles;

    public UserDetailsDTO() {
    }

    public UserDetailsDTO(String usuario, String email, String roles) {
        this.usuario = usuario;
        this.email = email;
        this.roles = roles;
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

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }
}
