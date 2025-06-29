import React from "react";
import "./RegulationPage.css";

const RegulationPage = () => {
  return (
    <div className="regulation-page">
      <h1>Регламент</h1>
        <div className="regulation-grid">
            <div className="regulation-card bg-red">
                <h2>Участие в турнире</h2>
            </div>
            <div className="regulation-card bg-blue">
                <h2>Правила поведения</h2>
            </div>
            <div className="regulation-card bg-green">
                <h2>Проведение матча</h2>
            </div>
            <div className="regulation-card bg-yellow">
                <h2>Маппул</h2>
            </div>
        </div>
    </div>
  );
};
export default RegulationPage;
