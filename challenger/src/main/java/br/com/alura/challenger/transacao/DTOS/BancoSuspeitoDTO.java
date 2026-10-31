package br.com.alura.challenger.transacao.DTOS;
import java.math.BigDecimal;

public class BancoSuspeitoDTO {
    private String nomeBanco;
    private BigDecimal valorSuspeito;

    public BancoSuspeitoDTO(
            String nomeBanco,
            BigDecimal valorSuspeito) {
        this.nomeBanco = nomeBanco;
        this.valorSuspeito = valorSuspeito;
    }

    public String getNomeBanco() {
        return nomeBanco;
    }

    public void setNomeBanco(String nomeBanco) {
        this.nomeBanco = nomeBanco;
    }

    public BigDecimal getValorSuspeito() {
        return valorSuspeito;
    }

    public void setValorSuspeito(BigDecimal valorSuspeito) {
        this.valorSuspeito = valorSuspeito;
    }
}
