package br.com.alura.challenger.transacao;

import java.sql.SQLException;
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
import br.com.alura.challenger.transacao.DTOS.AgenciaSuspeitaDto;
import br.com.alura.challenger.transacao.DTOS.ContasSuspeitasDto;
import br.com.alura.challenger.arquivo.ArquivoRepository;
import br.com.alura.challenger.commons.TransacaoServices;

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
    private ResponseEntity<List<Transacao>> ListarTransacaoSuspeita(@PathVariable String anoMes) {
        Double limite = 100.00;
        return ResponseEntity.ok().body(transacaoRepository.listaTransacaoSuspeita(limite, anoMes));

    }

    @GetMapping("suspeita/conta/{anoMes}")
    private List<ContasSuspeitasDto> ListarContasAgencia(@PathVariable String anoMes) throws SQLException {


        return transacaoRepository.listarContasSuspeitas(anoMes, 20.00);

    }

    @GetMapping("suspeita/agencia/{anoMes}")
    private List<ContasSuspeitasDto> ListarAgenciaSuspeita(@PathVariable String anoMes) throws SQLException {

        return transacaoRepository.listarAgenciaSuspeitas(anoMes, 100.00);
    }

    @DeleteMapping
    private void DeletarArquivo() {
        transacaoRepository.deleteAll();
    }


}