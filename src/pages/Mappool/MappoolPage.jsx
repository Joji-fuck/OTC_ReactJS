import React, { useState, useRef, useEffect } from "react";
import "./MappoolPage.css";

import Star from "../../assets/images/icon/star.svg";
import Bpm from "../../assets/images/icon/bpm.svg";
import Time from "../../assets/images/icon/time.svg";
import CS from "../../assets/images/icon/cs.svg";
import AR from "../../assets/images/icon/ar.svg";
import OD from "../../assets/images/icon/od.svg";

const MappoolPage = () => {
  const [openDetails, setOpenDetails] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = (modType) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOpenDetails(openDetails === modType ? null : modType);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleMapClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section className="mappool">
      <summary className="zip-maps">
        <a href="#" className="download-zip">
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
          <a
            className="map-card map-card-blue"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>NM1</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
          <a
            className="map-card map-card-blue"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>NM2</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
          <a
            className="map-card map-card-blue"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>NM3</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className={`details ${openDetails === "dt" ? "open" : ""}`}>
        <div className="summary summary-red" onClick={() => handleToggle("dt")}>
          DoubleTime
        </div>
        <div className="content">
          <a
            className="map-card map-card-red"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>DT1</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
          <a
            className="map-card map-card-red"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>DT2</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
          <a
            className="map-card map-card-red"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>DT3</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
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
          <a
            className="map-card map-card-green"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>HR1</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
          <a
            className="map-card map-card-green"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>HR2</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
          <a
            className="map-card map-card-green"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>HR3</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
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
          <a
            className="map-card map-card-yellow"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>HD1</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
          <a
            className="map-card map-card-yellow"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>HD2</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
          <a
            className="map-card map-card-yellow"
            href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942"
            onClick={handleMapClick}
          >
            <div className="map-img">
              <h2>Phalanx</h2>
              <h3>USAO</h3>
            </div>
            <div className="map-mode">
              <p>HD3</p>
            </div>
            <div className="map-stats">
              <div className="map-stats-left">
                <span>
                  <img src={Star} /> 7.57
                </span>
                <span>
                  <img src={Bpm} /> 208
                </span>
                <span>
                  <img src={Time} /> 4:09
                </span>
              </div>
              <div className="map-stats-right">
                <span>
                  <img src={CS} /> 4.2
                </span>
                <span>
                  <img src={AR} /> 9.8
                </span>
                <span>
                  <img src={OD} /> 9.6
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default MappoolPage;
