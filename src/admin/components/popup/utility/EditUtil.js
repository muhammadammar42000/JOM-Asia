import React, {useState} from 'react'
// import icon from "../../../assets/images/Carema-02.png"
import onFileChange from '../../upload-image'
import instance from '../../api/api'
import { toast } from "react-toastify";
import addIconImg from "../../../assets/images/JOM-Portal-Assets-31.png";
import crossImg from "../../../assets/images/Cross-01.png";
import icon from "../../../assets/images/Carema-02.png";


const EditUtility = ({editUtilityPopup, setEditUtilityPopup, utilitiesObj, getUtilityList, setUtilitiesObj}) => {

    const [mainImage, setMainImage] = useState("")
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [type, setType] = useState("")
    const [viewLogo, setViewLogo] = useState();


    toast.configure();
    const handleUpdate = () => {

            toast.success("Successfully Updated", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setEditUtilityPopup(false)
            getUtilityList()
            setName("")
            setType("")
            setLink("")
            setMainImage("")
    }
  return (
    <div className="addCateogory">
    <div className="addCateogory_inner">
      <div className="addCateogory_top">
        <p>Edit Utility</p>
        <img onClick={() => setEditUtilityPopup(false)} src={crossImg} alt="Noo" />
      </div>
        <div className="addCateogory_LogoUploader">
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

      <div className="addCateogory_inputWrapper">

        <div className="addCateogory_child">
          <p>Utility Name</p>
          <input placeholder="Utility Name" type="text" />
        </div>

       

        <div className="addCateogory_btn">
        <button onClick={() => setEditUtilityPopup(false)}>Edit</button>
        </div>

      </div>
    </div>
  </div>
  )
}

export default EditUtility