package br.com.alura.challenger.controller;

import java.io.Console;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import javax.mail.MessagingException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.alura.challenger.dto.AlterarUsuarioDto;
import br.com.alura.challenger.dto.UsuarioDto;
import br.com.alura.challenger.model.Usuario;
import br.com.alura.challenger.repositories.UsuarioRepository;
import br.com.alura.challenger.services.CriptografiaService;
import br.com.alura.challenger.services.EnviarEmail;
import net.bytebuddy.asm.Advice.Return;

@RequestMapping("/usuario")
@Controller
public class UsuarioController {

	@Autowired
	UsuarioRepository usuarioRepository;

	@Autowired
	private EnviarEmail enviar;

	CriptografiaService crip = new CriptografiaService();

	@PostMapping
	private ResponseEntity<UsuarioDto> CadastrarUsuario(@Valid @RequestBody UsuarioDto usuarioDto)
			throws MessagingException {

		// crip.ckeckPass(usuarioDto.getUsuario());

		Random aleatorio = new Random();
		int valor = aleatorio.nextInt(999999) + 1;
		String password = Integer.toString(valor);

		String senhaCriptografada = crip.gerarHash(password);

		System.out.println(password);
		System.out.println(senhaCriptografada);

		Usuario us1 = new Usuario(usuarioDto.getUsuario(), usuarioDto.getEmail(), senhaCriptografada);
		usuarioRepository.saveAndFlush(us1);
		enviar.enviar(usuarioDto.getUsuario(), usuarioDto.getEmail(), password);
		return ResponseEntity.status(201).build();
	}

	@GetMapping
	private ResponseEntity<List<Usuario>> listarUsuarios() {
		List<Usuario> lista = usuarioRepository.findAll()
												.stream()
												.filter(usuario->!usuario.getUsuario().equals("Admin") &&
													 	usuario.getStatus().equals("S"))
												.toList();

		return ResponseEntity.status(200).body(lista);
	}

	@DeleteMapping("/{id}")
	private ResponseEntity<Optional<Usuario>> deletarUsuario(@PathVariable Long id) {
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		if (usuario.isPresent()) {
			usuarioRepository.deleteById(id);
			return ResponseEntity.status(200).build();
		}

		return null;
	}

	@PutMapping("/{id}")
	private ResponseEntity<AlterarUsuarioDto> alterarUsuario(@PathVariable Long id,
			@RequestBody AlterarUsuarioDto alteraUsuario) {

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
		System.out.println("não encontrado");
		return ResponseEntity.status(404).body(null);

	}

}
