package br.com.alura.challenger.banco;

import java.io.Serializable;
import java.util.Objects;

public class BancoId implements Serializable {

    private static final long serialVersionUID = 1L;

    private String numeroBanco;
    private String ispb;
    private String cnpj;

    public BancoId() {
    }

    public BancoId(String numeroBanco, String ispb, String cnpj) {
        this.numeroBanco = numeroBanco;
        this.ispb = ispb;
        this.cnpj = cnpj;
    }

    @Override
    public boolean equals(Object other) {
        if (this == other) {
            return true;
        }
        if (!(other instanceof BancoId)) {
            return false;
        }
        BancoId bancoId = (BancoId) other;
        return Objects.equals(numeroBanco, bancoId.numeroBanco)
                && Objects.equals(ispb, bancoId.ispb)
                && Objects.equals(cnpj, bancoId.cnpj);
    }

    @Override
    public int hashCode() {
        return Objects.hash(numeroBanco, ispb, cnpj);
    }
}
