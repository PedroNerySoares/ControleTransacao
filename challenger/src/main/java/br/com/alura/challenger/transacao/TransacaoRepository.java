package br.com.alura.challenger.transacao;

import java.util.List;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.alura.challenger.transacao.DTOS.ContasSuspeitasDto;

import br.com.alura.challenger.transacao.DTOS.infoDashboard;

@Repository
public interface TransacaoRepository extends JpaRepository<Transacao, Long> {

    @Query(value = "SELECT * FROM transacao where arquivo_idarq=?1",
            nativeQuery = true)
    List<Transacao> listaTransacaoArquivo(Long idArquivo);

    @Query(value = "SELECT  *  FROM transacao where  valorTransacao>=?1 and FORMAT(dataHoraTransacao,'yyyyMM')= ?2", nativeQuery = true)
    List<Transacao> listaTransacaoSuspeita(BigDecimal valorSupeito, String anoMes);

    @Query(value = "SELECT 'Saida' as operacao, bancoOrigem,agenciaOrigem,contaOrigem,sum(valorTransacao) as total " +
            "FROM transacao  where FORMAT(dataHoraTransacao,'yyyyMM') =:anoMes " +
            "GROUP BY bancoOrigem,agenciaOrigem,contaOrigem  " +
            "HAVING  sum(valorTransacao) >=:valor " +
            "UNION " +
            "SELECT 'Entrada' as operacao,bancoDestino,agenciaDestino,contaDestino,sum(valorTransacao) as total " +
            "FROM transacao where FORMAT(dataHoraTransacao,'yyyyMM') =:anoMes " +
            "GROUP BY bancoDestino,agenciaDestino,contaDestino HAVING  sum(valorTransacao) >=:valor ", nativeQuery = true)
    List<ContasSuspeitasDto> listarContasSuspeitas(String anoMes, BigDecimal valor);

    @Query(value =  "SELECT 'Saida' as operacao, bancoOrigem,agenciaOrigem,sum(valorTransacao) as total " +
                    "FROM transacao  where FORMAT(dataHoraTransacao,'yyyyMM') =:anoMes " +
                    "GROUP BY bancoOrigem,agenciaOrigem  " +
                    "HAVING  sum(valorTransacao) >=:valor " +
                    "UNION " +
                    "SELECT 'Entrada' as operacao,bancoDestino,agenciaDestino,sum(valorTransacao) as total " +
                    "FROM transacao where FORMAT(dataHoraTransacao,'yyyyMM') =:anoMes " +
                    "GROUP BY bancoDestino,agenciaDestino " +
                    "HAVING  sum(valorTransacao) >=:valor ", nativeQuery = true)
    List<ContasSuspeitasDto> listarAgenciaSuspeitas(String anoMes, BigDecimal valor);

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
    GROUP BY
        YEAR(dataHoraTransacao),
        MONTH(dataHoraTransacao),
        FORMAT(dataHoraTransacao, 'MM/yyyy')
    ORDER BY
        YEAR(dataHoraTransacao),
        MONTH(dataHoraTransacao)
    """, nativeQuery = true)
    List<infoDashboard> dadosDashBoard(BigDecimal valor);

    @Query(value = """
        SELECT
            bancoOrigem,
            SUM(valorTransacao) AS valorTotal
        FROM transacao
        WHERE dataHoraTransacao >= '2026-10-01'
          AND dataHoraTransacao < '2026-11-01'
          AND valorTransacao >= 100000
        GROUP BY bancoOrigem
        ORDER BY valorTotal DESC
        """, nativeQuery = true)
    List<Object[]> valoresSuspeitoBanco();
}
