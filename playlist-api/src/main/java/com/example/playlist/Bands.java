package com.example.playlist;

import javax.persistence.*;

@Entity
public class Bands {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long band_id;
  private String bandName;
  private String language;
  private String originCountry;
  private int founded;
  private String genre;
  private String story;

  public Bands() {
  }

  public Bands(long band_id, String bandName, String language, String originCountry, int founded, String genre, String story) {
    this.band_id = band_id;
    this.bandName = bandName;
    this.language = language;
    this.originCountry = originCountry;
    this.founded = founded;
    this.genre = genre;
    this.story = story;
  }

  public long getBand_id() {
    return band_id;
  }

  public void setBand_id(long band_id) {
    this.band_id = band_id;
  }

  public String getBandName() {
    return bandName;
  }

  public void setBandName(String bandName) {
    this.bandName = bandName;
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

  public int getFounded() {
    return founded;
  }

  public void setFounded(int founded) {
    this.founded = founded;
  }

  public String getGenre() {
    return genre;
  }

  public void setGenre(String genre) {
    this.genre = genre;
  }

  public String getStory() {
    return story;
  }

  public void setStory(String story) {
    this.story = story;
  }
}
