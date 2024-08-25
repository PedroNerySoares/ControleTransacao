package br.com.alura.challenger.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name = "arquivo")
public class Arquivo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idarq")
	private Long id;
	@Column(name = "nmarq")
	private String nomeArquivo;
	@Column(name = "nrtamarq")
	private Double tamanho;
	@JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
	@Column(name = "dtimp")
	private LocalDateTime dataImportacao;
	@JsonFormat(pattern = "dd/MM/yyyy")
	@Column(name = "dttrans")
	private LocalDate dataTransacao;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_usuario", referencedColumnName = "id")
	private Usuario usuario;

	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name =  "arquivo_idarq")
	private List<Transacao> listaTransacao = new ArrayList<Transacao>();


	public Arquivo(){}
	public Arquivo(String nomeArquivo,Double tamanho, Usuario usuario,LocalDateTime  dataImportacao ,LocalDate dataTransacao,List<Transacao> listaTransacao) {
		this.nomeArquivo = nomeArquivo;
		this.tamanho = tamanho;
		this.usuario = usuario;
		this.dataImportacao=dataImportacao;
		this.dataTransacao = dataTransacao;
		this.listaTransacao = listaTransacao;
	}


	public String getNomeArquivo() {
		return nomeArquivo;
	}
	public void setNomeArquivo(String nomeArquivo) {
		this.nomeArquivo = nomeArquivo;
	}
	public Double getTamanho() {
		return tamanho;
	}
	public void setTamanho(Double tamanho) {
		this.tamanho = tamanho;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public LocalDateTime getDataImportacao() {
		return dataImportacao;
	}
	public void setDataImportacao(LocalDateTime dataImportacao) {
		this.dataImportacao = dataImportacao;
	}


	
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public List<Transacao> getListaTransacao() {
		return listaTransacao;
	}

	public void setListaTransacao(List<Transacao> listaTransacao) {
		this.listaTransacao = listaTransacao;
	}
	public LocalDate getDataTransacao() {
		return dataTransacao;
	}
	public void setDataTransacao(LocalDate dataTransacao) {
		this.dataTransacao = dataTransacao;
	}

	

}
