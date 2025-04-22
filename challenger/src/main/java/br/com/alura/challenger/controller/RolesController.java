package br.com.alura.challenger.controller;

import br.com.alura.challenger.config.SecurityFilter;
import br.com.alura.challenger.config.jdbcConfig;
import br.com.alura.challenger.dto.DetalheDto;
import br.com.alura.challenger.dto.TesteDto;
import br.com.alura.challenger.dto.listaArquivoDto;
import br.com.alura.challenger.model.Arquivo;
import br.com.alura.challenger.model.Roles;
import br.com.alura.challenger.model.Usuario;
import br.com.alura.challenger.repositories.ArquivoRepository;
import br.com.alura.challenger.repositories.RolesRepository;
import br.com.alura.challenger.repositories.UsuarioRepository;
import br.com.alura.challenger.services.TokenService;
import br.com.alura.challenger.services.TransacaoServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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

@RestController
@RequestMapping("/roles")
public class RolesController {

    @Autowired
    RolesRepository rolesRepository;

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
    public ResponseEntity<List<Roles>> listarRoles() {
        List<Roles> lista = rolesRepository.findAll();
        if (lista.isEmpty()) {
            throw new RuntimeException("Nenhum perfil cadastrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(lista);

    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Roles>> listarRoles(@PathVariable long id) {
        Optional<Roles> lista = rolesRepository.findById(id);
        if (lista.isEmpty()) {
            throw new RuntimeException("Nenhum perfil localizado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(lista);

    }


}
