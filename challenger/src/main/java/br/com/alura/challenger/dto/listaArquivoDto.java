package br.com.alura.challenger.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

public class listaArquivoDto {
    private Long id;
    @JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
    private LocalDateTime dataImportacao;
    @JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataTransacao;


    public listaArquivoDto(){}
    public listaArquivoDto(Long id, LocalDateTime dataImportacao, LocalDate dataTransacao) {
        this.id = id;
        this.dataImportacao = dataImportacao;
        this.dataTransacao = dataTransacao;
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
    public LocalDate getDataTransacao() {
        return dataTransacao;
    }
    public void setDataTransacao(LocalDate dataTransacao) {
        this.dataTransacao = dataTransacao;
    }


    
}
