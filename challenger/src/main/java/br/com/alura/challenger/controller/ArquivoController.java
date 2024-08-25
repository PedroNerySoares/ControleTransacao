package br.com.alura.challenger.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
import br.com.alura.challenger.dto.DetalheDto;
import br.com.alura.challenger.dto.TesteDto;
import br.com.alura.challenger.dto.listaArquivoDto;
import br.com.alura.challenger.model.Arquivo;
import br.com.alura.challenger.model.Usuario;
import br.com.alura.challenger.repositories.ArquivoRepository;
import br.com.alura.challenger.repositories.UsuarioRepository;
import br.com.alura.challenger.services.TokenService;
import br.com.alura.challenger.services.TransacaoServices;

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
		Usuario usuario = usuarioRepository.getById(idUser);

		Arquivo arq = new Arquivo(
				teste.getNomeArquivo(),
				teste.getTamanhoArquivo(),
				usuario,
				LocalDateTime.now(),
				teste.getListaTransacao().get(0).getDataHoraTransacao().toLocalDate(),
				teste.getListaTransacao());

		arquivoRepository.save(arq);

		return ResponseEntity.status(200).body(null);
	}

	@DeleteMapping
	private void DeletarArquivo() {
		arquivoRepository.deleteAll();
	}

	@GetMapping("recuperaAnoMes")
	private String ListarDataTransacao() throws SQLException {
		Connection connection = criarConexao.createConnection();
		Statement stm = connection.createStatement();
		String tmpSql = "";
		String minMax = "";
		tmpSql = "select min(dttrans),max(dttrans)  from arquivo";
		stm.executeQuery(tmpSql);
		ResultSet rst = stm.getResultSet();
		while (rst.next()) {
			minMax = rst.getString(1) + ";" + rst.getString(2);
		}
		rst.close();

		return minMax;

	}

}
