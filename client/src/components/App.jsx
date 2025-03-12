import { React } from "react";
import { Route, Routes } from "react-router-dom";

// pages & components
import Home from "../pages/Home.jsx";
import Favorites from "../pages/Favorites.jsx";
import AI from "../pages/AI.jsx";
import NavBar from "./NavBar.jsx";
import Player from "./Player.jsx";

// css and styling
import "../css/App.css";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
