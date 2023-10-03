package com.example.playlist.models;

import javax.persistence.*;

@Entity
@Table(name = "tracks")
public class Track {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String track_title;
  private String youtube_url;
  @ManyToOne
  @JoinColumn(name = "band_id")
  private Band band;

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
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

  public Band getBand() {
    return band;
  }

  public void setBand(Band band) {
    this.band = band;
  }

  @Override
  public String toString() {
    return "Track{" +
            "id=" + id +
            ", band=" + band +
            ", track_title='" + track_title + '\'' +
            ", youtube_url='" + youtube_url + '\'' +
            '}';
  }
}
