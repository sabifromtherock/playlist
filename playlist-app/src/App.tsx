import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Nav/Nav";
import HomePage from "./Components/HomePage/HomePage";
import TrackList from "./Containers/TrackList/TrackList";
import TrackDetails from "./Containers/TrackDetails/TrackDetails";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tracks" element={<TrackList />} />
        <Route path="/track/:id" element={<TrackDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
