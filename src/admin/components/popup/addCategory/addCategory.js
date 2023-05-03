import React from "react";
import { useState } from "react";
// import icon from "../../../assets/images/Carema-02.png";
import Select from "react-select";
import addIconImg from "../../../assets/images/JOM-Portal-Assets-31.png";
import crossImg from "../../../assets/images/Cross-01.png";
import icon from "../../../assets/images/Carema-02.png";
import JOMinstance from "../../../../api";

const AddCategory = ({ setAddCategory, addCategory }) => {
  const [imageLink, setImageLink] = useState();
  const [categoryName, setCategoryName] = useState();
  const uploadImg = `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${imageLink}`;
  const [viewImg, setViewImg] = useState();
  const [viewLogo, setViewLogo] = useState();

  const options = [
    { value: "chocolate", label: "Food", icon: icon },
    { value: "strawberry", label: "Museum", icon: icon },
  ];

  const body = {
    name: categoryName,
    description: "http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg",
  };

  const handleAddCategory = async () => {
    setAddCategory(false);
    try {
      const add =  await JOMinstance.post("admin/addCategory", body);
      console.log(add);
    } catch (error) {
      console.log(error.message);
    }
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
      <div className="addCateogory">
        <div className="addCateogory_inner">
          <div className="addCateogory_top">
            <p>Add Category</p>
            <img
              onClick={() => setAddCategory(false)}
              src={crossImg}
              alt="Noo"
            />
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
              <input
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Category Name"
                type="text"
              />
            </div>

            <div className="addCateogory_btn">
              <button onClick={() => handleAddCategory()}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
