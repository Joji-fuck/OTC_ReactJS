import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"
import {Helmet} from "react-helmet-async";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";

import HomePage from "./pages/Home/HomePage.jsx";
import MappoolPage from "./pages/Mappool/MappoolPage.jsx";
import PlayersPage from "./pages/Players/PlayersPage.jsx";
import RegulationsPage from "./pages/Regulations/RegulationPage.jsx";
import StaffPage from "./pages/Staff/StaffPage.jsx";
import NotFound from "./components/Not-found/NotFound.jsx";
import Donate from "./components/donate/Donate.jsx";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="page-transition" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/mappool" element={<MappoolPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/regulations" element={<RegulationsPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SpeedInsights/>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 50;
          const y = (e.clientY / window.innerHeight - 0.5) * 50;
          document.documentElement.style.setProperty("--bg-x", `${50 + x}%`);
          document.documentElement.style.setProperty("--bg-y", `${50 + y}%`);
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
      <>
        <Helmet>
          <title>Osu Tyumen Cup 2025</title>
          <meta name="description" content="Официальный сайт турнира Тюменской области по ритм-игре Osu! Расписание, игроки, маппул и регламент"/>
        </Helmet>
        <main className="App">
          {loading && <Preloader/>}
          <Navbar/>
          <AnimatedRoutes />
          <Donate/>
          <Footer />
        </main>
      </>
  );
}
export default App;
