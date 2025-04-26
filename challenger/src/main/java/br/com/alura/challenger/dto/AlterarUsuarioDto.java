package br.com.alura.challenger.dto;

import java.time.LocalDate;

public class AlterarUsuarioDto {

        private String primeiroNome;
        private String ultimoNome;
        private String cpf;

        private LocalDate dateNascimento;
        private String sexo;
        private String endereco;

        public AlterarUsuarioDto() {
        }

        public AlterarUsuarioDto(String primeiroNome, String ultimoNome, String cpf, LocalDate dataNascimento, String sexo, String endereco) {
            this.primeiroNome = primeiroNome;
            this.ultimoNome = ultimoNome;
            this.cpf = cpf;
            this.dateNascimento = dataNascimento;
            this.sexo = sexo;
            this.endereco = endereco;
        }

        // Getters e Setters
        public String getPrimeiroNome() {
            return primeiroNome;
        }

        public void setPrimeiroNome(String primeiroNome) {
            this.primeiroNome = primeiroNome;
        }

        public String getUltimoNome() {
            return ultimoNome;
        }

        public void setUltimoNome(String ultimoNome) {
            this.ultimoNome = ultimoNome;
        }

        public String getCpf() {
            return cpf;
        }

        public void setCpf(String cpf) {
            this.cpf = cpf;
        }

        public LocalDate getDateNascimento() {
            return dateNascimento;
        }

        public void setDateNascimento(LocalDate dateNascimento) {
            this.dateNascimento = dateNascimento;
        }

        public String getSexo() {
            return sexo;
        }

        public void setSexo(String sexo) {
            this.sexo = sexo;
        }

        public String getEndereco() {
            return endereco;
        }

        public void setEndereco(String endereco) {
            this.endereco = endereco;
        }

        @Override
        public String toString() {
            return "PessoaDTO{" +
                    "primeiroNome='" + primeiroNome + '\'' +
                    ", ultimoNome='" + ultimoNome + '\'' +
                    ", cpf='" + cpf + '\'' +
                    ", dataNascimento='" + dateNascimento + '\'' +
                    ", sexo='" + sexo + '\'' +
                    ", endereco='" + endereco + '\'' +
                    '}';
        }
    }
