type TrackResponse = {
  id: number;
  track_title: string;
  youtube_url: string;
  band: {
    id: number;
    bandName: string;
    genre: string;
    language: string;
    originCountry: string;
  };
};

export default TrackResponse;
