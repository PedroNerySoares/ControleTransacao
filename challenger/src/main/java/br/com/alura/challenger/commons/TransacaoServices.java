package br.com.alura.challenger.commons;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import br.com.alura.challenger.transacao.Transacao;

@Service
public class TransacaoServices {
	
	
	public List<Transacao> lerArquivo(String path) {
		
		List<Transacao> lista = new ArrayList<Transacao>();
		try(BufferedReader br = new BufferedReader(new FileReader(path))) {
			
			String line = br.readLine();
			String [] vetor = line.split(",");
			String dataTransacao2=vetor[7].substring(0, 10);
			
			Integer n = 0;
			while(line!=null) {
				
				String bancoOrigem = vetor[0];
				String agenciaOrigem = vetor[1];
				String contaOrigem = vetor[2];
				String bancoDestino= vetor[3];
				String agenciaDestino= vetor[4];
				String contaDestino= vetor[5];
				Double valorTransacao =  Double.parseDouble(vetor[6]);
				LocalDateTime dataTransacao = LocalDateTime.parse(vetor[7]);
			
				if(dataTransacao2.equals(vetor[7].substring(0, 10))) {
				Transacao t1 = new Transacao(bancoOrigem, agenciaOrigem, contaOrigem, bancoDestino, agenciaDestino, contaDestino, valorTransacao, dataTransacao);
				lista.add(t1);
				}
				
				line = br.readLine();
				if (line!=null) {
				vetor = line.split(",");
				
				}
				
			}
			
			
		} catch (IOException e) {
			e.printStackTrace();
			
		}
		
		return lista;
	}

}
