package br.com.alura.challenger.banco;

import javax.validation.constraints.NotNull;

public class BancoStatusRequest {

    @NotNull
    private Boolean status;

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}
