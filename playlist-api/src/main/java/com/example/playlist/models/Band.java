package com.example.playlist.models;

import javax.persistence.*;

@Entity
public class Band {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String bandName;
  private String genre;
  private String language;
  private String originCountry;
  private int founded_year;

  public Band() {
  }

  public Band(long id, String bandName, String genre, String language, String originCountry, int founded_year) {
    this.id = id;
    this.bandName = bandName;
    this.genre = genre;
    this.language = language;
    this.originCountry = originCountry;
    this.founded_year = founded_year;
  }

  public long getBand_id() {
    return id;
  }

  public void setBand_id(long id) {
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

  public int getFounded_year() {
    return founded_year;
  }

  public void setFounded_year(int founded_year) {
    this.founded_year = founded_year;
  }

}
