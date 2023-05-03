import React, { useEffect, useState } from "react";
import serviceIcon from "../../assets/images/heart.png";
import notificationIcon from "../../assets/images/bell.png";
import ecIcon from "../../assets/images/Explore.png";
import totalServicesIcon from "../../assets/images/ServiceProvider.png";
import instance from "../api/api";
import JOMinstance from "../../../api";

const Index = ({ setServiceLength }) => {
  const [countServiceProvider, setCountServiceProvider] = useState("");
  const [countEC, setCountEC] = useState("");
  const [countServices, setCountServices] = useState("");
  const [totalNoti, setTotalNoti] = useState("");

  const getStats = () => [
    JOMinstance.post("admin/getAdminStats").then((res) => {
      console.log("res,,,,,,,,,,,,,", res);
      setCountEC(res?.data?.data?.successResult[0]?.EditorsChoice);
      setCountServiceProvider(
        res?.data?.data?.successResult[0]?.serviceProviders
      );
      setCountServices(res?.data?.data?.successResult[0]?.services);
      setTotalNoti(res?.data?.data?.successResult[0]?.notifications);
      if (setServiceLength) {
        setServiceLength(res?.data?.data?.successResult[0]?.services);
      }
    }),
  ];
  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className="right_bar_cards">
      <div className="right_bar_singlecard">
        <div className="cards_item">
          <div>
            <div className="cards_item_heading">Service Provider</div>
            <div className="cards_item_single">
              {/* <div className='round-img'>
                        <img src={serviceIcon} alt='' />
                    </div> */}
              <div>
                <p className="cards_item_number">{countServiceProvider}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_bar_singlecard">
        <div className="cards_item">
          <div>
            <div className="cards_item_heading">Total Services</div>
            <div className="cards_item_single">
              {/* <div className='round-img'>
                        <img src={totalServicesIcon} alt='' />
                    </div> */}
              <div>
                <p className="cards_item_number">{countServices}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_bar_singlecard">
        <div className="cards_item">
          <div>
            <div className="cards_item_heading">Top Places</div>
            <div className="cards_item_single">
              {/* <div className='round-img'>
                        <img src={ecIcon} alt='' />
                    </div> */}
              <div>
                <p className="cards_item_number">{countEC}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_bar_singlecard">
        <div className="cards_item">
          <div>
            <div className="cards_item_heading">Notifications</div>
            <div className="cards_item_single">
              {/* <div className='round-img'>
                        <img src={notificationIcon} alt='' />
                    </div> */}
              <div>
                <p className="cards_item_number">{totalNoti}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
