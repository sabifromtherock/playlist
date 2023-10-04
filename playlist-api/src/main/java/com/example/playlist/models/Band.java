package com.example.playlist.models;

import javax.persistence.*;

@Entity
@Table(name = "bands")
public class Band {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String bandName;
  private String genre;
  private String language;
  private String originCountry;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getBandName() {
    return bandName;
  }

  public void setBandName(String bandName) {
    this.bandName = bandName;
  }

  public String getGenre() {
    return genre;
  }

  public void setGenre(String genre) {
    this.genre = genre;
  }

  public String getLanguage() {
    return language;
  }

  public void setLanguage(String language) {
    this.language = language;
  }

  public String getOriginCountry() {
    return originCountry;
  }

  public void setOriginCountry(String originCountry) {
    this.originCountry = originCountry;
  }

  @Override
  public String toString() {
    return "Band{" +
            "id=" + id +
            ", bandName='" + bandName + '\'' +
            ", genre='" + genre + '\'' +
            ", language='" + language + '\'' +
            ", originCountry='" + originCountry + '\'' +
            '}';
  }
}
