package br.com.alura.challenger.services;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;

import br.com.alura.challenger.model.Usuario;

@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String secret;

    public String gerarToken(Usuario usuario) {

        try {
            var algoritmo = Algorithm.HMAC256(secret);
            return JWT.create()
                    .withIssuer("API transacao")
                    .withSubject(usuario.getUsuario())
                    .withClaim("id", usuario.getId())
                    .withExpiresAt(dataExpiraxao())
                    .sign(algoritmo);
        } catch (JWTCreationException exception) {

            throw new RuntimeException("erro ao gerar token JWT", exception);
        }

    }

    public String getSubejectId(String tokenJWT) {

        try {
            var algoritmo = Algorithm.HMAC256(secret);
            return JWT.require(algoritmo)
                    .withIssuer("API transacao")
                    .build()
                    .verify(tokenJWT)
                    .getClaim("id").toString();
            

        } catch (JWTVerificationException exception) {
            throw new RuntimeException("Token JWT não informado ou inválido");

        }

    }
    public String getSubeject(String tokenJWT) {
  
        try {
            var algoritmo = Algorithm.HMAC256(secret);
            return JWT.require(algoritmo)
                    .withIssuer("API transacao")
                    .build()
                    .verify(tokenJWT)
                    .getSubject();

        } catch (JWTVerificationException exception) {
            throw new RuntimeException("Token JWT não informado ou inválido");

        }

    }

    private Instant dataExpiraxao() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }

    

}
