package com.example.playlist.repositories;

import com.example.playlist.models.Track;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrackRepository extends JpaRepository<Track, Long> {

  // * READ
  List<Track> findByBandId(long bandId);

  // * DELETE
  void deleteTrackById(long id);
}
