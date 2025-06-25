import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import HomePage from "./pages/Home/HomePage.jsx";
import MappoolPage from "./pages/Mappool/MappoolPage.jsx";
import PlayersPage from "./pages/Players/PlayersPage.jsx";
import RegulationsPage from "./pages/Regulations/RegulationPage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 50;
      const y = (e.clientY / window.innerHeight - 0.5) * 50;
      document.documentElement.style.setProperty("--bg-x", `${50 + x}%`);
      document.documentElement.style.setProperty("--bg-y", `${50 + y}%`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Router>
      <main className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mappool" element={<MappoolPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/regulations" element={<RegulationsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
