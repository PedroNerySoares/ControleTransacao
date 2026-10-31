package br.com.alura.challenger.transacao.DTOS;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import br.com.alura.challenger.usuario.DTOS.UserDetailsDTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.alura.challenger.transacao.Transacao;

public class DetalheDto {

	@JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
	private LocalDateTime dataImportacao;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataTransacao;
	private List<Transacao> transacao;
    private UserDetailsDTO usuario;

	public DetalheDto(){}
	public DetalheDto(  LocalDateTime dataImportacao, LocalDate dataTransacao,
			List<Transacao> transacao,UserDetailsDTO usuario) {

		this.dataImportacao = dataImportacao;
		this.dataTransacao = dataTransacao;
		this.transacao = transacao;
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
    public UserDetailsDTO getUsuario() {
        return usuario;
    }
    public void setUsuario(UserDetailsDTO usuario) {
        this.usuario = usuario;
    }
}
