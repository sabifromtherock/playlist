import { FormEvent, useState } from "react";
import TrackResponse from "../../types/TrackResponse";
import "./AddTrackForm.scss";
import { useNavigate } from "react-router-dom";

const AddTrackForm = () => {
  const navigate = useNavigate();
  const [trackTitle, setTrackTitle] = useState<string>("");
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [bandName, setBandName] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [originCountry, setOriginCountry] = useState<string>("");

  const addTrack = async (track: TrackResponse) => {
    const response = await fetch("http://localhost:8080/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(track),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const newTrack: TrackResponse = await response.json();

    return newTrack;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      trackTitle.trim() === "" ||
      youtubeUrl.trim() === "" ||
      bandName.trim() === "" ||
      genre.trim() === "" ||
      language.trim() === "" ||
      originCountry.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }

    const track: TrackResponse = {
      id: 0,
      track_title: trackTitle,
      youtube_url: youtubeUrl,
      band: {
        id: 0,
        bandName,
        genre,
        language,
        originCountry,
      },
    };

    await addTrack(track);

    setTrackTitle("");
    setYoutubeUrl("");
    setBandName("");
    setGenre("");
    setLanguage("");
    setOriginCountry("");

    navigate("/tracks");
  };

  return (
    <form onSubmit={handleSubmit} className="add-track-form">
      <div className="add-track-form__group">
        <label className="add-track-form__group__label">Track Title:</label>
        <input
          className="add-track-form__group__input"
          type="text"
          value={trackTitle}
          onChange={(e) => setTrackTitle(e.target.value)}
          required
        />
      </div>
      <div className="add-track-form__group">
        <label className="add-track-form__group__label">YouTube URL:</label>
        <input
          className="add-track-form__group__input"
          type="url"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          required
        />
      </div>
      <div className="add-track-form__group">
        <label className="add-track-form__group__label">Band Name:</label>
        <input
          className="add-track-form__group__input"
          type="text"
          value={bandName}
          onChange={(e) => setBandName(e.target.value)}
          required
        />
      </div>
      <div className="add-track-form__group">
        <label className="add-track-form__group__label">Genre:</label>
        <input
          className="add-track-form__group__input"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <div className="add-track-form__group">
        <label className="add-track-form__group__label">Language:</label>
        <input
          className="add-track-form__group__input"
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          required
        />
      </div>
      <div className="add-track-form__group">
        <label className="add-track-form__group__label">Origin Country:</label>
        <input
          className="add-track-form__group__input"
          type="text"
          value={originCountry}
          onChange={(e) => setOriginCountry(e.target.value)}
          required
        />
      </div>
      <button className="add-track-form__button" type="submit">
        Add Track
      </button>
    </form>
  );
};

export default AddTrackForm;
