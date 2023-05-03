import React, { useEffect, useState } from "react";
// import icon from "../../../assets/images/Carema-02.png"
import onFileChange from "../../upload-image";
import instance from "../../api/api";
import { toast } from "react-toastify";
import addIconImg from "../../../assets/images/JOM-Portal-Assets-31.png";
import crossImg from "../../../assets/images/Cross-01.png";
import icon from "../../../assets/images/Carema-02.png";
import JOMinstance from "../../../../api";

const Slider = ({ setAddSlider, addSlider, getSliderImages }) => {
  // const [mainImage, setMainImage] = useState("");
  // const conCat = `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${mainImage}`;
  const [viewImg, setViewImg] = useState();
  const [viewLogo, setViewLogo] = useState();
  const [pageUrl, setPageUrl] = useState("");
  toast.configure();

  const handleAddSlider = async () => {
    setAddSlider(false);

    try {

      const body = {
        imageUrl:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80",
        pageUrl: pageUrl,
      };

      const data = await JOMinstance.post("admin/addSlider", body);
      console.log(data);

      toast.success("Slider added successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      getSliderImages();

      // setMainImage("");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSliderImages();
  }, []);

  return (
    // <div>
    //    <div className={addSlider ? "addcategory_popup addcategory_popup_active" : "addcategory_popup"}>
    //         <div className="addcategory_popup_inner" id='style-3'>
    //             <div className='container'>
    //                 <div className='main_heading'>
    //                     <div>Add Slider</div>
    //                     <i className="fa fa-times cross" onClick={() =>setAddSlider(false)}></i>
    //                 </div>
    //                 <div className='image_section'>
    //                         <div className='barcode_section1'>
    //                             <div className="section_body">
    //                             <label htmlFor='catImg1'><img alt="" className={mainImage ? "uploaded-icon" : "icon"} src={mainImage ? conCat : icon}/></label>
    //                                 <input type="file" id='catImg1' name="myfile" onChange={(e) => onFileChange(e, setMainImage)}/>
    //                             </div>
    //                         </div>
    //                 </div>
    //                 <div className='btns'>
    //                     <button className='save' onClick={handleAddSlider}>Add</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div>
      <div className="addCateogory">
        <div className="addCateogory_inner">
          <div className="addCateogory_top">
            <p>Add Slider</p>
            <img onClick={() => setAddSlider(false)} src={crossImg} alt="Noo" />
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
              <p>Slider Name</p>
              <input
                onChange={(e) => setPageUrl(e.target.value)}
                placeholder="Slider Name"
                type="text"
              />
            </div>

            <div className="addCateogory_btn">
              <button onClick={() => handleAddSlider()}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
