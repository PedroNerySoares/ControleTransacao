package br.com.alura.challenger.arquivo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import br.com.alura.challenger.config.SecurityFilter;
import br.com.alura.challenger.config.jdbcConfig;
import br.com.alura.challenger.transacao.DTOS.DetalheDto;
import br.com.alura.challenger.transacao.DTOS.TesteDto;
import br.com.alura.challenger.arquivo.DTO.listaArquivoDto;
import br.com.alura.challenger.usuario.UsuarioRepository;
import br.com.alura.challenger.commons.TokenService;
import br.com.alura.challenger.commons.TransacaoServices;

@RestController
@RequestMapping("/arquivo")
public class ArquivoController {

    @Autowired
    ArquivoRepository arquivoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private TransacaoServices transacao;

    @Autowired
    private ArquivoService arquivoService;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private SecurityFilter securityFilter;

    ModelMapper modelMapper = new ModelMapper();

    jdbcConfig criarConexao = new jdbcConfig();

    @GetMapping()
    private List<listaArquivoDto> Arquivos() {
        List<listaArquivoDto> lista = arquivoRepository.findAll()
                .stream()
                .map(arquivo -> modelMapper.map(arquivo, listaArquivoDto.class))
                .collect(Collectors.toList());

        return lista;

    }

    @GetMapping("{id}")
    private ResponseEntity<Optional<Object>> DetalheArquivo(@PathVariable Long id) {

        Optional<Object> arq = arquivoRepository.findById(id)
                .map(arquivo -> modelMapper.map(arquivo, DetalheDto.class));
        return ResponseEntity.ok().body(arq);

    }

    @PostMapping
    private ResponseEntity GravarAquivo(HttpServletRequest request, @RequestBody @Validated TesteDto teste) {

        Long idUser = (long) Integer.parseInt(tokenService.getSubejectId(securityFilter.recuperarToken(request)));


        arquivoService.createFileTransaction(idUser, teste);

        return ResponseEntity.status(200).body(null);
    }

    @DeleteMapping
    private void DeletarArquivo() {
        arquivoRepository.deleteAll();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarArquivo(@PathVariable Long id) {
        if (!arquivoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        arquivoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("recuperaAnoMes")
    public List<String> listarAnoMesTransacao() throws SQLException {
        List<String> anoMesList = new ArrayList<>();

        String sql = "SELECT DISTINCT DATE_FORMAT(dttrans, '%Y%m') AS mesAno FROM arquivo  ";

        try (Connection connection = criarConexao.createConnection();
             Statement stm = connection.createStatement();
             ResultSet rst = stm.executeQuery(sql)) {

            while (rst.next()) {
                anoMesList.add(rst.getString("mesAno"));
            }
        }

        return anoMesList;
    }


}
