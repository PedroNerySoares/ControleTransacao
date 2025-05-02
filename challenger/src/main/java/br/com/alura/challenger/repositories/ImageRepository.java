package br.com.alura.challenger.repositories;

import br.com.alura.challenger.model.Arquivo;
import br.com.alura.challenger.model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
     ImageModel findByUsuario(Long iduser);
}
