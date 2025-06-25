import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Preloader from './components/Preloader/Preloader.jsx';

import HomePage from "./pages/Home/HomePage.jsx";
import MappoolPage from "./pages/Mappool/MappoolPage.jsx";
import PlayersPage from "./pages/Players/PlayersPage.jsx";
import RegulationsPage from "./pages/Regulations/RegulationPage.jsx";
import StaffPage from "./pages/Staff/StaffPage.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <Router>
      <main className="App">
        {loading && <Preloader/>}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mappool" element={<MappoolPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/regulations" element={<RegulationsPage />} />
          <Route path="/staff" element={<StaffPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
