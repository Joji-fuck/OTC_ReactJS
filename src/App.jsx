import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from "/src/components/Navbar/Navbar.jsx";
import Footer from "/src/components/Footer/Footer.jsx";

import HomePage from "/src/pages/Home/HomePage.jsx";
import MappoolPage from "/src/pages/Mappool/MappoolPage.jsx";
import PlayersPage from "/src/pages/Players/PlayerPage.jsx";
import RegulationsPage from "/src/pages/Regulations/RegulationPage.jsx";
import AboutPage from "/src/pages/About/AboutPage.jsx";



function App() {
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