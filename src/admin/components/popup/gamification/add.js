import React from "react";

const Add = ({ setGAddPop }) => {

  return (
    <div>
      <div className="addgamification_popup">
        <div className="addgamification_popup_inner">
          <h3>Add Gamificaton</h3>
          <i
            className="fa fa-times cross"
            onClick={() => setGAddPop(false)}
          ></i>
          <div>
            <input type="number" placeholder="Points" />
          </div>
          <div>
            <select>
              <option value="" selected disabled hidden>
                Choose Location
              </option>
              <option value="grapefruit">Pakistan</option>
              <option value="lime">USA</option>
              <option value="coconut">Australia</option>
              <option value="mango">India</option>
            </select>
          </div>
          <div className="btn_add">
            <button>ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
