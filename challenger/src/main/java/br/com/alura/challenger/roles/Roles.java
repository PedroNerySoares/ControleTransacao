package br.com.alura.challenger.roles;


import br.com.alura.challenger.usuario.UsuarioModel;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Roles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @JsonIgnore
    @ManyToMany(mappedBy = "roles")
    private List<UsuarioModel> usuarioModels;

    public Roles() {}

    public Roles(String nome) {
        this.nome = nome;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<UsuarioModel> getUsuarios() {
        return usuarioModels;
    }

    public void setUsuarios(List<UsuarioModel> usuarioModels) {
        this.usuarioModels = usuarioModels;
    }
}
