package br.com.alura.challenger.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;



public class jdbcConfig {
	
	public Connection createConnection() throws SQLException{

		String url_conexao = "jdbc:mysql://192.168.0.12:3306/transacao?useSSL=false&allowPublicKeyRetrieval=true" ;

		String url_user=System.getenv("BD-USER");

		String url_password  =System.getenv("BD-PASSWORD");
		
		Connection conexao = null;

		return DriverManager.getConnection(url_conexao,url_user,url_password);

		
		
	}}
