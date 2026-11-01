package br.com.alura.challenger.commons;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.math.BigDecimal;
import java.util.stream.Collectors;
import java.math.BigDecimal;

import br.com.alura.challenger.config.site.ConfiguracoesCache;
import br.com.alura.challenger.transacao.DTOS.BancoSuspeitoDTO;
import br.com.alura.challenger.transacao.DTOS.DashboardDTO;
import br.com.alura.challenger.transacao.TransacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.alura.challenger.transacao.Transacao;


@Service
public class TransacaoServices {

    @Autowired
    private TransacaoRepository transacaoRepository;

    private final ConfiguracoesCache configuracoesCache;

    public TransacaoServices(ConfiguracoesCache configuracoesCache) {
        this.configuracoesCache = configuracoesCache;
    }


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

    public DashboardDTO recuperaInfoDashboard() {
        BigDecimal limite = configuracoesCache.getConfiguracoes().valorTransacaoSuspeito();

        List<Object[]> resultado =
                transacaoRepository.valoresSuspeitoBanco(/*"202610",*/ limite);

        List<BancoSuspeitoDTO> bancos = resultado.stream()
                .map(linha -> new BancoSuspeitoDTO(
                        (String) linha[0],
                        new BigDecimal(linha[1].toString())
                ))
                .collect(Collectors.toList());

        BigDecimal totalValorSuspeito = bancos.stream()
                .map(BancoSuspeitoDTO::getValorSuspeito)
                .reduce(BigDecimal.ZERO, BigDecimal::add);


        int quantidadeTransacaoSuspeita = transacaoRepository.listaTransacaoSuspeita(limite).size();


        int quantidadeImportacao = 11;

        return new DashboardDTO(
                bancos,
                quantidadeTransacaoSuspeita,
                totalValorSuspeito,
                quantidadeImportacao
        );
    }

}
