package br.com.alura.challenger.usuario;

import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import br.com.alura.challenger.config.SecurityFilter;
import br.com.alura.challenger.usuario.DTOS.AlterarUsuarioDto;
import br.com.alura.challenger.roles.RolesRepository;
import br.com.alura.challenger.commons.TokenService;
import br.com.alura.challenger.usuario.DTOS.CreateNewUserDTO;
import br.com.alura.challenger.usuario.DTOS.UserDetailsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.alura.challenger.usuario.DTOS.AlterarPasswordUsuarioDto;
import br.com.alura.challenger.commons.CriptografiaService;
import br.com.alura.challenger.commons.EnviarEmail;
import br.com.alura.challenger.commons.GerarSenhaAleatoriaService;

@RequestMapping("/usuario")
@Controller
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    RolesRepository rolesRepository;

    @Autowired
    private EnviarEmail enviar;

    @Autowired
    private UsuarioServices usuarioServices;

    @Autowired
    private TokenService tokenService;


    @Autowired
    private SecurityFilter securityFilter;

    CriptografiaService crip = new CriptografiaService();


    @Autowired
    private GerarSenhaAleatoriaService geraSenhaAleatoria;

    @PostMapping
    private ResponseEntity<UsuarioModel> CadastrarUsuario(@Valid @RequestBody CreateNewUserDTO usuarioDto,
                                                          UriComponentsBuilder uriBuilder) throws MessagingException {

        UsuarioModel novoUsuarioModel = usuarioServices.creatNewUser(usuarioDto);
        var uri = uriBuilder.path("/usuario/{id}").buildAndExpand(novoUsuarioModel.getId()).toUri();
        return ResponseEntity.created(uri).body(novoUsuarioModel);

    }

    @GetMapping
    private ResponseEntity<List<UserDetailsDTO>> listarUsuarios() {
        List<UserDetailsDTO> lista = usuarioServices.getAllUserAction();
        return ResponseEntity.status(200).body(lista);
    }

    @GetMapping("/me")
    private ResponseEntity<Optional<UsuarioModel>> listarUsuarioId(HttpServletRequest request) {

        Long idUser = (long) Integer.parseInt(tokenService.getSubejectId(securityFilter.recuperarToken(request)));

        Optional<UsuarioModel> user = usuarioRepository.findById(idUser);

        return ResponseEntity.ok().body(user);
//        return ResponseEntity.ok().body(usuarioServices.getUserById(user));

    }


    @DeleteMapping("/{id}")
    private ResponseEntity<Optional<UsuarioModel>> deletarUsuario(@PathVariable Long id) {
        Optional<UsuarioModel> usuario = usuarioRepository.findById(id);
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


        Optional<UsuarioModel> user = usuarioRepository.findById(id);
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


    @PutMapping("setting sUser")
    private ResponseEntity<AlterarPasswordUsuarioDto> alterarDatasdUsuario(
            HttpServletRequest request,
            @RequestBody AlterarUsuarioDto alteraUsuario) {

        Long idUser = (long) Integer.parseInt(tokenService.getSubejectId(securityFilter.recuperarToken(request)));

        Optional<UsuarioModel> user = usuarioRepository.findById(idUser);
        if (user.isPresent()) {
            user.get().setPrimeiroNome(alteraUsuario.getPrimeiroNome());
            user.get().setUltimoNome(alteraUsuario.getUltimoNome());
            user.get().setDateNascimento(alteraUsuario.getDateNascimento());
            user.get().setCpf(alteraUsuario.getCpf());
            user.get().setSexo(alteraUsuario.getSexo());
            user.get().setCep(alteraUsuario.getCep());
            user.get().setRua(alteraUsuario.getRua());
            user.get().setBairro(alteraUsuario.getBairro());
            user.get().setNumero(alteraUsuario.getNumero());
            user.get().setComplemento(alteraUsuario.getComplemento());
            user.get().setEstado(alteraUsuario.getEstado());
            user.get().setMunicipio(alteraUsuario.getMunicipio());
            usuarioRepository.save(user.get());
            return ResponseEntity.status(200).body(null);

        }
        return ResponseEntity.status(404).build();

    }


}
