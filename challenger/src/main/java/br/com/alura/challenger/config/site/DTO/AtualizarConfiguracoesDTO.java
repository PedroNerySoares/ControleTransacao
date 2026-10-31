package br.com.alura.challenger.config.site;

 

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

import java.math.BigDecimal;

public record AtualizarConfiguracoesDTO(

        @NotNull
        @DecimalMin("0.01")
        BigDecimal valorTransacaoSuspeito,

        @NotNull
        @DecimalMin("0.01")
        BigDecimal valorAgenciaSuspeito,

        @NotNull
        @DecimalMin("0.01")
        BigDecimal valorContaSuspeito

) {}