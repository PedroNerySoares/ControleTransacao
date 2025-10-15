package br.com.alura.challenger.commons;

import java.util.Random;

import org.springframework.stereotype.Component;

@Component
public class GerarSenhaAleatoriaService {

  public Integer geraSenha() {
    Random aleatorio = new Random();
    int valor = aleatorio.nextInt(999999) + 1;
    return valor;
  }
}
