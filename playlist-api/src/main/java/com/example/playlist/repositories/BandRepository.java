package com.example.playlist.repositories;

import com.example.playlist.models.Band;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BandRepository extends JpaRepository<Band, Long> {

  // * READ
  List<Band> getAllByOriginCountry(String originCountry);

  // * DELETE
  void deleteBandById(long id);
}
