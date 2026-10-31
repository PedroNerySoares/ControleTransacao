package br.com.alura.challenger.arquivo;

import br.com.alura.challenger.arquivo.DTO.MesAnoDTO;
import br.com.alura.challenger.arquivo.DTO.listaArquivoDto;
import br.com.alura.challenger.arquivo.extrator.TransacaoExtractor;
import br.com.alura.challenger.transacao.DTOS.DetalheDto;
import br.com.alura.challenger.transacao.Transacao;
import br.com.alura.challenger.usuario.UsuarioServices;
import br.com.alura.challenger.usuario.UsuarioModel;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ArquivoService {

    private final ArquivoRepository arquivoRepository;
    private final UsuarioServices usuarioServices;
    private final List<TransacaoExtractor> extractors;
    private final ModelMapper modelMapper = new ModelMapper();

    public ArquivoService(
            ArquivoRepository arquivoRepository,
            UsuarioServices usuarioServices,
            List<TransacaoExtractor> extractors) {
        this.arquivoRepository = arquivoRepository;
        this.usuarioServices = usuarioServices;
        this.extractors = extractors;
    }

    public List<MesAnoDTO> recuperaMesAno() {
        return arquivoRepository.mesAno()
                .stream()
                .map(row -> new MesAnoDTO(
                        (String) row[0],
                        (String) row[1]
                ))
                .toList();
    }

    public List<listaArquivoDto> listarArquivos() {
        return arquivoRepository.findAll()
                .stream()
                .map(arquivo -> modelMapper.map(arquivo, listaArquivoDto.class))
                .collect(Collectors.toList());
    }

    public Optional<DetalheDto> detalheArquivo(Long id) {
        return arquivoRepository.findById(id)
                .map(arquivo -> modelMapper.map(arquivo, DetalheDto.class));
    }

    @Transactional
    public int importarArquivos(
            Long idUser,
            List<MultipartFile> files,
            List<MultipartFile> legacyFiles) {
        List<MultipartFile> uploads = new ArrayList<>();
        addFiles(uploads, files);
        addFiles(uploads, legacyFiles);

        if (uploads.isEmpty()) {
            throw new IllegalArgumentException("Envie pelo menos um arquivo CSV ou XML.");
        }
        if (uploads.size() > 2) {
            throw new IllegalArgumentException("Envie no máximo dois arquivos por requisição.");
        }

        UsuarioModel usuario = usuarioServices.getUserById(idUser);
        List<Arquivo> arquivos = new ArrayList<>();

        for (MultipartFile upload : uploads) {
            if (upload == null || upload.isEmpty()) {
                throw new IllegalArgumentException("Não é permitido enviar arquivo vazio.");
            }

            String nomeArquivo = upload.getOriginalFilename();
            String extensao = obterExtensao(nomeArquivo);
            TransacaoExtractor extractor = extractors.stream()
                    .filter(item -> item.suporta(extensao))
                    .findFirst()
                    .orElseThrow(() -> new IllegalArgumentException(
                            "Formato não permitido. Envie arquivos CSV ou XML."));

            List<Transacao> transacoes;
            try {
                transacoes = extractor.extrair(upload);
            } catch (IOException exception) {
                throw new IllegalArgumentException(
                        "Não foi possível ler o arquivo " + nomeArquivo + ".", exception);
            }

            if (transacoes.isEmpty()) {
                throw new IllegalArgumentException(
                        "O arquivo " + nomeArquivo + " não contém transações.");
            }

            LocalDate dataTransacao = transacoes.get(0)
                    .getDataHoraTransacao()
                    .toLocalDate();

            arquivos.add(new Arquivo(
                                        nomeArquivo,
                                        (double) upload.getSize(),
                                        usuario,
                                        LocalDateTime.now(),
                                        dataTransacao,
                                        transacoes
                                )
            );
        }

        arquivoRepository.saveAll(arquivos);
        return arquivos.size();
    }

    public void deletarArquivos() {
        arquivoRepository.deleteAll();
    }

    public boolean deletarArquivo(Long id) {
        if (!arquivoRepository.existsById(id)) {
            return false;
        }
        arquivoRepository.deleteById(id);
        return true;
    }

    private void addFiles(List<MultipartFile> uploads, List<MultipartFile> files) {
        if (files != null) {
            uploads.addAll(files);
        }
    }

    private String obterExtensao(String nomeArquivo) {
        if (nomeArquivo == null) {
            throw new IllegalArgumentException("Nome do arquivo inválido.");
        }

        int ponto = nomeArquivo.lastIndexOf('.');
        if (ponto <= 0 || ponto == nomeArquivo.length() - 1) {
            throw new IllegalArgumentException("Nome do arquivo inválido.");
        }
        return nomeArquivo.substring(ponto + 1).toLowerCase(Locale.ROOT);
    }
}
