package br.com.alura.challenger.model;


import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "IMAGES")
public class ImageModel {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IDIMG", nullable = false)
    private Long id;

    @Column(name = "URL", nullable = false)
    private String url;

    @Column(name = "TYPEIMG", nullable = false)
    private String typeimg;

    @Column(name = "CREATEAT", nullable = false)
    private LocalDateTime createdAt;



    public ImageModel(Long id, String url, String typeimg, LocalDateTime createdAt) {
        this.id = id;
        this.url = url;
        this.typeimg = typeimg;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTypeimg() {
        return typeimg;
    }

    public void setTypeimg(String typeimg) {
        this.typeimg = typeimg;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
