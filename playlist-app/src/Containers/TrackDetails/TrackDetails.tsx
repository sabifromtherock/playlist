import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Track from "../../Components/Track/Track";
import Spinner from "../../Components/Spinner/Spinner";
import "./TrackDetails.scss";

const TrackDetails = () => {
  const { id } = useParams();
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const getTrack = async () => {
      const response = await fetch(`http://localhost:8080/track/${id}`);
      const trackData = await response.json();
      setTrack(trackData);
    };

    getTrack();
  }, [id]);

  if (!track) return <Spinner />;

  return (
    <div className="track-details">
      <h1 className="track-details__title">Track Details</h1>
      <div className="track-details__track">
        <Track track={track} showButtons={true} />
      </div>
    </div>
  );
};

export default TrackDetails;
