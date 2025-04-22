package br.com.alura.challenger.dto;

import javax.validation.constraints.NotBlank;

public class UsuarioDto {

	private Long id;

	@NotBlank(message = "Nome de usuário obriatório!")
	private String usuario;

	@NotBlank(message = "e-mail do usuário obriatório!")
	private String email;

	private String status;

	private Long idRole;

	public UsuarioDto() {
	}

	public UsuarioDto(Long id, @NotBlank(message = "Nome de usuário obriatório!") String usuario,
			@NotBlank(message = "e-mail do usuário obriatório!") String email, String status,Long idRole) {
		this.id = id;
		this.usuario = usuario;
		this.email = email;
		this.status = status;
		this.idRole = idRole;
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
