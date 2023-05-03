import React, { useState, useEffect } from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
import UtilityCard from "../../components/cards/UtilityCard";
import AddUtility from "../../components/popup/utility/AddUtility";
import instance from "../../components/api/api";
import backgroundImg from "../../assets/images/img2.png";
import JOMinstance from "../../../api";

const Index = () => {
  // fake utilities fake data
  const utilitiesFakeData = [
    // {
    //   createdAt: "2022-06-15T15:21:36.000Z",
    //   id: "80a737ff-e6ed-48b1-8482-8c25d88201d8",
    //   image: backgroundImg,
    //   isActive: 1,
    //   isDeleted: 0,
    //   link: "eerererre.comss",
    //   name: "suns",
    //   type: "redirect",
    // },
    // {
    //   createdAt: "2022-06-15T15:21:36.000Z",
    //   id: "80a737ff-e6ed-48b1-8482-8c25d88201d8",
    //   image: backgroundImg,
    //   isActive: 1,
    //   isDeleted: 0,
    //   link: "eerererre.comss",
    //   name: "suns",
    //   type: "redirect",
    // },
    // {
    //   createdAt: "2022-06-15T15:21:36.000Z",
    //   id: "80a737ff-e6ed-48b1-8482-8c25d88201d8",
    //   image: backgroundImg,
    //   isActive: 1,
    //   isDeleted: 0,
    //   link: "eerererre.comss",
    //   name: "suns",
    //   type: "redirect",
    // },
    // {
    //   createdAt: "2022-06-15T15:21:36.000Z",
    //   id: "80a737ff-e6ed-48b1-8482-8c25d88201d8",
    //   image: backgroundImg,
    //   isActive: 1,
    //   isDeleted: 0,
    //   link: "eerererre.comss",
    //   name: "suns",
    //   type: "redirect",
    // },
  ];

  const [addUtilityPopup, setAddUtilityPopup] = useState(false);
  const [allUtilities, setAllUtilities] = useState(utilitiesFakeData);

  const getUtilityList = () => {
    JOMinstance.post("admin/getAllUtilities").then((res) => {
      setAllUtilities(res.data.data.successResult);
      console.log(
        "res.data.data.successResult ===>",
        res.data.data.successResult
      );
    });
  };
  useEffect(() => {
    getUtilityList();
  }, []);

  return (
    <div>
      {addUtilityPopup && (
        <AddUtility
          getUtilityList={getUtilityList}
          setAddUtilityPopup={setAddUtilityPopup}
          addUtilityPopup={addUtilityPopup}
        />
      )}
      <div className="main_layout">
        <Leftbar index={7} />
        <div className="right_bar">
          <div className="utilities_heading">
            <p>Utilities</p>
            <button
              className="utilities_addbtn"
              onClick={() => setAddUtilityPopup(true)}
            >
              Add Utility
            </button>
          </div>
          <Cards />
          <div className="utilities">
            <div className="utilities_body">
              <UtilityCard
                allUtilities={allUtilities}
                getUtilityList={getUtilityList}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
