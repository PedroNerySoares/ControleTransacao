package br.com.alura.challenger.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.alura.challenger.dto.ContasSuspeitasDto;
import br.com.alura.challenger.dto.Transacaotr;
import br.com.alura.challenger.model.Transacao;


@Repository
public interface TransacaoRepository extends JpaRepository<Transacao, Long> {

    @Query( value = "SELECT * FROM transacao where arquivo_idarq=?1",
            nativeQuery = true )
    List<Transacao> listaTransacaoArquivo(Long idArquivo);

    @Query(value = "SELECT  *  FROM transacao where  valorTransacao>=?1 and date_FORMAT(dataHoraTransacao,'%Y%m')= ?2" , nativeQuery = true)
    List<Transacao> listaTransacaoSuspeita(Double valorSupeito,String anoMes);

    @Query(value="SELECT 'Saida', bancoOrigem,agenciaOrigem,contaOrigem,sum(valorTransacao) AS total FROM transacao  where date_FORMAT(dataHoraTransacao,'%Y/%m') ='2022/01' GROUP BY bancoOrigem,agenciaOrigem,contaOrigem,dataHoraTransacao  HAVING  total >=100 union"+
                  "SELECT 'Entrada',bancoDestino,agenciaDestino,contaDestino,sum(valorTransacao) AS total FROM transacao where date_FORMAT(dataHoraTransacao,'%Y/%m') ='2022/01' GROUP BY bancoDestino,agenciaDestino,contaDestino HAVING  total >=1000000.00 ",nativeQuery = true)
    List<ContasSuspeitasDto> listaContasSuspeitas();

}
