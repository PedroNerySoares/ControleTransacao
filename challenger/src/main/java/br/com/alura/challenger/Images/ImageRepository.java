package br.com.alura.challenger.Images;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
//     ImageModel findByUsuario(Long iduser);
}
