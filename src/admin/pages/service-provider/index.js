import React from "react";
import Data from "./data";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";

const Index = () => {
  return (
    <div>
      {/* <TopBar/> */}
      <div className="main_layout">
        <Leftbar index={0} />
        <div className="right_bar">
          <Cards />
          <div className="sp_heading">Service Provider</div>
          {/* <div  className="scrollbar" id="style-3"> */}
          <Data />
        </div>
      </div>
    </div>
  );
};

export default Index;
