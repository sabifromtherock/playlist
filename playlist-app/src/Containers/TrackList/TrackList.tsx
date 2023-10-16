import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TrackList.scss";
import TrackResponse from "../../types/TrackResponse";
import Track from "../../Components/Track/Track";
import Spinner from "../../Components/Spinner/Spinner";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Filter from "../../Components/Filter/Filter";

const TrackList: React.FC = () => {
  const [tracks, setTracks] = useState<TrackResponse[]>([]);
  const [filteredText, setFilteredText] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({
    bandName: "All",
    genre: "All",
    language: "All",
    originCountry: "All",
  });

  const getTracks = async () => {
    const response = await fetch("http://localhost:8080/tracks");
    const trackData = await response.json();
    setTracks(trackData);
  };

  useEffect(() => {
    getTracks();
  }, []);

  const handleSearchChange = (text: string) => {
    setFilteredText(text);
  };

  const applyFilters = () => {
    const filteredTracks = tracks.filter((track) => {
      const band = track.band;
      return (
        (selectedFilters.bandName === "All" ||
          band.bandName === selectedFilters.bandName) &&
        (selectedFilters.genre === "All" ||
          band.genre === selectedFilters.genre) &&
        (selectedFilters.language === "All" ||
          band.language === selectedFilters.language) &&
        (selectedFilters.originCountry === "All" ||
          band.originCountry === selectedFilters.originCountry) &&
        (track.track_title.toLowerCase().includes(filteredText.toLowerCase()) ||
          band.bandName.toLowerCase().includes(filteredText.toLowerCase()))
      );
    });
    return filteredTracks;
  };

  if (tracks.length === 0) return <Spinner />;

  return (
    <div className="track-list">
      <div className="track-list__filters">
        <div>
          <SearchBar onSearchChange={handleSearchChange} />
          <Filter
            label={"Band"}
            options={[...new Set(tracks.map((track) => track.band.bandName))]}
            selectedFilter={selectedFilters.bandName}
            onFilterChange={(value) =>
              setSelectedFilters({ ...selectedFilters, bandName: value })
            }
          />
          <Filter
            label={"Genre"}
            options={[...new Set(tracks.map((track) => track.band.genre))]}
            selectedFilter={selectedFilters.genre}
            onFilterChange={(value) =>
              setSelectedFilters({ ...selectedFilters, genre: value })
            }
          />
          <Filter
            label={"Language"}
            options={[...new Set(tracks.map((track) => track.band.language))]}
            selectedFilter={selectedFilters.language}
            onFilterChange={(value) =>
              setSelectedFilters({ ...selectedFilters, language: value })
            }
          />
          <Filter
            label={"Origin Country"}
            options={[
              ...new Set(tracks.map((track) => track.band.originCountry)),
            ]}
            selectedFilter={selectedFilters.originCountry}
            onFilterChange={(value) =>
              setSelectedFilters({ ...selectedFilters, originCountry: value })
            }
          />
        </div>
      </div>

      <div className="track-list__items">
        {applyFilters().map((track) => (
          <Link
            className="track-list__item"
            key={track.id}
            to={`/track/${track.id}`}
          >
            <Track track={track} showButtons={false} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
