package com.example.playlist;

import com.example.playlist.models.Band;
import com.example.playlist.models.Track;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class PlaylistController {

  @Autowired
  PlaylistService playlistService;

  @ExceptionHandler
  public ResponseEntity<String> handleExceptions(NotFoundException exception) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
  }

  // * CREATE
  @PostMapping("/band")
  public ResponseEntity<Band> createBand(@RequestBody Band band) {
    Band newBand = playlistService.addBand(band);

    return ResponseEntity.status(HttpStatus.CREATED).body(newBand);
  }

  @PostMapping("/track")
  public ResponseEntity<Track> createTrack(@RequestBody Track track) {
    Track newTrack = playlistService.addTrack(track);

    return ResponseEntity.status(HttpStatus.CREATED).body(newTrack);
  }

  // * READ
  @GetMapping("/band/{id}")
  public ResponseEntity<Band> getBandById(@PathVariable long id) {
    return ResponseEntity.status(HttpStatus.OK).body(playlistService.getBandById(id));
  }

  @GetMapping("/bands")
  public ResponseEntity<List<Band>> getBands(@RequestParam(required = false) String countryName, @RequestParam(defaultValue = "10") int limit) {
    if (countryName != null)
      return ResponseEntity.status(HttpStatus.OK).body(playlistService.getBandsByOriginCountry(countryName, limit));

    return ResponseEntity.status(HttpStatus.OK).body(playlistService.getAllBands(limit));
  }

  @GetMapping("/tracks")
  public ResponseEntity<List<Track>> getAllTracks() { return ResponseEntity.status(HttpStatus.OK).body(playlistService.getAllTracks());}

  @GetMapping("/track/{id}")
  public ResponseEntity<Track> getTrackById(@PathVariable long id) {
    return ResponseEntity.status(HttpStatus.OK).body(playlistService.getTrackById(id));
  }

  @GetMapping("/band/{bandId}/tracks")
  public  ResponseEntity<List<Track>> getTracksByBandId(@PathVariable long bandId) {
    return ResponseEntity.status(HttpStatus.OK).body(playlistService.getTracksByBandId(bandId));
  }

  // * UPDATE
  @PutMapping("/band/{id}")
  public ResponseEntity<Band> updateBand(@RequestBody Band modifiedBand, @PathVariable long id) {
    Band updatedBand = playlistService.updateBand(modifiedBand, id);
    return ResponseEntity.status(HttpStatus.OK).body(updatedBand);
  }

  @PutMapping("/track/{id}")
  public ResponseEntity<Track> updateTrack(@RequestBody Track modifiedTrack, @PathVariable long id) {
    Track updatedTrack = playlistService.updateTrack(modifiedTrack, id);
    return ResponseEntity.status(HttpStatus.OK).body(updatedTrack);
  }

  // * DELETE
  @DeleteMapping("/band/{id}")
  public ResponseEntity<Void> deleteBandById(@PathVariable long id) {
    playlistService.deleteBandById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @DeleteMapping("/track/{id}")
  public ResponseEntity<Void> deleteTrackById(@PathVariable long id) {
    playlistService.deleteTrackById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }
}
