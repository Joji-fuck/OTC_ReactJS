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
import Notification from "./components/Notification/Notification.jsx";
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
          <meta name="description"
                content="Официальный сайт турнира Тюменской области по ритм-игре Osu! Расписание, игроки, маппул и регламент"/>
          <link rel="canonical" href="https://osutyumencup.ru/"/>
          {/* --- Open Graph (для превью в соцсетях: ВК, Telegram) --- */}
          <meta property="og:title" content="Osu! Tyumen Cup - Главный турнир Тюмени"/>
          <meta property="og:description"
                content="Вся информация о главном турнире по Osu! в Тюмени. Присоединяйтесь и следите за лучшими игроками!"/>
          <meta property="og:image" content="https://osutyumencup.ru/social-preview.jpg"/>
          <meta property="og:url" content="https://osutyumencup.ru/"/>
          <meta property="og:site_name" content="Osu! Tyumen Cup"/>
          <meta property="og:type" content="website"/>
          {/* --- Twitter Cards (для превью в Twitter/X) --- */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="Osu! Tyumen Cup - Главный турнир Тюмени"/>
          <meta name="twitter:description" content="Вся информация о главном турнире по Osu! в Тюмени."/>
          <meta name="twitter:image" content="https://osutyumencup.ru/social-preview.jpg"/>
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Osu! Tyumen Cup",
              "startDate": "2025-07-05T12:00:00+05:00",
              "endDate": "2025-07-13T20:00:00+05:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://osutyumencup.ru/"
              },
              "image": [
                "https://osutyumencup.ru/social-preview.jpg"
              ],
              "description": "Официальный турнир по Osu! для игроков Тюменской области.",
              "organizer": {
                "@type": "Organization",
                "name": "OsuTyumenCup Staff",
                "url": "https://osutyumencup.ru/staff"
              }
            }
          `}
          </script>
        </Helmet>
        <main className="App">
          {loading && <Preloader/>}
          <Notification/>
          <Navbar/>
          <AnimatedRoutes/>
          <Donate/>
          <Footer/>
        </main>
      </>
  );
}

export default App;
