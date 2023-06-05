package br.com.alura.challenger.dto;

public class dadosTokenJWT {


    private String token;

    public dadosTokenJWT() {
    }

    public dadosTokenJWT(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    } 
    
}
