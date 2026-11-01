package br.com.alura.challenger.banco;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BancoRepository extends JpaRepository<Banco, BancoId> {

    List<Banco> findByStatusTrue();

    @Query("""
    SELECT b FROM Banco b
    WHERE (:somenteAtivos IS NULL OR b.status = :somenteAtivos)
    AND (:ispb IS NULL OR b.ispb = :ispb)
    AND (:cnpj IS NULL OR b.cnpj = :cnpj)
    AND (:numeroBanco IS NULL OR b.numeroBanco = :numeroBanco)
""")
    List<Banco> buscarBancos(
            @Param("somenteAtivos") Boolean somenteAtivos,
            @Param("ispb") String ispb,
            @Param("cnpj") String cnpj,
            @Param("numeroBanco") String numeroBanco
    );
}