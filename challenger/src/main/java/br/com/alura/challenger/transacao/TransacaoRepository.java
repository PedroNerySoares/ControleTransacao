package br.com.alura.challenger.transacao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.alura.challenger.transacao.DTOS.ContasSuspeitasDto;


@Repository
public interface TransacaoRepository extends JpaRepository<Transacao, Long> {

    @Query(value = "SELECT * FROM transacao where arquivo_idarq=?1",
            nativeQuery = true)
    List<Transacao> listaTransacaoArquivo(Long idArquivo);

    @Query(value = "SELECT  *  FROM transacao where  valorTransacao>=?1 and date_FORMAT(dataHoraTransacao,'%Y%m')= ?2", nativeQuery = true)
    List<Transacao> listaTransacaoSuspeita(Double valorSupeito, String anoMes);

    @Query(value = "SELECT 'Saida' as operacao, bancoOrigem,agenciaOrigem,contaOrigem,sum(valorTransacao) as total " +
            "FROM transacao  where date_FORMAT(dataHoraTransacao,'%Y%m') =:anoMes " +
            "GROUP BY bancoOrigem,agenciaOrigem,contaOrigem,dataHoraTransacao  " +
            "HAVING  total >=:valor " +
            "UNION " +
            "SELECT 'Entrada' as operacao,bancoDestino,agenciaDestino,contaDestino,sum(valorTransacao) as total " +
            "FROM transacao where date_FORMAT(dataHoraTransacao,'%Y%m') =:anoMes " +
            "GROUP BY bancoDestino,agenciaDestino,contaDestino HAVING  total >=:valor ", nativeQuery = true)
    List<ContasSuspeitasDto> listarContasSuspeitas(String anoMes, Double valor);

    @Query(value =  "SELECT 'Saida' as operacao, bancoOrigem,agenciaOrigem,sum(valorTransacao) as total " +
                    "FROM transacao  where date_FORMAT(dataHoraTransacao,'%Y%m') =:anoMes " +
                    "GROUP BY bancoOrigem,agenciaOrigem,dataHoraTransacao  " +
                    "HAVING  total >=:valor " +
                    "UNION " +
                    "SELECT 'Entrada' as operacao,bancoDestino,agenciaDestino,sum(valorTransacao) as total " +
                    "FROM transacao where date_FORMAT(dataHoraTransacao,'%Y%m') =:anoMes " +
                    "GROUP BY bancoDestino,agenciaDestino " +
                    "HAVING  total >=:valor ", nativeQuery = true)
    List<ContasSuspeitasDto> listarAgenciaSuspeitas(String anoMes, Double valor);

}
