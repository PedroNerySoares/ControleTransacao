package br.com.alura.challenger.config.site;



 

import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
import java.math.BigDecimal;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class ConfiguracoesCache {

    private final ConfiguracaoRepository repository;

    private volatile ConfiguracoesSistema configuracoes;

    public ConfiguracoesCache(ConfiguracaoRepository repository) {
        this.repository = repository;
    }

    @PostConstruct
    public void inicializar() {
        recarregar();
    }

    public synchronized void recarregar() {

        Map<String, String> valores = repository.findAll()
                .stream()
                .collect(Collectors.toMap(
                        ConfiguracaoModel::getChave,
                        ConfiguracaoModel::getValor
                ));

        ConfiguracoesSistema novasConfiguracoes =
                new ConfiguracoesSistema(
                        buscar(valores, "#TRANSACAO_SUSPEITA"),
                        buscar(valores, "#AGENCIA_SUSPEITA"),
                        buscar(valores, "#CONTA_SUSPEITA")
                );

        this.configuracoes = novasConfiguracoes;
    }

    private BigDecimal buscar(Map<String, String> valores, String chave) {

        String valor = valores.get(chave);

        if (valor == null || valor.isBlank()) {
            throw new IllegalStateException(
                    "Configuração não encontrada: " + chave
            );
        }

        try {
            return new BigDecimal(valor.trim());
        } catch (NumberFormatException exception) {
            throw new IllegalStateException(
                    "O valor da configuração deve ser numérico: " + chave,
                    exception
            );
        }
    }

    public ConfiguracoesSistema getConfiguracoes() {

        if (configuracoes == null) {
            throw new IllegalStateException(
                    "Configurações ainda não foram carregadas."
            );
        }

        return configuracoes;
    }
}