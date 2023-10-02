package com.example.playlist;

import com.example.playlist.models.Band;
import com.example.playlist.models.Track;
import com.example.playlist.repositories.BandRepository;
import com.example.playlist.repositories.TrackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlaylistService {

  @Autowired
  BandRepository bandRepository;

  @Autowired
  TrackRepository trackRepository;

  public List<Band> getAllBands() {
    return bandRepository.findAll();
  }





  public List<Track> getAllTracks() {
    return trackRepository.findAll();
  }
}
