package br.com.alura.challenger.banco;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/banco")
public class BancoController {

    private final BancoService bancoService;

    public BancoController(BancoService bancoService) {
        this.bancoService = bancoService;
    }

    @GetMapping
    public List<Banco> listarBancos(
            @RequestParam(required = false) Boolean somenteAtivos,
            @RequestParam(required = false) String ispb,
            @RequestParam(required = false) String cnpj,
            @RequestParam(required = false) String numeroBanco) {

        return bancoService.listarBancos(
                somenteAtivos, ispb, cnpj, numeroBanco);
    }

   

    @PatchMapping("/{numeroBanco}/{ispb}/{cnpj}/status")
    public ResponseEntity<Banco> atualizarStatus(
            @PathVariable String numeroBanco,
            @PathVariable String ispb,
            @PathVariable String cnpj,
            @Valid @RequestBody BancoStatusRequest request) {
        return bancoService.atualizarStatus(
                        new BancoId(numeroBanco, ispb, cnpj),
                        request.getStatus())
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
