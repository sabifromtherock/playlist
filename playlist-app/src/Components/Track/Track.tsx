import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Track.scss";
import TrackResponse from "../../types/TrackResponse";
import Form from "../Form/Form";

type TrackProp = {
  track: TrackResponse;
  showButtons: boolean;
};

const Track = ({ track, showButtons }: TrackProp) => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:8080/track/${track.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert(`Track with ID ${track.id} deleted.`);
      navigate("/tracks");
    } else {
      const message = await response.text();
      alert(message);
    }
  };

  const handleUpdate = () => {
    setShowForm(true);
  };

  return (
    <div className="track">
      <h2 className="track__band">{track.band.bandName}</h2>
      <h3 className="track__title">{track.track_title}</h3>
      <p className="track__genre">{track.band.genre}</p>

      <div className="track__video">
        <iframe
          width="280"
          height="160"
          src={track.youtube_url}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>

      {showButtons && (
        <div className="track__buttons">
          <button className="track__update-button" onClick={handleUpdate}>
            Update
          </button>
          <button className="track__delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}

      {showForm && <Form track={track} />}
    </div>
  );
};

export default Track;
