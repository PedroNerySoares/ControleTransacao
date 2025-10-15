package br.com.alura.challenger.transacao.DTOS;

public class AgenciaSuspeitaDto {
    private String banco;
	private String agencia;
	private Double valor;
	private String operacao;
    
    public AgenciaSuspeitaDto(String banco, String agencia, Double valor, String operacao) {
        this.banco = banco;
        this.agencia = agencia;
        this.valor = valor;
        this.operacao = operacao;
    }

    public String getBanco() {
        return banco;
    }

    public void setBanco(String banco) {
        this.banco = banco;
    }

    public String getAgencia() {
        return agencia;
    }

    public void setAgencia(String agencia) {
        this.agencia = agencia;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public String getOperacao() {
        return operacao;
    }

    public void setOperacao(String operacao) {
        this.operacao = operacao;
    }

    


}
