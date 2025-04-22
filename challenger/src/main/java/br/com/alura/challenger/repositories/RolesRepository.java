package br.com.alura.challenger.repositories;

import br.com.alura.challenger.model.Arquivo;
import br.com.alura.challenger.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesRepository extends JpaRepository<Roles, Long> {

}
