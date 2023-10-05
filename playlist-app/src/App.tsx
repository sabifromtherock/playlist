import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Nav/Nav";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
