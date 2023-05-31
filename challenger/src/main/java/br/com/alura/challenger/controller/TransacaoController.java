package br.com.alura.challenger.controller;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.alura.challenger.config.jdbcConfig;
import br.com.alura.challenger.dto.AgenciaSuspeitaDto;
import br.com.alura.challenger.dto.ContasSuspeitasDto;
import br.com.alura.challenger.dto.DetalheDto;
import br.com.alura.challenger.model.Transacao;
import br.com.alura.challenger.repositories.ArquivoRepository;
import br.com.alura.challenger.repositories.TransacaoRepository;
import br.com.alura.challenger.services.TransacaoServices;

@RestController
@RequestMapping(value = "/transacao")
public class TransacaoController {

	@Autowired
	private TransacaoServices transacao;
	@Autowired
	private ArquivoRepository arquivoRepository;

	private ModelMapper modelMapper;

	jdbcConfig criarConexao = new jdbcConfig();
	List<ContasSuspeitasDto> listaContaSuspeita = new ArrayList<ContasSuspeitasDto>();
	List<AgenciaSuspeitaDto> listaAgenciaSuspeita = new ArrayList<AgenciaSuspeitaDto>();

	@Autowired
	private TransacaoRepository transacaoRepository;

	@GetMapping
	private ResponseEntity<List<Transacao>> listaTransacao() {

		return ResponseEntity.status(200).body(transacaoRepository.findAll());

	}

	@GetMapping("{id}")
	private ResponseEntity<List<Transacao>> TransacaoDetalhe(@PathVariable Long id) {
		List<Transacao> trans = transacaoRepository.listaTransacaoArquivo(id);
		// if (trans.isPresent()) {
		// return ResponseEntity.ok(trans.get());
		// }
		// return ResponseEntity.notFound().build();

		return ResponseEntity.ok().body(trans);

	}

	@GetMapping("/suspeita/{anoMes}")
	private List<Transacao> ListarTransacaoSuspeita(@PathVariable String anoMes) {
		return transacaoRepository.listaTransacaoSuspeita(1500.00, anoMes);

	}

	@GetMapping("suspeita/conta/{anoMes}")
	private List<ContasSuspeitasDto> ListarContasAgencia(@PathVariable String anoMes) throws SQLException {

		Connection connection = criarConexao.createConnection();
		Statement stm = connection.createStatement();
		listaContaSuspeita.clear();
		String tmpSql = "";
		tmpSql = "SELECT 'Saida', bancoOrigem,agenciaOrigem,contaOrigem,sum(valorTransacao) as total " +
				"FROM transacao  where date_FORMAT(dataHoraTransacao,'%Y%m') ='" + anoMes + "' " +
				"GROUP BY bancoOrigem,agenciaOrigem,contaOrigem,dataHoraTransacao  " +
				"HAVING  total >=100 " +
				"UNION " +
				"SELECT 'Entrada',bancoDestino,agenciaDestino,contaDestino,sum(valorTransacao) as total " +
				"FROM transacao where date_FORMAT(dataHoraTransacao,'%Y%m') ='" + anoMes + "' " +
				"GROUP BY bancoDestino,agenciaDestino,contaDestino HAVING  total >=100 ";

		stm.executeQuery(tmpSql);
		ResultSet rst = stm.getResultSet();
		while (rst.next()) {
			listaContaSuspeita.add(new ContasSuspeitasDto(rst.getString(2),
					rst.getString(3),
					rst.getString(4),
					rst.getDouble(5),
					rst.getString(1)));

		}
		rst.close();
		System.out.println(tmpSql);
		return listaContaSuspeita;

	}

	@GetMapping("suspeita/agencia/{anoMes}")
	private List<AgenciaSuspeitaDto> ListarAgenciaSuspeita(@PathVariable String anoMes) throws SQLException {
		listaContaSuspeita.clear();
		Connection connection = criarConexao.createConnection();
		Statement stm = connection.createStatement();
		String tmpSql;
		tmpSql = "SELECT 'Saida', bancoOrigem,agenciaOrigem,sum(valorTransacao) as total " +
				"FROM transacao  where date_FORMAT(dataHoraTransacao,'%Y%m') ='" + anoMes + "' " +
				"GROUP BY bancoOrigem,agenciaOrigem,dataHoraTransacao  " +
				"HAVING  total >=100 " +
				"UNION " +
				"SELECT 'Entrada',bancoDestino,agenciaDestino,sum(valorTransacao) as total " +
				"FROM transacao where date_FORMAT(dataHoraTransacao,'%Y%m') ='" + anoMes + "' " +
				"GROUP BY bancoDestino,agenciaDestino " +
				"HAVING  total >=100 ";

		System.out.println(tmpSql);
		stm.executeQuery(tmpSql);
		ResultSet rst = stm.getResultSet();
		while (rst.next()) {
			listaAgenciaSuspeita.add(new AgenciaSuspeitaDto(rst.getString(2),
					rst.getString(3),
					rst.getDouble(4),
					rst.getString(1)));

		}
		rst.close();
		System.out.println(listaContaSuspeita.size());
		return listaAgenciaSuspeita;
	}

	@DeleteMapping
	private void DeletarArquivo() {
		transacaoRepository.deleteAll();
	}

	@GetMapping("/detalhe")
	private void transDetalhe() {
		DetalheDto det = new DetalheDto();

	}

}