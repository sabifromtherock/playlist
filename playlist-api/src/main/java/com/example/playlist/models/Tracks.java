package com.example.playlist.models;

import javax.persistence.*;

@Entity
public class Tracks {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  @ManyToOne
  @JoinColumn(name = "band_id")
  private Bands band;
  private String track_title;
  private String youtube_url;

  public Tracks() {
  }

  public long getTrack_id() {
    return id;
  }

  public void setTrack_id(long id) {
    this.id = id;
  }

  public Bands getBand() {
    return band;
  }

  public void setBand(Bands band) {
    this.band = band;
  }

  public String getTrack_title() {
    return track_title;
  }

  public void setTrack_title(String track_title) {
    this.track_title = track_title;
  }

  public String getYoutube_url() {
    return youtube_url;
  }

  public void setYoutube_url(String youtube_url) {
    this.youtube_url = youtube_url;
  }
}
