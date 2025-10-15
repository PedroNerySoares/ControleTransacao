package br.com.alura.challenger.transacao.DTOS;

import java.util.List;

import br.com.alura.challenger.transacao.Transacao;

public class TesteDto {
  private String nomeArquivo;
  private Double tamanhoArquivo;
  private List<Transacao> listaTransacao;
  
  public TesteDto(){};
  public TesteDto(String nomeArquivo, Double tamanhoArquivo, List<Transacao> listaTransacao) {
    this.nomeArquivo = nomeArquivo;
    this.tamanhoArquivo = tamanhoArquivo;
    this.listaTransacao = listaTransacao;
  }
  public String getNomeArquivo() {
    return nomeArquivo;
  }
  public void setNomeArquivo(String nomeArquivo) {
    this.nomeArquivo = nomeArquivo;
  }
  public Double getTamanhoArquivo() {
    return tamanhoArquivo;
  }
  public void setTamanhoArquivo(Double tamanhoArquivo) {
    this.tamanhoArquivo = tamanhoArquivo;
  }
  public List<Transacao> getListaTransacao() {
    return listaTransacao;
  }
  public void setListaTransacao(List<Transacao> listaTransacao) {
    this.listaTransacao = listaTransacao;
  }


  

}
