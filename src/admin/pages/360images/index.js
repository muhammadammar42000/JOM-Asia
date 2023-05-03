import React from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
import NotifcationCard from "../../components/cards/NotifcationCard";
import Images360 from "../../components/cards/360Images";

const index = () => {
  return (
    <div>
      {/* <TopBar/> */}
      <div className="main_layout">
        <Leftbar index={10} />
        <div className="right_bar">
        <div className="main_images360_heading">
                <p>360 Images</p>
                <input className='date' type='date' onKeyDown={(e) => e.preventDefault()} />
            </div>
          <Cards />
          <div className="main_images360">
            <div className="main_images360_body" id="style-3">
                <Images360 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
