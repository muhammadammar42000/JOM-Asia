import React, { useState, useEffect } from "react";
// import instance from '../../../api/api'
import Attraction from "../../../popup/services/addPostBtn/attractionPopup";

const SelectAttractionList = ({ setAttractionList, attractionList }) => {
  const [categories, setCategories] = useState([]);
  const [PopUpAttraction, setPopUpAttraction] = useState(false);
  const [catName, setCatName] = useState("");

  // const getAllCatgeories = () => {

  //     instance.post("admin/getAdminCategories").then(res => {
  //         setCategories(res.data.data.successResult)
  //     })

  //     }

  useEffect(() => {}, []);

  return (
    <div>
      {/* <Attraction catName={catName} setPopUpAttraction={setPopUpAttraction} PopUpAttraction={PopUpAttraction}/>         */}

      <div className={attractionList ? "list list_active" : "list"}>
        <div className="list_inner" id="style-3">
          <div className="container">
            <div className="main_heading">
              <div>Services List</div>
              <i
                className="fa fa-times cross"
                onClick={() => setAttractionList(false)}
              ></i>
            </div>
            <select
              className="dropdown"
              onChange={(e) => setCatName(e.target.value)}
            >
              <option value="" selected disabled hidden>
                Select List
              </option>
              {categories &&
                categories.map((elem, index) => (
                  <option key={index} value={elem.name}>
                    {elem.name}
                  </option>
                ))}
            </select>
            <div>
              <input
                className="inputbox"
                placeholder="Search Service Providers"
                type="text"
              />
            </div>
            <div className="btns">
              <button className="save">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAttractionList;
