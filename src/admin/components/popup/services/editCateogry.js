import React, {useState, useEffect} from 'react'
import  onFileChange  from '../../../components/upload-image'
import axios from 'axios'
import instance from '../../api/api'
import { toast } from "react-toastify";
import crossImg from "../../../assets/images/Cross-01.png";
import addIconImg from "../../../assets/images/JOM-Portal-Assets-31.png";


const EditCategory = ({setEditPopup, editPopup, categoryObj }) => {

    
    const [catImage, setCatImage] = useState("")
    const [name, setName] = useState("")
    const [viewImg, setViewImg] = useState();
    const [viewLogo, setViewLogo] = useState();
      toast.configure();
    const updateCategory = () => {

        toast.success("Category Updated Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        setEditPopup(false)
        setName(null)


    }
    useEffect(() => {
        if(categoryObj.name) {
            setName(categoryObj.name)
        }
    }, [])
    

  return (
    <div>
    <div>
    <div className="addCateogory">
      <div className="addCateogory_inner">
        <div className="addCateogory_top">
          <p>Edit Category</p>
          <img onClick={() => setEditPopup(false)} src={crossImg} alt="Noo" />
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
            <p>Category Name</p>
            <input placeholder="Category Name" type="text" />
          </div>

         

          <div className="addCateogory_btn">
          <button onClick={() => setEditPopup(false)}>Add</button>
          </div>

        </div>
      </div>
    </div>
   
  </div>
    </div>
  )
}

export default EditCategory