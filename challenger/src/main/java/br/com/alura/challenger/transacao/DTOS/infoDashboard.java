package br.com.alura.challenger.transacao.DTOS;
import java.math.BigDecimal;

public interface infoDashboard {

    String getMesAno();

    BigDecimal getTotalTransacionado();

    BigDecimal getTotalSuspeito();
}