import { React } from "react";
import { Route, Routes } from "react-router-dom";

// pages & components
import Home from "../pages/Home.jsx";
import Favorites from "../pages/Favorites.jsx";
import NavBar from "./NavBar.jsx";

// css and styling
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
