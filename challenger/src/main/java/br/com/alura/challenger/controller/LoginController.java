package br.com.alura.challenger.controller;

import javax.validation.Valid;

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
import br.com.alura.challenger.services.TokenService;

@RequestMapping("/login")
@Controller
public class LoginController {
    

	@Autowired
	private AuthenticationManager manager;
	@Autowired
	private TokenService tokenService;

    @PostMapping
	private ResponseEntity<dadosTokenJWT> LoginUsuario(@Valid @RequestBody br.com.alura.challenger.dto.autenticacaoDTO autenticacaoDTO){
		var authenticationToken = new UsernamePasswordAuthenticationToken(autenticacaoDTO.getUsuario(), autenticacaoDTO.getSenha());
		var authentication = manager.authenticate(authenticationToken);
		var tokenJWT = tokenService.gerarToken((Usuario) authentication.getPrincipal());
		return ResponseEntity.ok(new dadosTokenJWT(tokenJWT));

	
	}
}
