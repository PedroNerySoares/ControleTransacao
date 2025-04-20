package br.com.alura.challenger.controller;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import javax.mail.MessagingException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.alura.challenger.dto.AlterarUsuarioDto;
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
	private EnviarEmail enviar;

	CriptografiaService crip = new CriptografiaService();


	@Autowired
	private GerarSenhaAleatoriaService geraSenhaAleatoria;

	@PostMapping
	private ResponseEntity<UsuarioDto> CadastrarUsuario(@Valid @RequestBody UsuarioDto usuarioDto,
			UriComponentsBuilder uriBuilder)
			throws MessagingException {


		if (usuarioRepository.findByEmail(usuarioDto.getEmail()).isEmpty()){
			throw  new MessagingException("Email já cadastrado");
		}
		String password = Integer.toString(geraSenhaAleatoria.geraSenha());
		String senhaCriptografada = crip.gerarHash(password);

		Usuario novoUsuario = new Usuario(usuarioDto.getUsuario(), usuarioDto.getEmail(), senhaCriptografada, "S");
		boolean enviou = enviar.enviar( usuarioDto.getEmail(), password);
		if (enviou) {
			usuarioRepository.saveAndFlush(novoUsuario);
			var uri = uriBuilder.path("/usuario/{id}").buildAndExpand(novoUsuario.getId()).toUri();
			return ResponseEntity.created(uri).build();
		} else {
			return ResponseEntity.badRequest().body(null);
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
	private ResponseEntity<AlterarUsuarioDto> alterarUsuario(@PathVariable Long id,
			@RequestBody AlterarUsuarioDto alteraUsuario) {

		System.out.println(id);
		System.out.println(alteraUsuario.getAntigaSenha());
		System.out.println(alteraUsuario.getNovaSenha());
		Optional<Usuario> user = usuarioRepository.findById(id);
		if (user.isPresent()) {
			if (crip.checkHash(alteraUsuario.getAntigaSenha(), user.get().getSenha())) {

				user.get().setSenha(crip.gerarHash(alteraUsuario.getNovaSenha()));
				usuarioRepository.save(user.get());
				return ResponseEntity.status(200).body(null);

			} else {
				System.out.println("senha invalida");
				return ResponseEntity.status(404).body(null);

			}

		}
		return ResponseEntity.status(404).build();

	}

}
