package br.com.alura.challenger.dto;

import javax.validation.constraints.NotBlank;

public class UsuarioDto {

	private Long id;

	@NotBlank(message = "Nome de usuário obriatório!")
	private String usuario;

	@NotBlank(message = "e-mail do usuário obriatório!")
	private String email;

	public UsuarioDto(){}
	public UsuarioDto(Long id, String usuario, String email) {
		this.id = id;
		this.usuario = usuario;
		this.email = email;
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
	

	
	
	
}
