package br.com.alura.challenger.dto;

import java.time.LocalDateTime;

public class Transacaotr  {
    private String bancoOrigem;
	private String agenciaOrigem;
	private String contaOrigem;
	
	private String bancoDestino;
	private String agenciaDestino;
	private String contaDestino;
	
	private Double valorTransacao;
	private LocalDateTime dataHoraTransacao;



    public Transacaotr(){}
    public Transacaotr(String bancoOrigem, String agenciaOrigem, String contaOrigem, String bancoDestino,
            String agenciaDestino, String contaDestino, Double valorTransacao, LocalDateTime dataHoraTransacao) {
        this.bancoOrigem = bancoOrigem;
        this.agenciaOrigem = agenciaOrigem;
        contaOrigem = contaOrigem;
        this.bancoDestino = bancoDestino;
        this.agenciaDestino = agenciaDestino;
        contaOrigem = contaDestino;
        this.valorTransacao = valorTransacao;
        this.dataHoraTransacao = dataHoraTransacao;
    }
    public String getBancoOrigem() {
        return bancoOrigem;
    }
    public void setBancoOrigem(String bancoOrigem) {
        this.bancoOrigem = bancoOrigem;
    }
    public String getAgenciaOrigem() {
        return agenciaOrigem;
    }
    public void setAgenciaOrigem(String agenciaOrigem) {
        this.agenciaOrigem = agenciaOrigem;
    }
    public String getContaOrigem() {
        return contaOrigem;
    }
    public void setContaOrigem(String contaOrigem) {
        contaOrigem = contaOrigem;
    }
    public String getBancoDestino() {
        return bancoDestino;
    }
    public void setBancoDestino(String bancoDestino) {
        this.bancoDestino = bancoDestino;
    }
    public String getAgenciaDestino() {
        return agenciaDestino;
    }
    public void setAgenciaDestino(String agenciaDestino) {
        this.agenciaDestino = agenciaDestino;
    }
    public String getContaDestino() {
        return contaOrigem;
    }
    public void setContaDestino(String contaDestino) {
        contaOrigem = contaDestino;
    }
    public Double getValorTransacao() {
        return valorTransacao;
    }
    public void setValorTransacao(Double valorTransacao) {
        this.valorTransacao = valorTransacao;
    }
    public LocalDateTime getDataHoraTransacao() {
        return dataHoraTransacao;
    }
    public void setDataHoraTransacao(LocalDateTime dataHoraTransacao) {
        this.dataHoraTransacao = dataHoraTransacao;
    }


    

}
