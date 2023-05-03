import React, { useState, useEffect } from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
import AddMap from "../../components/popup/map/addMap";
import GamificationCard from "../../components/cards/GamificationCard";
import MapCards from "../../components/cards/MapCards";
import JOMinstance from "../../../api";
// import instance from "../../components/api/api";


const Index = () => {
  const [mapPopup, setMapPopup] = useState(false);
  const [qrList, setQrList] = useState([]);
  const [gameLevel, setGameLevel] = useState([]);
  const [userLevelSearch, setUserLevelSearch] = useState("");
  const [mapSearch, setMapSearch] = useState("");

  const getQrList = () => {
    JOMinstance.post("admin/ListQr").then((res) => {
      setQrList(res.data.data.successResult);
    });
  };
  const getUserLevel = () => {
    JOMinstance.post("admin/ListUserLevels").then((res) => {
      setGameLevel(res.data.data.successResult);
    });
  };
  useEffect(() => {
    getQrList();
    getUserLevel();
  }, []);

  return (
    <div>
      {mapPopup && (
        <AddMap
          getQrList={getQrList}
          setMapPopup={setMapPopup}
          mapPopup={mapPopup}
        />
      )}

      {/* <TopBar/> */}
      <div className="main_layout">
        <Leftbar index={1} />
        <div className="right_bar">
          <Cards />
          <div className="main_gamification">
            <div className="ec_heading">
              <div>Gamification</div>
              <div>
                <button className="add" onClick={() => setMapPopup(true)}>
                  Add Map
                </button>
              </div>
            </div>
            <div className="main_gamification_split">
              <div className="left">
                <div className="left_heading">
                  <p>User Levels</p>
                  <input
                    type="text"
                    placeholder="Search by Name"
                    onChange={(e) => setUserLevelSearch(e.target.value)}
                  />
                </div>
                <GamificationCard
                  getUserLevel={getUserLevel}
                  userLevelSearch={userLevelSearch}
                  gameLevel={gameLevel}
                />
              </div>
              <div className="right">
                <div className="right_heading">
                  <p>Maps</p>
                  <input
                    type="text"
                    placeholder="Search by Name"
                    onChange={(e) => setMapSearch(e.target.value)}
                  />
                </div>
                <MapCards
                  getQrList={getQrList}
                  qrList={qrList}
                  mapSearch={mapSearch}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
