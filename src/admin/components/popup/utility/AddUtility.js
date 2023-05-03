import React, {useState} from 'react'
// import icon from "../../../assets/images/Carema-02.png"
import  onFileChange  from '../../upload-image'
import instance from '../../api/api'
import { toast } from "react-toastify";
import addIconImg from "../../../assets/images/JOM-Portal-Assets-31.png";
import crossImg from "../../../assets/images/Cross-01.png";
import icon from "../../../assets/images/Carema-02.png";


const AddUtility = ({addUtilityPopup, setAddUtilityPopup, getUtilityList}) => {

    toast.configure();

    const [mainImage, setMainImage] = useState("")
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [type, setType] = useState("")
    const [viewLogo, setViewLogo] = useState();


    const options = [
        { value: 'chocolate', label: 'Food' , icon : icon },
        { value: 'strawberry', label: 'Museum' , icon : icon },
      ];

    const conCat = `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${mainImage}`
    const handleAdd = () => {
  
            toast.success("Successfully Added", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setMainImage("")
            setName("")
            setLink("")
            setType("")
            setAddUtilityPopup(false)
            // getUtilityList()
        
    // console.log("body", body)
    }

  return (
    <div className="addCateogory">
      <div className="addCateogory_inner">
        <div className="addCateogory_top">
          <p>Add Utility</p>
          <img onClick={() => setAddUtilityPopup(false)} src={crossImg} alt="Noo" />
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
          <button onClick={() => setAddUtilityPopup(false)}>Add</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddUtility