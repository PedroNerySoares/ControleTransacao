package br.com.alura.challenger.usuario;

import br.com.alura.challenger.commons.ConvertAbstract;
import br.com.alura.challenger.roles.Roles;
import br.com.alura.challenger.roles.RolesRepository;
import br.com.alura.challenger.commons.CriptografiaService;
import br.com.alura.challenger.commons.EnviarEmail;
import br.com.alura.challenger.commons.GerarSenhaAleatoriaService;
import br.com.alura.challenger.usuario.DTOS.CreateNewUserDTO;
import br.com.alura.challenger.usuario.DTOS.UserDetailsDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioServices extends ConvertAbstract {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    RolesRepository rolesRepository;

    @Autowired
    private EnviarEmail enviar;
    CriptografiaService crip = new CriptografiaService();

    @Autowired
    private GerarSenhaAleatoriaService geraSenhaAleatoria;



    public UsuarioServices(ModelMapper modelMapper) {
        super(modelMapper);
    }


    public UsuarioModel getUserById(Long idUser) {
        UsuarioModel userId = usuarioRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("Usuário não localizado!"));
        return userId;


    }

    public List<UsuarioModel> getAllUser() {
        return usuarioRepository.findAll().stream().filter((user) -> !user.getUsuario().equals("Admin")
                        && user.isEnabled())
                .toList();
    }

    public List<UserDetailsDTO> getAllUserAction() {

        return convertToDTOList(getAllUser(), UserDetailsDTO.class);
    }


    public UsuarioModel creatNewUser(CreateNewUserDTO usuarioDTO) throws MessagingException {

        if (usuarioRepository.findByEmail(usuarioDTO.getEmail()).isPresent()) {
            throw new MessagingException("Email já cadastrado!");
        }


        Roles role = rolesRepository.findById(usuarioDTO.getIdRole())
                .orElseThrow(() -> new IllegalArgumentException("Role não encontrada para o ID: " + usuarioDTO.getIdRole()));

        List<Roles> listaRoles = new ArrayList<>();
        listaRoles.add(role);

        String password = Integer.toString(geraSenhaAleatoria.geraSenha());
        String senhaCriptografada = crip.gerarHash(password);

        UsuarioModel novoUsuarioModel = new UsuarioModel(
                usuarioDTO.getUsuario(),
                usuarioDTO.getEmail(),
                senhaCriptografada,
                "S",
//                usuarioDTO.getCep(), usuarioDTO.getBairro(), usuarioDTO.getComplemento(), usuarioDTO.getEstado(), usuarioDTO.getRua(), usuarioDTO.getNumero(), usuarioDTO.getMunicipio(),
                null, null, null, null, null, null, null,
                listaRoles
        );

        UsuarioModel salvo = usuarioRepository.save(novoUsuarioModel);
        System.out.println(salvo);

        return salvo;
//        boolean enviou = enviar.enviar(usuarioDTO.getEmail(), password);
//        if (enviou) {
//            usuarioRepository.saveAndFlush(novoUsuarioModel);
//            var uri = uriBuilder.path("/usuario/{id}").buildAndExpand(novoUsuarioModel.getId()).toUri();
//            return ResponseEntity.created(uri).body(usuarioDTO);
//        } else {
//            return ResponseEntity.badRequest().build();
//        }
    }
}
