package br.com.alura.challenger.Login;

import java.util.Optional;

import javax.mail.MessagingException;
import javax.validation.Valid;

import br.com.alura.challenger.Login.dto.autenticacaoDTO;
import br.com.alura.challenger.commons.EnviarEmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.alura.challenger.Login.dto.dadosTokenJWT;
import br.com.alura.challenger.usuario.UsuarioModel;
import br.com.alura.challenger.usuario.UsuarioRepository;
import br.com.alura.challenger.commons.CriptografiaService;
import br.com.alura.challenger.commons.GerarSenhaAleatoriaService;
import br.com.alura.challenger.commons.TokenService;

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
            @Valid @RequestBody autenticacaoDTO autenticacaoDTO) {

        try {
            var authenticationToken = new UsernamePasswordAuthenticationToken(autenticacaoDTO.getUsuario(),
                    autenticacaoDTO.getSenha());

            var authentication = manager.authenticate(authenticationToken);
            var tokenJWT = tokenService.gerarToken((UsuarioModel) authentication.getPrincipal());

            Optional<UsuarioModel> usu = usuarioRepository.findByEmail(autenticacaoDTO.getUsuario());
            if (!usu.isPresent()) {
                throw new RuntimeException("Email não cadastrado");
            }

//
//            ResponseCookie cookie = ResponseCookie.from("token",tokenJWT)
//                    .httpOnly(true)
//                    .secure(true)
//                    .path("/")
//                    .maxAge(60*60)
//                    .sameSite("Strict")
//                    .build();
//

            return ResponseEntity.ok(new dadosTokenJWT(tokenJWT, usu.get().getEmail(),usu.get().getUsuario(),usu.get().getId(),usu.get().getAuthorities().toString().replace("[","").replace("]","")));

        } catch (Exception e) {
            throw new RuntimeException("Email ou senha inválida");
        }

    }

    @PostMapping("/reset")
    private ResponseEntity<Boolean> RecuperarSenha(
            @RequestBody autenticacaoDTO autenticacaoDTO) throws MessagingException {

        Optional<UsuarioModel> usu = usuarioRepository.findByEmail(autenticacaoDTO.getUsuario());
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
