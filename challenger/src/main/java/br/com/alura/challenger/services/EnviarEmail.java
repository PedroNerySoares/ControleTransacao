package br.com.alura.challenger.services;

import java.time.LocalDate;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import br.com.alura.challenger.model.Usuario;

@Component
public class EnviarEmail {
	@Autowired
	private JavaMailSender mailSender;

	public boolean enviar(String usuario, String destinatario, String password) throws MessagingException {

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true);

		String assunto = ("Bem-Vindo ao Sistema PedroVerso");
		String html = "<table width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#f5f6f7\">\n"
				+
				"        <tbody><tr><td height=\"50\"></td></tr>\n" +
				"        <tr>\n" +
				"            <td align=\"center\" valign=\"top\">\n" +
				"                \n" +
				"                <table width=\"600\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ffffff\" style=\"border:1px solid #f1f2f5\">\n"
				+
				"                    <tbody><tr>\n" +
				"                        <td colspan=\"3\" height=\"60\" bgcolor=\"#ffffff\" style=\"border-bottom:1px solid #eeeeee;padding-left:16px\" align=\"left\">\n"
				+
				"                            \n" +
				// " <img
				// src=\"https://ci3.googleusercontent.com/proxy/1mmLbbt_GO9TvI1V6pu5Q1xaFgI6zjQKB9rVibpuNqY4a5ZJDS8JAirx6hGKckbxdY9--NCpdHIGzQW7tqMDH49gI9V7em_m1TSL=s0-d-e1-ft#https://cloud.mongodb.com/static/images/logo-mongodb.png\"
				// width=\"140\" height=\"35\" style=\"display:block;width:140px;height:35px\"
				// class=\"CToWUd\" data-bit=\"iit\">\n"
				// +
				"                            \n" +
				"                        </td>\n" +
				"                    </tr>\n" +
				"                    <tr><td colspan=\"3\" height=\"20\"></td></tr>\n" +
				"                    <tr>\n" +
				"                        <td width=\"20\"></td>\n" +
				"                        <td align=\"left\">\n" +
				"                            \n" +
				"                            <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n" +
				"                                <tbody><tr><td colspan=\"3\" height=\"20\"></td></tr>\n" +
				"                                <tr><td colspan=\"3\"><h4> Conta criada com sucesso!</h4>\n" +
				"\n" +
				"Segue abaixo suas credenciais para acessar o sistema.<br><br>\n" +
				"\n" +
				"<table>\n" +
				"    <tbody><tr><td>Email de login:</td><td>" + destinatario + "</td></tr>\n" +
				"	 <tr><td>Senha para acesso:</td><td>" + password + "</td></tr>\n" +
				"    <tr><td>Criado em:</td><td>" + LocalDate.now() + "</td></tr>\n" +
				"</tbody></table>\n" +
				"</td></tr>\n" +
				"                                <tr><td colspan=\"3\" height=\"20\"></td></tr>\n" +
				"                                <tr>\n" +
				"                                    <td colspan=\"3\" style=\"text-align:center\">\n" +
				"                                        <span style=\"font-family:Helvetica,Arial,sans-serif;font-size:12px;color:#cccccc\">Senha gerado automaticamente, não compartilhe com nimguém</span>\n"
				+
				"                                    </td>\n" +
				"                                </tr>\n" +
				"                                </tbody></table>\n" +
				"                        </td>\n" +
				"                        <td width=\"20\"></td>\n" +
				"                    </tr>\n" +
				"                    <tr><td colspan=\"3\" height=\"20\"></td></tr>\n" +
				"                </tbody></table>\n" +
				"            </td>\n" +
				"        </tr>\n" +
				"        <tr>\n" +
				"            <td height=\"50\">\n" +
				"                \n" +
				"            </td>\n" +
				"        </tr>\n" +
				"    </tbody></table>";

		helper.setTo(destinatario);
		helper.setSubject(assunto);
		helper.setText(html, true);
		try {
			mailSender.send(message);
			return true;
		} catch (Exception e) {
			return false;
		}

	}

}
