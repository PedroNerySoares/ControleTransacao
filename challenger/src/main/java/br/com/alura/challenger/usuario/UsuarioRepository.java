package br.com.alura.challenger.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {

    UserDetails findByUsuario(String username);

    Optional<UsuarioModel> findByEmail(String email);

}
