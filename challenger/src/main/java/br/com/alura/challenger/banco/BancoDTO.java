package br.com.alura.challenger.banco;

public record BancoDTO(
        String numeroBanco,
        String nomeCurto,
        String logoUrl
) {}