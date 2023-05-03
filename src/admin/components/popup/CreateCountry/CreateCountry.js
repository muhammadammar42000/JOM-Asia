import React, { useEffect } from "react";
import cross from "../../../assets/images/Cross-01.png";
import icon from "../../../assets/images/Carema-02.png";
import addIconImg from "../../../assets/images/JOM-Portal-Assets-31.png";
import { useState } from "react";
import JOMinstance from "../../../../api";
import { toast } from "react-toastify";

export default function CreateCountry({
  setCreateCountry,
  setCountriesArray,
  countriesArray,
  getCountryList,
}) {
  const [imageLink, setImageLink] = useState();
  const [countryName, setCountryName] = useState("");
  const uploadImg = `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${imageLink}`;
  const [viewImg, setViewImg] = useState();
  const [viewLogo, setViewLogo] = useState();

  const options = [
    { value: "chocolate", label: "Food", icon: icon },
    { value: "strawberry", label: "Museum", icon: icon },
  ];

  const onFileChange = (e) => {
    // const file = e.target.files[0]
    // const fileType = ['image/jpeg', 'image/png', 'image/gif'].includes(file?.type)
    // if (file.size <= 800000) {
    // if (fileType) {
    //     const formData = new FormData()
    //     formData.append("uploadFor", 'logo')
    //     formData.append(
    //     'logo',
    //     file,
    //     file.name
    //     )
    //     getImage(formData)
    // }
    // }
  };

  const handleAddCountry = async () => {
    setCreateCountry(false);

    try {
      const body = {
        name: countryName,
        image:
          "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg",
      };

      const countryadd = await JOMinstance.post("admin/addcountry", body);

      toast.success("country added successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      getCountryList();
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="createCountry">
        <div className="createCountry_inner">
          <div className="createCountry_top">
            <p>Add Country</p>
            <img
              onClick={() => setCreateCountry(false)}
              src={cross}
              alt="Noo"
            />
          </div>
          <div className="createCountry_LogoUploader">
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

          <div className="createCountry_inputWrapper">
            <div className="createCountry_child">
              <p>Country Name</p>
              <input
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Country Name"
                type="text"
              />
            </div>

            <div className="createCountry_btn">
              <button onClick={() => handleAddCountry()}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
