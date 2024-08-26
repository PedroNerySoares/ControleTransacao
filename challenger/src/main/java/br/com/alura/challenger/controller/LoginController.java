package br.com.alura.challenger.controller;

import java.net.InetAddress;

import javax.mail.MessagingException;
import javax.management.RuntimeErrorException;
import javax.validation.Valid;

import br.com.alura.challenger.enums.EmailsEnum;
import br.com.alura.challenger.services.EnviarEmail;
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

            return ResponseEntity.ok(new dadosTokenJWT(tokenJWT));

        } catch (Exception e) {
            throw new RuntimeException("Login ou senha invalida");
        }

    }

    @PostMapping("/reset")
    private ResponseEntity<Boolean> RecuperarSenha(
            @RequestBody br.com.alura.challenger.dto.autenticacaoDTO autenticacaoDTO) throws MessagingException {

        Usuario usu = usuarioRepository.findByEmail(autenticacaoDTO.getUsuario());
        String password = Integer.toString(geraSenhaAleatoria.geraSenha());
        String senhaCriptografada = crip.gerarHash(password);
        System.out.println(crip.checkHash(password, senhaCriptografada));


        boolean enviou = enviar.enviar(usu.getUsuario(), usu.getEmail(), password, EmailsEnum.CRIARUSUARIO);

//        if(!enviou){
//            System.out.println("Não enviou email");
//        }
//
        usu.setSenha(senhaCriptografada);
        var teste = usuarioRepository.save(usu);
        System.out.println("FU---------"+teste);
//		if (enviou) {
//			var uri = uriBuilder.path("/usuario/{id}").buildAndExpand(novoUsuario.getId()).toUri();
//			return ResponseEntity.created(uri).build();
//		}


//        System.out.println(usu.getUsername());


        return ResponseEntity.ok().body(null);
    }

}
