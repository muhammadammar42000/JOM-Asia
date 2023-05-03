import React from "react";
import logo from "../../../../admin/assets/JES-Admin-Portal-Assets-02.png";
import backBtn from "../../../../admin/assets/JES-Admin-Portal-Assets-71.png";

const DisclaimerJES = () => {
  return (
    <div>
      <div className="DisclaimerJES">
        <div className="DisclaimerJES_inner">
          <div className="DisclaimerJES_top">
            <img className="logo" src={logo} alt="..." />
            <img src={backBtn} className="backBtn" alt="..." />
          </div>

          <div className="DisclaimerJES_textWrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus amet mollitia tempora officiis assumenda, laudantium
              ducimus odit consequuntur voluptatum quo maiores quia dicta,
              quaerat perspiciatis. Dolor ipsa sapiente atque ab. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Sint doloribus
              adipisci itaque officia quam animi exercitationem, nihil
              perferendis similique eum nostrum temporibus corporis quibusdam,
              inventore provident quaerat earum magnam dicta.
              <br /> <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              animi officiis reprehenderit quidem sequi dolores illo dolorum
              nobis ducimus, quas mollitia quam error aut suscipit consectetur
              cumque distinctio. Sequi, animi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerJES;
