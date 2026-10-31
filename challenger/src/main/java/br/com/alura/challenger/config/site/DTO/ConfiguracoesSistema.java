package br.com.alura.challenger.config.site;

import java.math.BigDecimal;

public record ConfiguracoesSistema(
        BigDecimal valorTransacaoSuspeito,
        BigDecimal valorAgenciaSuspeito,
        BigDecimal valorContaSuspeito
) {}