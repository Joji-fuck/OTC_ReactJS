import React, { useState} from "react";
import "./MappoolPage.css";

import Star from "../../assets/images/icon/star.svg";
import Bpm from "../../assets/images/icon/bpm.svg";
import Time from "../../assets/images/icon/time.svg";
import CS from "../../assets/images/icon/cs.svg";
import AR from "../../assets/images/icon/ar.svg";
import OD from "../../assets/images/icon/od.svg";
import {Helmet} from "react-helmet-async";
import {image} from "framer-motion/m";

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
                  href="/mappool_OTC.zip" className="download-zip" download="mappool_OTC.zip"
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
                  <a
                      className="map-card map-card-blue"
                      href="https://osu.ppy.sh/beatmapsets/2018330#osu/4258297"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-1">
                          <h2>Kingslayer (feat. BABYMETAL)</h2>
                          <h3>Bring Me The Horizon</h3>
                          <h4>[Trito's Extra]</h4>
                      </div>
                      <div className="map-mode">
                          <p>NM1</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.29
                </span>
                              <span>
                  <img src={Bpm}/> 185
                </span>
                              <span>
                  <img src={Time}/> 3:33
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 3.5
                </span>
                              <span>
                  <img src={AR}/> 9.3
                </span>
                              <span>
                  <img src={OD}/> 8.8
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-blue"
                      href="https://osu.ppy.sh/beatmapsets/2120075#osu/4454069"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-2">
                          <h2>The Big Black</h2>
                          <h3>The Quick Brown Fox</h3>
                          <h4>[imagine big black as nm2 lol]</h4>
                      </div>
                      <div className="map-mode">
                          <p>NM2</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.15
                </span>
                              <span>
                  <img src={Bpm}/> 180
                </span>
                              <span>
                  <img src={Time}/> 1:52
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4.3
                </span>
                              <span>
                  <img src={AR}/> 9.5
                </span>
                              <span>
                  <img src={OD}/> 9.9
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-blue"
                      href="https://osu.ppy.sh/beatmapsets/1674456#osu/3426226"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-3">
                          <h2>God-ish feat. Hatsune Miku</h2>
                          <h3>PinocchioP</h3>
                          <h4>[newteurre's "expert"]</h4>
                      </div>
                      <div className="map-mode">
                          <p>NM3</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 5.93
                </span>
                              <span>
                  <img src={Bpm}/> 142
                </span>
                              <span>
                  <img src={Time}/> 3:20
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 0
                </span>
                              <span>
                  <img src={AR}/> 9.5
                </span>
                              <span>
                  <img src={OD}/> 8
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-blue"
                      href="https://osu.ppy.sh/beatmapsets/853867#osu/1784484"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-4">
                          <h2>Stargazer feat. YUC'e (PSYQUI Remix)</h2>
                          <h3>DJ Noriken</h3>
                          <h4>[Expert]</h4>
                      </div>
                      <div className="map-mode">
                          <p>NM4</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 5.93
                </span>
                              <span>
                  <img src={Bpm}/> 168
                </span>
                              <span>
                  <img src={Time}/> 2:51
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4.6
                </span>
                              <span>
                  <img src={AR}/> 9.3
                </span>
                              <span>
                  <img src={OD}/> 8.4
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
                      href="https://osu.ppy.sh/beatmapsets/778383#osu/1634887"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-5">
                          <h2>Labyrinth of Darkness</h2>
                          <h3>CELLON.</h3>
                          <h4>[Expert]</h4>
                      </div>
                      <div className="map-mode">
                          <p>HD1</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.20
                </span>
                              <span>
                  <img src={Bpm}/> 202
                </span>
                              <span>
                  <img src={Time}/> 1:30
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4
                </span>
                              <span>
                  <img src={AR}/> 9.4
                </span>
                              <span>
                  <img src={OD}/> 9
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-yellow"
                      href="https://osu.ppy.sh/beatmapsets/1687132#osu/3450932"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-6">
                          <h2>INTERNET OVERDOSE</h2>
                          <h3>Aiobahn feat. KOTOKO</h3>
                          <h4>[Another]</h4>
                      </div>
                      <div className="map-mode">
                          <p>HD2</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 5.18
                </span>
                              <span>
                  <img src={Bpm}/> 163
                </span>
                              <span>
                  <img src={Time}/> 3:05
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4
                </span>
                              <span>
                  <img src={AR}/> 8
                </span>
                              <span>
                  <img src={OD}/> 8
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
                      href="https://osu.ppy.sh/beatmapsets/948225#osu/1980432"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-7">
                          <h2>Miracle</h2>
                          <h3>Caravan Palace</h3>
                          <h4>[Extra]</h4>
                      </div>
                      <div className="map-mode">
                          <p>HR1</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.06
                </span>
                              <span>
                  <img src={Bpm}/> 200
                </span>
                              <span>
                  <img src={Time}/> 3:12
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 5.1
                </span>
                              <span>
                  <img src={AR}/> 10
                </span>
                              <span>
                  <img src={OD}/> 10
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-green"
                      href="https://osu.ppy.sh/beatmapsets/891345#osu/1863246"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-8">
                          <h2>Infinity Heaven</h2>
                          <h3>HyuN</h3>
                          <h4>[Ad Infinitum]</h4>
                      </div>
                      <div className="map-mode">
                          <p>HR2</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 5.93
                </span>
                              <span>
                  <img src={Bpm}/> 160
                </span>
                              <span>
                  <img src={Time}/> 2:27
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 6.2
                </span>
                              <span>
                  <img src={AR}/> 10
                </span>
                              <span>
                  <img src={OD}/> 10
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
                      href="https://osu.ppy.sh/beatmapsets/910499#osu/1905916"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-9">
                          <h2>American Girls</h2>
                          <h3>ONE OK ROCK </h3>
                          <h4>[Insane]</h4>
                      </div>
                      <div className="map-mode">
                          <p>DT1</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.04
                </span>
                              <span>
                  <img src={Bpm}/> 237
                </span>
                              <span>
                  <img src={Time}/> 1:50
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 3.2
                </span>
                              <span>
                  <img src={AR}/> 8.8
                </span>
                              <span>
                  <img src={OD}/> 8
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-red"
                      href="https://osu.ppy.sh/beatmapsets/2027922#osu/4487961"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-10">
                          <h2>Wheel of Fortune</h2>
                          <h3>Syrufit feat. Mei Ayakura</h3>
                          <h4>[Insane]</h4>
                      </div>
                      <div className="map-mode">
                          <p>DT2</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6
                </span>
                              <span>
                  <img src={Bpm}/> 198
                </span>
                              <span>
                  <img src={Time}/> 2:20
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4
                </span>
                              <span>
                  <img src={AR}/> 8.5
                </span>
                              <span>
                  <img src={OD}/> 7
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
