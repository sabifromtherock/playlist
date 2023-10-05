import TrackResponse from "../../types/TrackResponse";
import "./Track.scss";

type TrackProp = {
  track: TrackResponse;
};

const Track = ({ track }: TrackProp) => {
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
    </div>
  );
};

export default Track;
