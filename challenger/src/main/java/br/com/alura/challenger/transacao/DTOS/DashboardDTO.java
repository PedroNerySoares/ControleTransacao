package br.com.alura.challenger.transacao.DTOS;
import java.math.BigDecimal;
import java.util.List;

public class DashboardDTO {
    private List<BancoSuspeitoDTO> bancoSuspeitos;
    private int quantidadeTransacaoSuspeita;
    private BigDecimal totalValorSuspeito;
    private int quantidadeImportacao;

    public DashboardDTO(
            List<BancoSuspeitoDTO> bancoSuspeitos,
            int quantidadeTransacaoSuspeita,
            BigDecimal totalValorSuspeito,
            int quantidadeImportacao) {

        this.bancoSuspeitos = bancoSuspeitos;
        this.quantidadeTransacaoSuspeita =
                quantidadeTransacaoSuspeita;
        this.totalValorSuspeito = totalValorSuspeito;
        this.quantidadeImportacao = quantidadeImportacao;
    }

    public List<BancoSuspeitoDTO> getBancoSuspeitos() {
        return bancoSuspeitos;
    }

    public int getQuantidadeTransacaoSuspeita() {
        return quantidadeTransacaoSuspeita;
    }

    public BigDecimal getTotalValorSuspeito() {
        return totalValorSuspeito;
    }

    public int getQuantidadeImportacao() {
        return quantidadeImportacao;
    }
}
