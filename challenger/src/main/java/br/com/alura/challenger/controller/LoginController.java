package br.com.alura.challenger.controller;

import java.net.InetAddress;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.management.RuntimeErrorException;
import javax.validation.Valid;

import br.com.alura.challenger.dto.autenticacaoDTO;
import br.com.alura.challenger.services.EnviarEmail;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.alura.challenger.dto.UsuarioDto;
import br.com.alura.challenger.dto.dadosTokenJWT;
import br.com.alura.challenger.model.Usuario;
import br.com.alura.challenger.repositories.UsuarioRepository;
import br.com.alura.challenger.services.CriptografiaService;
import br.com.alura.challenger.services.GerarSenhaAleatoriaService;
import br.com.alura.challenger.services.TokenService;

@RequestMapping("/login")
@Controller
public class LoginController {

    @Autowired
    private AuthenticationManager manager;
    @Autowired
    private TokenService tokenService;

    CriptografiaService crip = new CriptografiaService();

    @Autowired
    private GerarSenhaAleatoriaService geraSenhaAleatoria;
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    private EnviarEmail enviar;

    @PostMapping
    private ResponseEntity<dadosTokenJWT> LoginUsuario(
            @Valid @RequestBody br.com.alura.challenger.dto.autenticacaoDTO autenticacaoDTO) {

        try {
            var authenticationToken = new UsernamePasswordAuthenticationToken(autenticacaoDTO.getUsuario(),
                    autenticacaoDTO.getSenha());
            var authentication = manager.authenticate(authenticationToken);
            var tokenJWT = tokenService.gerarToken((Usuario) authentication.getPrincipal());

            Optional<Usuario> usu = usuarioRepository.findByEmail(autenticacaoDTO.getUsuario());
            if (!usu.isPresent()) {
                throw new RuntimeException("Email não cadastrado");
            }

            return ResponseEntity.ok(new dadosTokenJWT(tokenJWT, usu.get().getEmail(),usu.get().getUsuario()));
//            return ResponseEntity.ok(new dadosTokenJWT(tokenJW));

        } catch (Exception e) {
            throw new RuntimeException("Email ou senha inválida");
        }

    }

    @PostMapping("/reset")
    private ResponseEntity<Boolean> RecuperarSenha(
            @RequestBody autenticacaoDTO autenticacaoDTO) throws MessagingException {

        Optional<Usuario> usu = usuarioRepository.findByEmail(autenticacaoDTO.getUsuario());
        if (!usu.isPresent()) {
            throw new RuntimeException("Email não cadastrado");
        } else {


            String password = Integer.toString(geraSenhaAleatoria.geraSenha());
            String senhaCriptografada = crip.gerarHash(password);
            System.out.println(crip.checkHash(password, senhaCriptografada));

            boolean enviou = enviar.enviar(usu.get().getEmail(), password);
            usu.get().setSenha(senhaCriptografada);
            usuarioRepository.save(usu.get());

            return ResponseEntity.ok().body(null);
        }
    }
}
