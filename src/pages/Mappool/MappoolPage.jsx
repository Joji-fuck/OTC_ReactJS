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
                  href="https://drive.google.com/drive/folders/1Twv4iRUCCFUKxAnx8dN3Ff28TGmcZev3?usp=sharing" className="download-zip"
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
                      href="https://osu.ppy.sh/beatmapsets/1850738#osu/3801992"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-1">
                          <h2>Ne para</h2>
                          <h3>Potap & Nastya</h3>
                          <h4>[Ot Dushi Dushevno v Dushu]</h4>
                      </div>
                      <div className="map-mode">
                          <p>NM1</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.96
                </span>
                              <span>
                  <img src={Bpm}/> 200
                </span>
                              <span>
                  <img src={Time}/> 2:52
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 3.7
                </span>
                              <span>
                  <img src={AR}/> 9.2
                </span>
                              <span>
                  <img src={OD}/> 9
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-blue"
                      href="https://osu.ppy.sh/beatmapsets/2108626#osu/4440275"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-2">
                          <h2>slishkom pozdno</h2>
                          <h3>bilbordy</h3>
                          <h4>[extreme]</h4>
                      </div>
                      <div className="map-mode">
                          <p>NM2</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.34
                </span>
                              <span>
                  <img src={Bpm}/> 185
                </span>
                              <span>
                  <img src={Time}/> 2:25
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4.2
                </span>
                              <span>
                  <img src={AR}/> 9.4
                </span>
                              <span>
                  <img src={OD}/> 9.4
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-blue"
                      href="https://osu.ppy.sh/beatmapsets/2092275#osu/4385836"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-3">
                          <h2>The Terrorist</h2>
                          <h3>Dustvoxx</h3>
                          <h4>[Who Dares Wins]</h4>
                      </div>
                      <div className="map-mode">
                          <p>NM3</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.32
                </span>
                              <span>
                  <img src={Bpm}/> 125
                </span>
                              <span>
                  <img src={Time}/> 3:58
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4
                </span>
                              <span>
                  <img src={AR}/> 9.6
                </span>
                              <span>
                  <img src={OD}/> 8
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-blue"
                      href="https://osu.ppy.sh/beatmapsets/1280194#osu/2659353"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-4">
                          <h2>MONONOKE</h2>
                          <h3>seatrus</h3>
                          <h4>[Orientalism]</h4>
                      </div>
                      <div className="map-mode">
                          <p>NM4</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.16
                </span>
                              <span>
                  <img src={Bpm}/> 175
                </span>
                              <span>
                  <img src={Time}/> 2:15
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
                  <img src={OD}/> 8
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-blue"
                      href="https://osu.ppy.sh/beatmapsets/2000772#osu/4160052"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-5">
                          <h2>Cadillac (Sped Up & Cut Ver.)</h2>
                          <h3>MORGENSHTERN & Allj</h3>
                          <h4>[Wooting 60HE]</h4>
                      </div>
                      <div className="map-mode">
                          <p>NM5</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.37
                </span>
                              <span>
                  <img src={Bpm}/> 250
                </span>
                              <span>
                  <img src={Time}/> 1:28
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 3.2
                </span>
                              <span>
                  <img src={AR}/> 9.6
                </span>
                              <span>
                  <img src={OD}/> 9
                </span>
                          </div>
                      </div>
                  </a>

                  <a
                      className="map-card map-card-blue"
                      href="https://osu.ppy.sh/beatmapsets/1876103#osu/386084"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-6">
                          <h2>Gorilla Step</h2>
                          <h3>Gorilla Attack</h3>
                          <h4>[Gorilla Map]</h4>
                      </div>
                      <div className="map-mode">
                          <p>NM6</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.43
                </span>
                              <span>
                  <img src={Bpm}/> 132
                </span>
                              <span>
                  <img src={Time}/> 4:07
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4
                </span>
                              <span>
                  <img src={AR}/> 9.3
                </span>
                              <span>
                  <img src={OD}/> 9
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
                      href="https://osu.ppy.sh/beatmapsets/1453937#osu/3408379"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-7">
                          <h2>Malo Tebya</h2>
                          <h3>DJ SPIZDIL</h3>
                          <h4>[I'm going crazy]</h4>
                      </div>
                      <div className="map-mode">
                          <p>HD1</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.36
                </span>
                              <span>
                  <img src={Bpm}/> 181.6
                </span>
                              <span>
                  <img src={Time}/> 2:42
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4
                </span>
                              <span>
                  <img src={AR}/> 9.5
                </span>
                              <span>
                  <img src={OD}/> 9
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-yellow"
                      href="https://osu.ppy.sh/beatmapsets/1503078#osu/3079414"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-8">
                          <h2>Good-bye sengen</h2>
                          <h3>Tenjin Kotone</h3>
                          <h4>[Anthem]</h4>
                      </div>
                      <div className="map-mode">
                          <p>HD2</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 5.96
                </span>
                              <span>
                  <img src={Bpm}/> 170
                </span>
                              <span>
                  <img src={Time}/> 2:51
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4.2
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
                  <a
                      className="map-card map-card-yellow"
                      href="https://osu.ppy.sh/beatmapsets/839273#osu/1811460"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-9">
                          <h2>Destroy -agitato-</h2>
                          <h3>Yooh</h3>
                          <h4>[Reol's XtrA]</h4>
                      </div>
                      <div className="map-mode">
                          <p>HD3</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.35
                </span>
                              <span>
                  <img src={Bpm}/> 195
                </span>
                              <span>
                  <img src={Time}/> 3:51
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4.8
                </span>
                              <span>
                  <img src={AR}/> 9.3
                </span>
                              <span>
                  <img src={OD}/> 8.3
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
                      href="https://osu.ppy.sh/beatmapsets/1809647#osu/3714304"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-10">
                          <h2>Ya ne nuzhna tebe zhivoj</h2>
                          <h3>bilbordy</h3>
                          <h4>[Actiol's Sorrow]</h4>
                      </div>
                      <div className="map-mode">
                          <p>HR1</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.47
                </span>
                              <span>
                  <img src={Bpm}/> 205
                </span>
                              <span>
                  <img src={Time}/> 1:58
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4.7
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
                      href="https://osu.ppy.sh/beatmapsets/761244#osu/1600778"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-11">
                          <h2>Ignotus</h2>
                          <h3>ak+q</h3>
                          <h4>[FUTURE+]</h4>
                      </div>
                      <div className="map-mode">
                          <p>HR2</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.24
                </span>
                              <span>
                  <img src={Bpm}/> 170
                </span>
                              <span>
                  <img src={Time}/> 2:25
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 6.5
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
                      href="https://osu.ppy.sh/beatmapsets/817667#osu/1717648"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-12">
                          <h2>Kami no Kotoba</h2>
                          <h3>Luschka</h3>
                          <h4>[J1's Expert]</h4>
                      </div>
                      <div className="map-mode">
                          <p>HR3</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.35
                </span>
                              <span>
                  <img src={Bpm}/> 110
                </span>
                              <span>
                  <img src={Time}/> 4:31
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 5.5
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
                      href="https://osu.ppy.sh/beatmapsets/1786226#osu/3714164"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-13">
                          <h2>A Hard Day's Night</h2>
                          <h3>The Beatles</h3>
                          <h4>[Fsjallink's Insane]</h4>
                      </div>
                      <div className="map-mode">
                          <p>DT1</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.65
                </span>
                              <span>
                  <img src={Bpm}/> 207
                </span>
                              <span>
                  <img src={Time}/> 1:39
                </span>
                          </div>
                          <div className="map-stats-right">
                <span>
                  <img src={CS}/> 4.2
                </span>
                              <span>
                  <img src={AR}/> 8.3
                </span>
                              <span>
                  <img src={OD}/> 8
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-red"
                      href="https://osu.ppy.sh/beatmapsets/1724615#osu/3524604"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-14">
                          <h2>Beethoven Virus</h2>
                          <h3>DIANA</h3>
                          <h4>[Insane]</h4>
                      </div>
                      <div className="map-mode">
                          <p>DT2</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.28
                </span>
                              <span>
                  <img src={Bpm}/> 234
                </span>
                              <span>
                  <img src={Time}/> 2:22
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
                  <img src={OD}/> 7.4
                </span>
                          </div>
                      </div>
                  </a>
                  <a
                      className="map-card map-card-red"
                      href="https://osu.ppy.sh/beatmapsets/1622467#osu/3312731"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-15">
                          <h2>Tarantella (feat. BlackY)</h2>
                          <h3>Risa Yuzuki</h3>
                          <h4>[After The Monsoon]</h4>
                      </div>
                      <div className="map-mode">
                          <p>DT3</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.7
                </span>
                              <span>
                  <img src={Bpm}/> 222
                </span>
                              <span>
                  <img src={Time}/> 2:56
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
                  <img src={OD}/> 7.5
                </span>
                          </div>
                      </div>
                  </a>
              </div>
          </div>
          <div className={`details ${openDetails === "tb" ? "open" : ""}`}>
              <div className="summary summary-gray" onClick={() => handleToggle("tb")}>
                  Tiebraker
              </div>
              <div className="content">
                  <a
                      className="map-card map-card-gray"
                      href="https://osu.ppy.sh/beatmapsets/2009605#osu/4266048"
                      onClick={handleMapClick}
                  >
                      <div className="map-img map-img-16">
                          <h2>Hyper banquet</h2>
                          <h3>Para Dot.</h3>
                          <h4>[Extreme]</h4>
                      </div>
                      <div className="map-mode">
                          <p>TB</p>
                      </div>
                      <div className="map-stats">
                          <div className="map-stats-left">
                <span>
                  <img src={Star}/> 6.63
                </span>
                              <span>
                  <img src={Bpm}/> 200
                </span>
                              <span>
                  <img src={Time}/> 5:07
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
              </div>
          </div>
      </section>
  );
};
export default MappoolPage;
