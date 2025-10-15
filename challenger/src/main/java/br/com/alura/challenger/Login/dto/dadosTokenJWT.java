package br.com.alura.challenger.Login.dto;

public class dadosTokenJWT {



    private String token;

    private String email;
    private String nome;
    private Long id;
    private String role;


    public dadosTokenJWT(String token, String email, String nome, Long id, String role) {
        this.token = token;
        this.email = email;
        this.nome = nome;
        this.id = id;
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
