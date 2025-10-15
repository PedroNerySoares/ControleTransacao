package br.com.alura.challenger.roles;

import br.com.alura.challenger.config.SecurityFilter;
import br.com.alura.challenger.config.jdbcConfig;
import br.com.alura.challenger.usuario.UsuarioRepository;
import br.com.alura.challenger.commons.TokenService;
import br.com.alura.challenger.commons.TransacaoServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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
    public ResponseEntity<?> listarRoles() {

        return Optional.of(rolesRepository.findAll())
                .filter(lista -> !lista.isEmpty())
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Nenhum perfil cadastrado"));
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> listarRoles(@PathVariable long id) {

        return Optional.of(rolesRepository.findById(id))
                .filter(lista -> !lista.isEmpty())
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Nenhum perfil cadastrado"));


    }


}
