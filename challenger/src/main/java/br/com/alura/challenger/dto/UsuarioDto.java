package br.com.alura.challenger.dto;

import javax.validation.constraints.NotBlank;

public class UsuarioDto {

	private Long id;

	@NotBlank(message = "Nome de usuário obriatório!")
	private String usuario;

	@NotBlank(message = "e-mail do usuário obriatório!")
	private String email;

	private String status;
	private String cep;
	private String bairro;
	private String complemento;
	private String estado;
	private String rua;
	private String numero;
	private String municipio;




	private Long idRole;

	public UsuarioDto() {
	}

	public UsuarioDto(Long id, @NotBlank(message = "Nome de usuário obriatório!") String usuario,
			@NotBlank(message = "e-mail do usuário obriatório!") String email, String status,String cep, String bairro, String complemento, String estado, String rua,String numero,String municipio,Long idRole) {
		this.id = id;
		this.usuario = usuario;
		this.email = email;
		this.status = status;
		this.cep = cep;
		this.bairro = bairro;
		this.complemento = complemento;
		this.estado = estado;
		this.rua = rua;
		this.numero = numero;
		this.municipio= municipio;
		this.idRole = idRole;
	}

	public String getMunicipio() {
		return municipio;
	}

	public void setMunicipio(String municipio) {
		this.municipio = municipio;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public Long getIdRole() {
		return idRole;
	}

	public void setIdRole(Long idRole) {
		this.idRole = idRole;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
