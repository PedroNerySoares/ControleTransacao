package br.com.alura.challenger.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.validation.Valid;

import br.com.alura.challenger.dto.AlterarUsuarioDto;
import br.com.alura.challenger.model.Roles;
import br.com.alura.challenger.repositories.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.alura.challenger.dto.AlterarPasswordUsuarioDto;
import br.com.alura.challenger.dto.UsuarioDto;
import br.com.alura.challenger.model.Usuario;
import br.com.alura.challenger.repositories.UsuarioRepository;
import br.com.alura.challenger.services.CriptografiaService;
import br.com.alura.challenger.services.EnviarEmail;
import br.com.alura.challenger.services.GerarSenhaAleatoriaService;

@RequestMapping("/usuario")
@Controller
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    RolesRepository rolesRepository;

    @Autowired
    private EnviarEmail enviar;

    CriptografiaService crip = new CriptografiaService();


    @Autowired
    private GerarSenhaAleatoriaService geraSenhaAleatoria;
    @PostMapping
    private ResponseEntity<UsuarioDto> CadastrarUsuario(@Valid @RequestBody UsuarioDto usuarioDto,
                                                        UriComponentsBuilder uriBuilder)  throws MessagingException {

        if (usuarioRepository.findByEmail(usuarioDto.getEmail()).isPresent()) {
            throw new MessagingException("Email já cadastrado");
        }

        Roles role = rolesRepository.findById(usuarioDto.getIdRole())
                .orElseThrow(() -> new IllegalArgumentException("Role não encontrada para o ID: " + usuarioDto.getIdRole()));

        List<Roles> listaRoles = new ArrayList<>();

        listaRoles.add(role);

        String password = Integer.toString(geraSenhaAleatoria.geraSenha());
        String senhaCriptografada = crip.gerarHash(password);

        Usuario novoUsuario = new Usuario(
                usuarioDto.getUsuario(),
                usuarioDto.getEmail(),
                senhaCriptografada,
                "S",
                listaRoles
        );

        boolean enviou = enviar.enviar(usuarioDto.getEmail(), password);
        if (enviou) {
            usuarioRepository.saveAndFlush(novoUsuario);
            var uri = uriBuilder.path("/usuario/{id}").buildAndExpand(novoUsuario.getId()).toUri();
            return ResponseEntity.created(uri).body(usuarioDto); // ou use uma nova DTO se preferir
        } else {
            return ResponseEntity.badRequest().build();
        }
    }


    @GetMapping
    private ResponseEntity<List<Usuario>> listarUsuarios() {
        List<Usuario> lista = usuarioRepository.findAll()
                .stream()
                .filter(usuario -> !usuario.getUsuario().equals("Admin") &&
                        usuario.isEnabled())
                .toList();

        return ResponseEntity.status(200).body(lista);
    }

    @GetMapping("/{id}")
    private ResponseEntity<Optional<Usuario>> listarUsuarioId(@PathVariable Long id) {
        Optional<Usuario> user = usuarioRepository.findById(id);
        if (user.isPresent()) {
            return ResponseEntity.status(200).body(user);
        } else {
            throw new RuntimeException("User não Localizado");

        }
    }


    @DeleteMapping("/{id}")
    private ResponseEntity<Optional<Usuario>> deletarUsuario(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if (usuario.isPresent()) {
            usuario.get().setStatus("N");
            usuarioRepository.saveAndFlush(usuario.get());
            return ResponseEntity.noContent().build();
        }

        return null;
    }

    @PutMapping("/{id}")
    private ResponseEntity<AlterarPasswordUsuarioDto> alterarPasswordUsuario(@PathVariable Long id,
                                                                             @RequestBody AlterarPasswordUsuarioDto alteraUsuario) {


        Optional<Usuario> user = usuarioRepository.findById(id);
        if (user.isPresent()) {
            if (crip.checkHash(alteraUsuario.getAntigaSenha(), user.get().getSenha())) {

                user.get().setSenha(crip.gerarHash(alteraUsuario.getNovaSenha()));
                usuarioRepository.save(user.get());
                return ResponseEntity.status(200).body(null);

            } else {
                System.out.println("senha invalida");
                throw new RuntimeException("Senha atual não confere");

            }

        }
        return ResponseEntity.status(404).build();

    }


    @PutMapping("settingsUser/{id}")
    private ResponseEntity<AlterarPasswordUsuarioDto> alterarDatasdUsuario(@PathVariable Long id,
                                                                           @RequestBody AlterarUsuarioDto alteraUsuario) {


        Optional<Usuario> user = usuarioRepository.findById(id);
        if (user.isPresent()) {
            user.get().setPrimeiroNome(alteraUsuario.getPrimeiroNome());
            user.get().setUltimoNome(alteraUsuario.getUltimoNome());
            user.get().setDateNascimento(alteraUsuario.getDateNascimento());
            user.get().setCpf(alteraUsuario.getCpf());
            user.get().setSexo(alteraUsuario.getSexo());
            usuarioRepository.save(user.get());
            return ResponseEntity.status(200).body(null);

        }
        return ResponseEntity.status(404).build();

    }


}
