package br.com.alura.challenger.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;



public class jdbcConfig {
	
	public Connection createConnection() throws SQLException{
		
		Connection conexao = null;
		return DriverManager.getConnection("jdbc:mysql://localhost:3306/challenger",
											  "root",
											"@Familia98");
		
		
		
	}
	
	
	

//	DriverManagerDataSource dataSource = new DriverManagerDataSource("jdbc:mysql://localhost:3306/challenger","root","@Familia98");
//	JdbcTemplate jdbc = new JdbcTemplate((Connection) dataSource);
// 
	//	
//	
//	
//	@Bean
//	public JdbcTemplate jdbcTemplate( DataSource dataSource) {
//		return new JdbcTemplate((Connection) dataSource);
//	}
//	
//	@Bean
//	public DataSource dataSource() { 
//	    return (DataSource) new EmbeddedDatabaseBuilder()
//	    		.generateUniqueName(true)
//	    		.setType(EmbeddedDatabaseType.H2)
//	    		.setScriptEncoding("UTF-8")
//	    		.addScript("bd/script.sql")
//	    		.build();
//	    
//	}

}
