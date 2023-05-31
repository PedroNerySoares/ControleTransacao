package br.com.alura.challenger.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.alura.challenger.model.Transacao;

public class DetalheDto {
	private String usuario;
	@JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
	private LocalDateTime dataImportacao;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataTransacao;
	private List<Transacao> transacao;

	public DetalheDto(){}
	public DetalheDto(String usuario, LocalDateTime dataImportacao, LocalDate dataTransacao,
			List<Transacao> transacao) {
		this.usuario = usuario;
		this.dataImportacao = dataImportacao;
		this.dataTransacao = dataTransacao;
		this.transacao = transacao;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public LocalDateTime getDataImportacao() {
		return dataImportacao;
	}
	public void setDataImportacao(LocalDateTime dataImportacao) {
		this.dataImportacao = dataImportacao;
	}
	public LocalDate getDataTransacao() {
		return dataTransacao;
	}
	public void setDataTransacao(LocalDate dataTransacao) {
		this.dataTransacao = dataTransacao;
	}
	public List<Transacao> getTransacao() {
		return transacao;
	}
	public void setTransacao(List<Transacao> transacao) {
		this.transacao = transacao;
	}




	
	
	

}
