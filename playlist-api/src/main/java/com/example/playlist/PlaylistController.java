package com.example.playlist;

import com.example.playlist.models.Bands;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlaylistController {

//  @Autowired
//  PlaylistService playlistService;

  @GetMapping("/")
  public String greet() {
    return "Welcome!";
  }
}
