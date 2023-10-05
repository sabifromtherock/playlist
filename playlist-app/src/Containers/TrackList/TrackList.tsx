import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TrackList.scss";
import TrackResponse from "../../types/TrackResponse";
import Track from "../../Components/Track/Track";

const TrackList = () => {
  const [tracks, setTracks] = useState<TrackResponse[]>([]);

  const getTracks = async () => {
    const response = await fetch("http://localhost:8080/tracks");
    const trackData = await response.json();
    setTracks(trackData);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div className="track-list">
      {tracks.map((track) => (
        <Link
          className="track-list__item"
          key={track.id}
          to={`/track/${track.id}`}
        >
          <Track track={track} />
        </Link>
      ))}
    </div>
  );
};

export default TrackList;