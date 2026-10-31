package br.com.alura.challenger.config.site;

 
import javax.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/configuracoes")
public class ConfiguracaoController {

    private final ConfiguracaoService service;

    public ConfiguracaoController(ConfiguracaoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ConfiguracoesDTO> buscar() {

        return ResponseEntity.ok(
                service.buscarConfiguracoes()
        );
    }

    @PutMapping
    public ResponseEntity<String> atualizar(
            @RequestBody @Valid AtualizarConfiguracoesDTO dto
    ) {

        service.atualizarConfiguracoes(dto);

        return ResponseEntity.ok(
                "Configurações atualizadas com sucesso."
        );
    }
}