package br.com.alura.challenger.model;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;




@Entity
@Table(name = "transacao")
@Valid
public class Transacao {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Banco Origem obrigatório")

	private String bancoOrigem;

	@NotBlank(message = "Agência Origem obrigatório")
	private String agenciaOrigem;

	@NotBlank(message = "Conta Origem obrigatório")
	private String ContaOrigem;
	
	@NotBlank(message = "Banco Destino obrigatório")
	private String bancoDestino;


	@NotBlank(message = "Agência Destino obrigatório")
	private String agenciaDestino;

	@NotBlank(message = "Conta Destino obrigatório")
	private String ContaDestino;

	@NotNull(message = "Valor da transação obrigatório")
	private Double valorTransacao;

	// @NotBlank(message = "Data da Transação obrigatório")
	private LocalDateTime dataHoraTransacao;

	@ManyToOne(cascade = CascadeType.PERSIST)
	private Arquivo arquivo;
	
	public Transacao() {}
	

	public Transacao(String bancoOrigem, String agenciaOrigem, String contaOrigem, String bancoDestino,
			String agenciaDestino, String contaDestino, Double valorTransacao, LocalDateTime dataHoraTransacao) {
		this.bancoOrigem = bancoOrigem;
		this.agenciaOrigem = agenciaOrigem;
		ContaOrigem = contaOrigem;
		this.bancoDestino = bancoDestino;
		this.agenciaDestino = agenciaDestino;
		ContaDestino = contaDestino;
		this.valorTransacao = valorTransacao;
		this.dataHoraTransacao = dataHoraTransacao;
	}


	public Transacao(Long id, String bancoOrigem, String agenciaOrigem, String contaOrigem, String bancoDestino,
			String agenciaDestino, String contaDestino, Double valorTransacao, LocalDateTime dataHoraTransacao,
			Arquivo arquivo) {
		this.id = id;
		this.bancoOrigem = bancoOrigem;
		this.agenciaOrigem = agenciaOrigem;
		ContaOrigem = contaOrigem;
		this.bancoDestino = bancoDestino;
		this.agenciaDestino = agenciaDestino;
		ContaDestino = contaDestino;
		this.valorTransacao = valorTransacao;
		this.dataHoraTransacao = dataHoraTransacao;
		this.arquivo = arquivo;
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
		return ContaOrigem;
	}
	public void setContaOrigem(String contaOrigem) {
		ContaOrigem = contaOrigem;
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
		return ContaDestino;
	}
	public void setContaDestino(String contaDestino) {
		ContaDestino = contaDestino;
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
