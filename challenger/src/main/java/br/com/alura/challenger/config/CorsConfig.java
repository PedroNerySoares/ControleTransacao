package br.com.alura.challenger.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

	// @Bean
	// public WebMvcConfigurer corsConfigurer() {
	// return new WebMvcConfigurer() {

	// @Override
	// public void addCorsMappings(CorsRegistry registry) {
	// registry.addMapping("/**")
	// .allowedMethods("GET", "POST","DELETE" ,"PUT")
	// .allowedHeaders("*")
	// .allowedOrigins("http://localhost:3000");

	// }
	// };
	// }
	// @Override
	// public void addCorsMappings(CorsRegistry registry) {
	// registry.addMapping("/**")
	// .allowedOrigins("http://localhost:3000")
	// .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE",
	// "CONNECT");
	// }
	// @Bean
	// CorsConfigurationSource corsConfigurationSource() {
	// 	CorsConfiguration configuration = new CorsConfiguration();
	// 	configuration.setAllowCredentials(true);
	// 	configuration.addAllowedOrigin("http://localhost:8080");
	// 	configuration.addAllowedHeader("*");
	// 	configuration.addAllowedMethod("*");
	// 	UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	// 	source.registerCorsConfiguration("/**", configuration);
	// 	return source;
	// }
}
