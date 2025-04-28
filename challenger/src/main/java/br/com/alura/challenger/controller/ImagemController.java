package br.com.alura.challenger.controller;


import br.com.alura.challenger.model.ImageModel;
import br.com.alura.challenger.model.Usuario;
import br.com.alura.challenger.repositories.ImageRepository;
import br.com.alura.challenger.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/imagens")
public class ImagemController {

    private static final String UPLOAD_DIR = "C:/Users/pedro/OneDrive/Imagens/imagesFTP";

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    @PostMapping("/upload")
    public void uploadImagem(@RequestParam("file") MultipartFile file, @RequestParam("idTeam") Long idTeam) throws IOException {

        String nameFile = file.getOriginalFilename();
        String extensao = nameFile.substring(nameFile.lastIndexOf("."));
        String fileName = "Profile" + "_" + UUID.randomUUID().toString() + extensao;

        Path directoryPath = Paths.get(UPLOAD_DIR);

        try {
            if (!Files.exists(directoryPath)) {
                Files.createDirectories(directoryPath);
            }

            Path filePath = directoryPath.resolve(fileName);

            // Usa try-with-resources para garantir que o InputStream será fechado
            try (InputStream inputStream = file.getInputStream()) {
                Files.copy(inputStream, filePath);
            }

        } catch (IOException e) {
            // Aqui você pode logar ou lançar uma exceção personalizada
            System.err.println("Erro ao salvar o arquivo: " + e.getMessage());
            e.printStackTrace();

            // Se preferir, pode lançar uma exceção para o controller tratar
            // throw new RuntimeException("Erro ao salvar o arquivo", e);
        }

        Optional<Usuario> t1 = usuarioRepository.findById(idTeam);
        if (t1.isPresent()) {
            ImageModel im1 = new ImageModel(null,fileName,"1",LocalDateTime.now());

            imageRepository.save(im1);


        }

    }


    @GetMapping("/avatar/{fileName}")
    public ResponseEntity<UrlResource> getAvatar(@PathVariable String fileName) throws MalformedURLException {
        Path filePath = Paths.get(UPLOAD_DIR).resolve(fileName).normalize();
        UrlResource resource = new UrlResource(filePath.toUri());

        if (resource.exists()) {
            return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }










}
