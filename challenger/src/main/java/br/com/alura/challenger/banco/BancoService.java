package br.com.alura.challenger.banco;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BancoService {

    private final BancoRepository bancoRepository;

    public BancoService(BancoRepository bancoRepository) {
        this.bancoRepository = bancoRepository;
    }

    public List<Banco> listarBancos(
            Boolean somenteAtivos,
            String ispb,
            String cnpj,
            String numeroBanco) {

        return bancoRepository.buscarBancos(
                somenteAtivos,
                ispb,
                cnpj,
                numeroBanco
        );
    }

    public Optional<Banco> atualizarStatus(BancoId id, boolean status) {
        return bancoRepository.findById(id).map(banco -> {
            banco.setStatus(status);
            return bancoRepository.save(banco);
        });
    }
}