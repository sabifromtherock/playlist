package com.example.playlist;

import com.example.playlist.models.Band;
import com.example.playlist.models.Track;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlaylistController {

  @Autowired
  PlaylistService playlistService;

  @GetMapping("/")
  public String greet() {
    return "Welcome to the Jungle!";
  }

  @GetMapping("/bands")
  public List<Band> getAllBands() { return playlistService.getAllBands();}

  @GetMapping("/bands/id")
  public Band getBandById(long id) { return playlistService.getBandById(id);}

  @GetMapping("/bands/tracks")
  public List<Track> getTracksByBandId() { return playlistService.getAllTracks();}
}
