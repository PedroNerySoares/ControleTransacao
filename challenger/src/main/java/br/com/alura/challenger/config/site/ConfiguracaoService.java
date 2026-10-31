package br.com.alura.challenger.config.site;




import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;

@Service
public class ConfiguracaoService {

    private final ConfiguracaoRepository repository;
    private final ConfiguracoesCache cache;

    public ConfiguracaoService(
            ConfiguracaoRepository repository,
            ConfiguracoesCache cache
    ) {
        this.repository = repository;
        this.cache = cache;
    }

    public ConfiguracoesDTO buscarConfiguracoes() {

        ConfiguracoesSistema config = cache.getConfiguracoes();

        return new ConfiguracoesDTO(
                config.valorTransacaoSuspeito(),
                config.valorAgenciaSuspeito(),
                config.valorContaSuspeito()
        );
    }

    @Transactional
    public void atualizarConfiguracoes(AtualizarConfiguracoesDTO dto) {

        atualizarValor("#TRANSACAO_SUSPEITA",
                dto.valorTransacaoSuspeito());

        atualizarValor("#AGENCIA_SUSPEITA",
                dto.valorAgenciaSuspeito());

        atualizarValor("#CONTA_SUSPEITA",
                dto.valorContaSuspeito());

        // Atualiza o cache somente depois do commit no banco.
        TransactionSynchronizationManager.registerSynchronization(
                new TransactionSynchronization() {

                    @Override
                    public void afterCommit() {
                        cache.recarregar();
                    }
                }
        );
    }

    private void atualizarValor(String chave, java.math.BigDecimal valor) {

        ConfiguracaoModel config = repository.findByChave(chave)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Configuração não encontrada: " + chave
                ));

        config.setValor(valor.toPlainString());
        repository.save(config);
    }
}