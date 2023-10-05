import { useNavigate } from "react-router-dom";
import TrackResponse from "../../types/TrackResponse";
import "./Track.scss";

type TrackProp = {
  track: TrackResponse;
};

const Track = ({ track }: TrackProp) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:8080/track/${track.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert(`Track with ID ${track.id} deleted.`);
    } else {
      const message = await response.text();
      alert(message);
    }
    navigate("/");
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
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <button className="track__delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Track;
