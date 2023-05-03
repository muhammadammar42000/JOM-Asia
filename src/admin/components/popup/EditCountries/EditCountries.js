import React from "react";
import cross from "../../../assets/images/Cross-01.png";
import icon from "../../../assets/images/Carema-02.png";
import addIconImg from "../../../assets/images/JOM-Portal-Assets-31.png";
import { useState } from "react";
import JOMinstance from "../../../../api";
import { toast } from "react-toastify";

export default function EditCountries({
  setEditCountries,
  countryData,
  getCountryList,
}) {
  const [imageLink, setImageLink] = useState();
  const [editCountryName, setEditCountryName] = useState("");
  const uploadImg = `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${imageLink}`;
  const [viewImg, setViewImg] = useState();
  const [viewLogo, setViewLogo] = useState();

  const options = [
    { value: "chocolate", label: "Food", icon: icon },
    { value: "strawberry", label: "Museum", icon: icon },
  ];

  const handleEdit = () => {
    setEditCountries(false);

    const body = {
      name: editCountryName,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
      countryId: countryData.id,
    };
    JOMinstance.post("admin/updateCountry", body).then((res) => {
      getCountryList();

      toast.success('Country Edit Successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });

    console.log(editCountryName);
  };

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
  return (
    <div>
      <div className="editCountries">
        <div className="editCountries_inner">
          <div className="editCountries_top">
            <p>Edit Country</p>
            <img
              onClick={() => setEditCountries(false)}
              src={cross}
              alt="Noo"
            />
          </div>
          <div className="editCountries_LogoUploader">
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

          <div className="editCountries_inputWrapper">
            <div className="editCountries_child">
              <p>Country Name</p>
              <input
                onChange={(e) => setEditCountryName(e.target.value)}
                placeholder="Country Name"
                type="text"
                defaultValue={countryData.name}
              />
            </div>

            <div className="editCountries_btn">
              <button onClick={() => handleEdit()}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
