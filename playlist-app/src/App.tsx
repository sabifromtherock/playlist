import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Nav/Nav";
import HomePage from "./Components/HomePage/HomePage";
import TrackList from "./Containers/TrackList/TrackList";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tracks" element={<TrackList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
