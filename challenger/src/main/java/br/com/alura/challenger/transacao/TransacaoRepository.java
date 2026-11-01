
package br.com.alura.challenger.transacao;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.alura.challenger.transacao.DTOS.ContasSuspeitasDto;
import br.com.alura.challenger.transacao.DTOS.infoDashboard;

@Repository
public interface TransacaoRepository extends JpaRepository<Transacao, Long> {

    @Query(value = """
        SELECT *
        FROM transacao
        WHERE arquivo_idarq = :idArquivo
        """, nativeQuery = true)
    List<Transacao> listaTransacaoArquivo(
            @Param("idArquivo") Long idArquivo
    );

    // Transações suspeitas
    @Query(value = """
        SELECT *
        FROM transacao
        WHERE valorTransacao >= :valor
          AND (:dataInicio IS NULL OR dataHoraTransacao >= :dataInicio)
          AND (:dataFim IS NULL OR dataHoraTransacao < :dataFim)
        """, nativeQuery = true)
    List<Transacao> listaTransacaoSuspeita(
//            @Param("dataInicio") LocalDate dataInicio,
//              @Param("dataInicio") LocalDate dataInicio,
//            @Param("dataFim") LocalDate dataFim,
            @Param("valor") BigDecimal valor
    );

    // Contas suspeitas
    @Query(value = """
        SELECT
            t.operacao,
            t.banco,
            t.agencia,
            t.conta,
            SUM(t.valorTransacao) AS total
        FROM transacao tr
        CROSS APPLY (
            VALUES
                ('Saida', tr.bancoOrigem, tr.agenciaOrigem, tr.contaOrigem, tr.valorTransacao),
                ('Entrada', tr.bancoDestino, tr.agenciaDestino, tr.contaDestino, tr.valorTransacao)
        ) t (operacao, banco, agencia, conta, valorTransacao)
        WHERE (:dataInicio IS NULL OR tr.dataHoraTransacao >= :dataInicio)
          AND (:dataFim IS NULL OR tr.dataHoraTransacao < :dataFim)
        GROUP BY
            t.operacao,
            t.banco,
            t.agencia,
            t.conta
        HAVING SUM(t.valorTransacao) >= :valor
        """, nativeQuery = true)
    List<ContasSuspeitasDto> listarContasSuspeitas(
//            @Param("dataInicio") String dataInicio,
//            @Param("dataFim") String dataFim,
            @Param("valor") BigDecimal valor
    );

    // Agências suspeitas
    @Query(value = """
        SELECT
            t.operacao,
            t.banco,
            t.agencia,
            SUM(t.valorTransacao) AS total
        FROM transacao tr
        CROSS APPLY (
            VALUES
                ('Saida', tr.bancoOrigem, tr.agenciaOrigem, tr.valorTransacao),
                ('Entrada', tr.bancoDestino, tr.agenciaDestino, tr.valorTransacao)
        ) t (operacao, banco, agencia, valorTransacao)
        WHERE (:dataInicio IS NULL OR tr.dataHoraTransacao >= :dataInicio)
          AND (:dataFim IS NULL OR tr.dataHoraTransacao < :dataFim)
        GROUP BY
            t.operacao,
            t.banco,
            t.agencia
        HAVING SUM(t.valorTransacao) >= :valor
        """, nativeQuery = true)
    List<ContasSuspeitasDto> listarAgenciaSuspeitas(
//            @Param("dataInicio") String dataInicio,
//            @Param("dataFim") String dataFim,
            @Param("valor") BigDecimal valor
    );

    // Dashboard: total transacionado e total suspeito por mês
    @Query(value = """
        SELECT
            FORMAT(dataHoraTransacao, 'MM/yyyy') AS MesAno,
            SUM(valorTransacao) AS TotalTransacionado,
            SUM(
                CASE
                    WHEN valorTransacao >= :valor
                    THEN valorTransacao
                    ELSE 0
                END
            ) AS TotalSuspeito
        FROM transacao
        WHERE (:dataInicio IS NULL OR dataHoraTransacao >= :dataInicio)
          AND (:dataFim IS NULL OR dataHoraTransacao < :dataFim)
        GROUP BY
            YEAR(dataHoraTransacao),
            MONTH(dataHoraTransacao),
            FORMAT(dataHoraTransacao, 'MM/yyyy')
        ORDER BY
            YEAR(dataHoraTransacao),
            MONTH(dataHoraTransacao)
        """, nativeQuery = true)
    List<infoDashboard> dadosDashBoard(
            @Param("dataInicio") String dataInicio,
            @Param("dataFim") String dataFim,
            @Param("valor") BigDecimal valor
    );

    // Bancos suspeitos
    @Query(value = """
        SELECT
            bancoOrigem,
            SUM(valorTransacao) AS valorTotal
        FROM transacao
        WHERE (:dataInicio IS NULL OR dataHoraTransacao >= :dataInicio)
          AND (:dataFim IS NULL OR dataHoraTransacao < :dataFim)
          AND valorTransacao >= :valor
        GROUP BY bancoOrigem
        ORDER BY valorTotal DESC
        """, nativeQuery = true)
    List<Object[]> valoresSuspeitoBanco(
//            @Param("dataInicio") String dataInicio,
//            @Param("dataFim") String dataFim,
            @Param("valor") BigDecimal valor
    );

    // Top 5 maiores transações
    List<Transacao> findTop5ByOrderByValorTransacaoDesc();

}
