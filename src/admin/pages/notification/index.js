import React from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
import NotifcationCard from "../../components/cards/NotifcationCard";

const index = () => {
  return (
    <div>
      {/* <TopBar/> */}
      <div className="main_layout">
        <Leftbar index={9} />
        <div className="right_bar">
        <div className='main_notifications_heading'>
                <p>Notifications</p>
                <input className='date' type='date' onKeyDown={(e) => e.preventDefault()} />
            </div>
          <Cards />
          <div className="main_notifications">
          
            <div className="main_notifications_body" id="style-3">             
                <NotifcationCard heading={"Request for services"} />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
