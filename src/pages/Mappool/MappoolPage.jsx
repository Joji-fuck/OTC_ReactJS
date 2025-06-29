import React, { useState} from "react";
import "./MappoolPage.css";

import Star from "../../assets/images/icon/star.svg";
import Bpm from "../../assets/images/icon/bpm.svg";
import Time from "../../assets/images/icon/time.svg";
import CS from "../../assets/images/icon/cs.svg";
import AR from "../../assets/images/icon/ar.svg";
import OD from "../../assets/images/icon/od.svg";
import {Helmet} from "react-helmet-async";

const MappoolPage = () => {
  const [openDetails, setOpenDetails] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = (modType) => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (openDetails === modType) {
      setOpenDetails(null);
      setTimeout(() => setIsAnimating(false));
    } else {
      setOpenDetails(modType);
      setTimeout(() => setIsAnimating(false));
    }
  };

  const handleMapClick = (e) => {
    e.stopPropagation();
  };

  return (
      <section className="mappool">
        <Helmet>
          <title>Маппул | OTC 2025</title>
          <meta name="description" content="Посмотрите список карт для OTC 2025!"/>
        </Helmet>
        <summary className="zip-maps">
          <a
              // href="src\assets\mappool_OTC.zip"
              className="download-zip"
              download="mappool_OTC.zip"
          >
            Скачать зип-файл
          </a>
        </summary>
        <h1 className="mappool-h1">Маппул</h1>
        <div className={`details ${openDetails === "nm" ? "open" : ""}`}>
          <div
              className="summary summary-blue"
              onClick={() => handleToggle("nm")}
          >
            Nomod
          </div>
          <div className="content">
            <h2 className='awaiting'>Уже совсем скоро...</h2>
          </div>
        </div>
        <div className={`details ${openDetails === "hd" ? "open" : ""}`}>
          <div
              className="summary summary-yellow"
              onClick={() => handleToggle("hd")}
          >
            Hidden
          </div>
          <div className="content">
            <h2 className='awaiting'>Уже совсем скоро...</h2>
          </div>
        </div>
        <div className={`details ${openDetails === "hr" ? "open" : ""}`}>
          <div
              className="summary summary-green"
              onClick={() => handleToggle("hr")}
          >
            HardRock
          </div>
          <div className="content">
            <h2 className='awaiting'>Уже совсем скоро...</h2>
          </div>
        </div>
        <div className={`details ${openDetails === "dt" ? "open" : ""}`}>
          <div className="summary summary-red" onClick={() => handleToggle("dt")}>
            DoubleTime
          </div>
          <div className="content">
            <h2 className='awaiting'>Уже совсем скоро...</h2>
          </div>
        </div>
      </section>
  );
};
export default MappoolPage;
