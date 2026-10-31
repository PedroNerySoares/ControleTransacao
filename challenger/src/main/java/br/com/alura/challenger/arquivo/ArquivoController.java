package br.com.alura.challenger.arquivo;

import br.com.alura.challenger.arquivo.DTO.MesAnoDTO;
import br.com.alura.challenger.arquivo.DTO.listaArquivoDto;
import br.com.alura.challenger.commons.TokenService;
import br.com.alura.challenger.config.SecurityFilter;
import br.com.alura.challenger.transacao.DTOS.DetalheDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/arquivo")
public class ArquivoController {

    private final ArquivoService arquivoService;
    private final TokenService tokenService;
    private final SecurityFilter securityFilter;

    @Autowired
    public ArquivoController(
            ArquivoService arquivoService,
            TokenService tokenService,
            SecurityFilter securityFilter) {
        this.arquivoService = arquivoService;
        this.tokenService = tokenService;
        this.securityFilter = securityFilter;
    }

    @GetMapping
    public List<listaArquivoDto> arquivos() {
        return arquivoService.listarArquivos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetalheDto> detalheArquivo(@PathVariable Long id) {
        return arquivoService.detalheArquivo(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<String> gravarArquivo(
            HttpServletRequest request,
            @RequestParam(value = "files", required = false) List<MultipartFile> files,
            @RequestParam(value = "file", required = false) List<MultipartFile> legacyFiles) {
        Long idUser = Long.parseLong(
                tokenService.getSubejectId(securityFilter.recuperarToken(request))
        );

        try {
            int importedCount = arquivoService.importarArquivos(idUser, files, legacyFiles);
            return ResponseEntity.ok(importedCount + " arquivo(s) importado(s) com sucesso.");
        } catch (IllegalArgumentException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

    @DeleteMapping
    public ResponseEntity<Void> deletarArquivos() {
        arquivoService.deletarArquivos();
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarArquivo(@PathVariable Long id) {
        if (!arquivoService.deletarArquivo(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/recuperaAnoMes")
    public List<MesAnoDTO> recuperaAnoMes() {
        return arquivoService.recuperaMesAno();
    }
}
