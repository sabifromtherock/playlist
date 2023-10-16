package com.example.playlist;

import com.example.playlist.models.Band;
import com.example.playlist.models.Track;
import com.example.playlist.repositories.BandRepository;
import com.example.playlist.repositories.TrackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PlaylistService {

  @Autowired
  BandRepository bandRepository;

  @Autowired
  TrackRepository trackRepository;

  // * CREATE
  public Band addBand(Band band) {
    return bandRepository.save(band);
  }

  public Track addTrack(Track track) {
    Band band = bandRepository.findById(track.getBand().getId()).orElse(null);

    if (band == null) {
      band = addBand(track.getBand());
    }

    track.setBand(band);

    return trackRepository.save(track);
  }

  // * READ
  public List<Band> getAllBands(int limit) {
    return bandRepository
            .findAll()
            .stream()
            .limit(limit)
            .collect(Collectors.toList());
  }

  public Band getBandById(long id) {
    Optional<Band> band = bandRepository.findById(id);

    if (band.isEmpty()) {
      throw new NotFoundException("Band has not been found");
    }

    return band.get();
  }

  public List<Band> getBandsByOriginCountry(String countryName, int limit) {
    List<Band> bands = bandRepository.getAllByOriginCountry(countryName);

    return bands
            .stream()
            .limit(limit)
            .collect(Collectors.toList());
  }

  public List<Track> getAllTracks() {
    return trackRepository.findAll();
  }

  public Track getTrackById(long id) {
    Optional<Track> track = trackRepository.findById(id);

    if (track.isEmpty()) {
      throw new NotFoundException("Band has not been found");
    }

    return track.get();
  }

  public List<Track> getTracksByBandId(long bandId) {
    // Check if the referenced Band exists in the database
    Optional<Band> band = bandRepository.findById(bandId);
    if (band.isEmpty()) {
      throw new NotFoundException("Band with ID " + bandId + " does not exist.");
    }

    // If the Band exists, retrieve its tracks
    return trackRepository.findByBandId(bandId);
  }

  // * UPDATE
  @Modifying
  public Band updateBand(Band modifiedBand, long id) {

    if (!bandRepository.existsById(id)) throw new NotFoundException("Band Not Found");

    return bandRepository.save(modifiedBand);
  }

  @Modifying
  public Track updateTrack(Track modifiedTrack, long id) {

    if (!trackRepository.existsById(id)) throw new NotFoundException("Track Not Found");

    Band band = bandRepository.findById(modifiedTrack.getBand().getId()).orElseThrow(() -> new NotFoundException("Band Not Found"));

    Track updatedtrack = trackRepository.save(modifiedTrack);

    updatedtrack.setBand(band);

    return updatedtrack;
  }

  // * DELETE
  @Transactional
  public void deleteBandById(long id) {
    if (!bandRepository.existsById(id)) throw new NotFoundException("Band NotFound");
    bandRepository.deleteBandById(id);
  }

  @Transactional
  public void deleteTrackById(long id) {
    if (!trackRepository.existsById(id)) throw new NotFoundException("Track Not Found");
    trackRepository.deleteTrackById(id);
  }
}
