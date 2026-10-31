package br.com.alura.challenger.config.site;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConfiguracaoRepository extends JpaRepository<ConfiguracaoModel, Integer> {

    Optional<ConfiguracaoModel> findByChave(String chave);
}