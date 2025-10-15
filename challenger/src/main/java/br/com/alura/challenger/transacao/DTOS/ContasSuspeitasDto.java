package br.com.alura.challenger.transacao.DTOS;

//public class ContasSuspeitasDto {
public interface ContasSuspeitasDto {

	String getOperacao();

	String getBancoOrigem();
	String getAgenciaOrigem();
	String getContaOrigem();
	Double getTotal();
	
}
