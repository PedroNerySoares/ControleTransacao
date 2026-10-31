package br.com.alura.challenger.arquivo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ArquivoRepository extends JpaRepository<Arquivo, Long> {


    @Query(value = """
    SELECT
        UPPER(FORMAT(DTTRANS, 'MMMM/yyyy', 'pt-BR')) AS mesAno,
        FORMAT(DTTRANS, 'yyyyMM', 'pt-BR') AS anoMes
    FROM ARQUIVO
    GROUP BY
        FORMAT(DTTRANS, 'MMMM/yyyy', 'pt-BR'),
        FORMAT(DTTRANS, 'yyyyMM', 'pt-BR')
    ORDER BY
        MAX(YEAR(DTTRANS) * 100 + MONTH(DTTRANS)) DESC
    """, nativeQuery = true)
    List<Object[]> mesAno();
}