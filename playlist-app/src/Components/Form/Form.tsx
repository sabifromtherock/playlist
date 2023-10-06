import { useState } from "react";
import "./Form.scss";
import TrackResponse from "../../types/TrackResponse";
import { useNavigate } from "react-router-dom";

type FormProp = {
  track: TrackResponse;
};

const Form = ({ track }: FormProp) => {
  const navigate = useNavigate();
  const [updatedTitle, setUpdatedTitle] = useState(track.track_title);
  const [updatedUrl, setUpdatedUrl] = useState(track.youtube_url);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const updatedTrack = { ...track };
    updatedTrack.track_title = updatedTitle;
    updatedTrack.youtube_url = updatedUrl;

    const response = await fetch(`http://localhost:8080/track/${track.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTrack),
    });

    if (response.ok) {
      alert(`Track with ID ${track.id} updated.`);
    } else {
      const message = await response.text();
      alert(message);
    }

    navigate("/tracks");
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="updatedTitle">
            Track Title:
          </label>
          <input
            className="form__input"
            type="text"
            id="updatedTitle"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="updatedUrl">
            YouTube URL:
          </label>
          <input
            className="form__input"
            type="text"
            id="updatedUrl"
            value={updatedUrl}
            onChange={(e) => setUpdatedUrl(e.target.value)}
          />
        </div>
        <button className="form__button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Form;
