import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from "./pages/HomePage/HomePage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

// ЗАГЛУШКИ: Вам нужно будет создать реальные компоненты для этих страниц
const MappoolPage = () => <h2>Страница Маппула</h2>;
const PlayersPage = () => <h2>Страница Участников</h2>;
const RegulationsPage = () => <h2>Страница Регламента</h2>;
const AboutPage = () => <h2>Страница "О турнире"</h2>;


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