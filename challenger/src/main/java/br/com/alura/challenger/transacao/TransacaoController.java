package br.com.alura.challenger.transacao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.math.BigDecimal;
import java.time.LocalDate;

import br.com.alura.challenger.config.site.ConfiguracoesCache;
import br.com.alura.challenger.transacao.DTOS.DashboardDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.alura.challenger.transacao.DTOS.AgenciaSuspeitaDto;
import br.com.alura.challenger.transacao.DTOS.ContasSuspeitasDto;

import br.com.alura.challenger.transacao.DTOS.infoDashboard;
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

    private final ConfiguracoesCache configuracoesCache;

    List<ContasSuspeitasDto> listaContaSuspeita = new ArrayList<ContasSuspeitasDto>();
    List<AgenciaSuspeitaDto> listaAgenciaSuspeita = new ArrayList<AgenciaSuspeitaDto>();

    @Autowired
    private TransacaoRepository transacaoRepository;

    public TransacaoController(ConfiguracoesCache configuracoesCache) {
        this.configuracoesCache = configuracoesCache;
    }

    @GetMapping
    private ResponseEntity<List<Transacao>> listaTransacao() {

        return ResponseEntity.status(200).body(transacaoRepository.findAll());

    }

    @GetMapping("/teste")

    public ResponseEntity<DashboardDTO> recuperaInfoDashboard() {

        DashboardDTO dashboard =
                transacao.recuperaInfoDashboard();

        return ResponseEntity.ok(dashboard);
    }

    @GetMapping("{id}")
    private ResponseEntity<List<Transacao>> TransacaoDetalhe(@PathVariable Long id) {
        List<Transacao> trans = transacaoRepository.listaTransacaoArquivo(id);

        return ResponseEntity.ok().body(trans);

    }

    @GetMapping("/suspeita/{anoMes}")
    private ResponseEntity<List<Transacao>> ListarTransacaoSuspeita(@PathVariable String anoMes) {

        BigDecimal limite = configuracoesCache.getConfiguracoes().valorTransacaoSuspeito();
        return ResponseEntity.ok().body(transacaoRepository.listaTransacaoSuspeita(limite));

    }

    @GetMapping("suspeita/conta/{anoMes}")
    private List<ContasSuspeitasDto> ListarContasAgencia(@PathVariable String anoMes)  {

        System.out.println(configuracoesCache.getConfiguracoes());
        BigDecimal limite = configuracoesCache.getConfiguracoes().valorContaSuspeito();
        return transacaoRepository.listarContasSuspeitas( limite);

    }

    @GetMapping("suspeita/agencia/{anoMes}")
    private List<ContasSuspeitasDto> ListarAgenciaSuspeita(@PathVariable String anoMes)  {


        BigDecimal limite = configuracoesCache.getConfiguracoes().valorAgenciaSuspeito();
        return transacaoRepository.listarAgenciaSuspeitas( limite);
    }

    @GetMapping("dashboard")
    private List<infoDashboard> dashboardInfo( @RequestParam(required = false) String dataInicio ,
                                               @RequestParam(required = false) String dataFim )  {
        System.out.println(dataInicio);

        System.out.println(dataFim);
        BigDecimal limite = configuracoesCache.getConfiguracoes().valorTransacaoSuspeito();
        return transacaoRepository.dadosDashBoard(dataInicio,dataFim,limite);
    }

    @DeleteMapping
    private void DeletarArquivo() {
        transacaoRepository.deleteAll();
    }


    @GetMapping("topSuspeita")
    private List<Transacao>  topTransacaoSuspeita(){

        return transacaoRepository.findTop5ByOrderByValorTransacaoDesc();

    }
}