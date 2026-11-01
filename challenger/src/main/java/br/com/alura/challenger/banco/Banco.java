package br.com.alura.challenger.banco;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "banco")
@IdClass(BancoId.class)
public class Banco {

    @Id
    @Column(name = "numeroBanco", length = 3, nullable = false)
    private String numeroBanco;

    @Id
    @Column(name = "ISPB", length = 8, nullable = false)
    private String ispb;

    @Id
    @Column(name = "cnpj", length = 14, nullable = false)
    private String cnpj;

    @Column(name = "nomeLongo", length = 150, nullable = false)
    private String nomeLongo;

    @Column(name = "nomeCurto", length = 100, nullable = false)
    private String nomeCurto;

    @Column(name = "LogoUrl", length = 100)
    private String logoUrl;

    @Column(name = "status", nullable = false)
    private boolean status;

    public Banco() {
    }

    public String getNumeroBanco() {
        return numeroBanco;
    }

    public void setNumeroBanco(String numeroBanco) {
        this.numeroBanco = numeroBanco;
    }

    @JsonProperty("ISPB")
    public String getIspb() {
        return ispb;
    }

    @JsonProperty("ISPB")
    public void setIspb(String ispb) {
        this.ispb = ispb;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getNomeLongo() {
        return nomeLongo;
    }

    public void setNomeLongo(String nomeLongo) {
        this.nomeLongo = nomeLongo;
    }

    public String getNomeCurto() {
        return nomeCurto;
    }

    public void setNomeCurto(String nomeCurto) {
        this.nomeCurto = nomeCurto;
    }

    @JsonProperty("LogoUrl")
    public String getLogoUrl() {
        return logoUrl;
    }

    @JsonProperty("LogoUrl")
    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
