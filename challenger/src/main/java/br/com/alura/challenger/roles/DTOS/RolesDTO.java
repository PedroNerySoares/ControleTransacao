package br.com.alura.challenger.roles.DTOS;

public class RolesDTO {

    private Long id;

    private String nome;

    public RolesDTO() {
    }
    public RolesDTO(Long id, String nome) {
            this.id = id;
            this.nome = nome;
        }

        public Long getId () {
            return id;
        }

        public void setId (Long id){
            this.id = id;
        }

        public String getNome () {
            return nome;
        }

        public void setNome (String nome){
            this.nome = nome;
        }
    }

