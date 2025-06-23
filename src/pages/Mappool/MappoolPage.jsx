import React, {useState} from 'react';
import './MappoolPage.css';

const MappoolPage = () => {
    const [openDetails, setOpenDetails] = useState(null);

    const handleToggle = (modType) =>{
      setOpenDetails(openDetails === modType ? null : modType);
    };


    return (
        <section className="mappool">
            <h1 className="mappool-h1">Маппул</h1>
            <details
                className="details"
                open={openDetails === 'nm'}
                onClick={(e) => {
                    e.preventDefault();
                    handleToggle('nm');
                }}
            >
                <summary className="summary summary-blue">Nomod</summary>
                <a className="map-card map-card-blue" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>NM1</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
                <a className="map-card map-card-blue" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>NM2</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
                <a className="map-card map-card-blue" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>NM3</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
            </details>
            <details className="details"
                     open={openDetails === 'dt'}
                     onClick={(e) => {
                         e.preventDefault();
                         handleToggle('dt');
                     }}
            >
                <summary className="summary summary-red">DoubleTime</summary>
                <a className="map-card map-card-red" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>DT1</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
                <a className="map-card map-card-red" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>DT2</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
                <a className="map-card map-card-red" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>DT3</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
            </details>
            <details className="details"
                     open={openDetails === 'hr'}
                     onClick={(e) => {
                         e.preventDefault();
                         handleToggle('hr');
                     }}
            >
                <summary className="summary summary-green">HardRock</summary>
                <a className="map-card map-card-green" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>HR1</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src=".../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src=".../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src=".../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
                <a className="map-card map-card-green" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>HR2</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
                <a className="map-card map-card-green" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>HR3</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
            </details>
            <details className="details"
                     open={openDetails === 'hd'}
                     onClick={(e) => {
                         e.preventDefault();
                         handleToggle('hd');
                     }}
            >
                <summary className="summary summary-yellow">Hidden</summary>
                <a className="map-card map-card-yellow" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>HD1</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
                <a className="map-card map-card-yellow" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>HD2</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
                <a className="map-card map-card-yellow" href="https://osu.ppy.sh/beatmapsets/2373050#osu/5123942">
                    <div className="map-img">
                        <h2>Phalanx</h2>
                        <h3>USAO</h3>
                    </div>
                    <div className="map-mode">
                        <p>HD3</p>
                    </div>
                    <div className="map-stats">
                        <div className="map-stats-left">
                            <span><img src="../../assets/images/icon/star.svg"/> 7.57</span>
                            <span><img src="../../assets/images/icon/bpm.svg"/> 208</span>
                            <span><img src="../../assets/images/icon/time.svg"/> 4:09</span>
                        </div>
                        <div className="map-stats-right">
                            <span><img src="../../assets/images/icon/cs.svg"/> 4.2</span>
                            <span><img src="../../assets/images/icon/ar.svg"/> 9.8</span>
                            <span><img src="../../assets/images/icon/od.svg"/> 9.6</span>
                        </div>
                    </div>
                </a>
            </details>
        </section>
    );
}
export default MappoolPage;