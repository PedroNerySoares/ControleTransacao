package br.com.alura.challenger.usuario.DTOS;

import br.com.alura.challenger.roles.DTOS.RolesDTO;
import br.com.alura.challenger.roles.Roles;
import java.util.List;

public class UserDetailsDTO {
    private Long   id;
    private String usuario;
    private String email;
    private String photoPerfil;
    private List<RolesDTO> roles;

    public UserDetailsDTO() {
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getPhotoPerfil() {
        return photoPerfil;
    }

    public void setPhotoPerfil(String photoPerfil) {
        this.photoPerfil = photoPerfil;
    }

    public List<RolesDTO> getRoles() {
        return roles;
    }

    public void setRoles(List<RolesDTO> roles) {
        this.roles = roles;
    }
}
