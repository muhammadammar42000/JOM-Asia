import React from 'react'
import { useState } from 'react';
import uploadIcon from "../../../assets/images/360icon.png";
import Select from 'react-select';
import addIconImg from "../../../assets/images/JOM-Portal-Assets-33.png";
import icon from "../../../assets/images/Carema-02.png";
import crossImg from "../../../assets/images/Cross-01.png";


const EditServiceProvider = ({setEdit}) => {
    const [viewImg, setViewImg] = useState();
    const [viewLogo, setViewLogo] = useState();

    
  const options = [
    { value: 'chocolate', label: 'Food' , icon : icon },
    { value: 'strawberry', label: 'Museum' , icon : icon },
  ];
  return (
    <div>
    <div className="addService">
      <div className="addService_inner">
        <div className="addService_top">
          <p>Edit Service Provider</p>
          <img onClick={() => setEdit(false)} src={crossImg} alt="Noo" />
        </div>

        <div className="addService_bgUploader">
          <div className="addService_imgUploader">
            <input
              type="file"
              onChange={(e) =>
                setViewImg(URL.createObjectURL(e.target.files[0]))
              }
              name="file"
              id="file"
              class="uploadFile"
            />
            <label for="file">
              {viewImg && viewImg ? (
                <img src={viewImg} alt="No" className="viewImg" />
              ) : (
                <div className="updloadImgIcon">
                  <img src={addIconImg} alt="No" />
                </div>
              )}
            </label>
          </div>
        </div>

        <div className="addService_LogoUploader">
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
              <img src={viewLogo} alt="No" className="viewImg" />
            ) : (
              <div className="updloadImgIcon">
                <img className="logo" src={addIconImg} alt="No" />
              </div>
            )}
          </label>
        </div>

        <div className="addService_inputWrapper">
          <div className="addService_child">
            <p>Select Category</p>
            <Select
          className='Reactselect'    
          placeholder="Select Service"
          // value={selectedOption}
          // onChange={this.handleChange}
          options={options}
          getOptionLabel={e => (
          <div className='addService_select' >
          <img src={e?.icon} alt="..." />
          <span style={{ marginLeft: 20 }}>{e?.value}</span>
          </div>)}    
          />
          </div>

          <div className="addService_child">
            <p>Service Name</p>
            <input placeholder="Service Name" type="text" />
          </div>

          <div className="addService_child">
            <p>Description</p>
            <input placeholder="Service Description" type="text" />
          </div>

          <div className="addService_child">
            <p>Website</p>
            <input placeholder="Website" type="text" />
          </div>

          <div className="addService_child">
            <p>Contact Number</p>
            <input placeholder="Contact Number" type="text" />
          </div>

          <div className="addService_child">
            <p>Location</p>
            <input placeholder="Location" type="text" />
          </div>

          <div className="addService_btn">
          <button onClick={() => setEdit(false)}>Edit</button>
          </div>

        </div>
      </div>
    </div>
   
  </div>
  )
}

export default EditServiceProvider