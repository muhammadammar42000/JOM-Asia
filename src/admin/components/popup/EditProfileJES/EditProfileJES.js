import React, { useState } from "react";
import topGreen from "../../../../admin/assets/topGreen.png";
import avatar from "../../../../admin/assets/JES-Admin-Portal-Assets-14.png";
import cross from "../../../../admin/assets/JES-Admin-Portal-Assets-114.png";
import pen from "../../../../admin/assets/JES-Admin-Portal-Assets-69.png";
import email from "../../../../admin/assets/Web-Assets-16.png";
import phone from "../../../../admin/assets/Web-Assets-18.png";
import account from "../../../../admin/assets/Web-Assets-15.png";



const EditProfileJES = () => {
  const [viewLogo, setViewLogo] = useState();

  return (
    <div>
      <div className="editProfileJES">
        <div className="editProfileJES_inner">
          <div className="editProfileJES_top">
            <p>Edit Profile</p>

            <div className="editProfileJES_LogoUploader">
              <input
                type="file"
                onChange={(e) =>
                  setViewLogo(URL.createObjectURL(e.target.files[0]))
                }
                name="file22"
                id="file22"
                class="uploadFile"
              />
              <label for="file22">
                {viewLogo && viewLogo ? (
                  <div className="updloadImgIcon">
                  <img src={viewLogo} alt="No" className="viewImg" />
                  <img src={pen} className="pen" alt="..." />
                  </div>
                ) : (
                  <div className="updloadImgIcon">
                    <img src={avatar} className="logo" alt="No" />
                    <img src={pen} className="pen" alt="..." />
                  </div>
                )}
              </label>
            </div>

            <img className="cross" src={cross} alt="" />
          </div>



          <div className="editProfileJES_MainWrapper">

            <div className="editProfileJES_inputWrapper">
               <img className="account" src={account} alt="..." />
              <input type="text" placeholder="Account" />
            </div>


            
            <div className="editProfileJES_inputWrapper">
               <img className="phone" src={phone} alt="..." />
              <input type="number" placeholder="Phone" />
            </div>


            <div className="editProfileJES_inputWrapper">
               <img className="email" src={email} alt="..." />
              <input type="text" placeholder="Email" />
            </div>

          </div>



          <div className="editProfileJES_bottom">
              <button>Save/Update</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default EditProfileJES;
