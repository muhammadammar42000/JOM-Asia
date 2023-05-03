import React from "react";
import cross from "../../../assets/images/Cross-01.png";
import icon from "../../../assets/images/Carema-02.png";
import addIconImg from "../../../assets/images/JOM-Portal-Assets-31.png";
import { useState } from "react";
import JOMinstance from "../../../../api";
import { toast } from "react-toastify";

export default function EditServices({
  setEditServices,
  serviceId,
  getServices,
}) {
  const [imageLink, setImageLink] = useState();
  const [categoryName, setCategoryName] = useState();
  const uploadImg = `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${imageLink}`;
  const [viewImg, setViewImg] = useState();
  const [viewLogo, setViewLogo] = useState();
  const [editServiceName, setEditServiceName] = useState("");

  // const options = [
  //   { value: "chocolate", label: "Food", icon: icon },
  //   { value: "strawberry", label: "Museum", icon: icon },
  // ];

  console.log(serviceId);

  const handleEditService = async () => {
    setEditServices(false);

    try {
      const body = {
        categoryId: serviceId.id,
        name: editServiceName,
        description:
          "https://media.gettyimages.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=gi&k=20&c=Nr9cDm0BY-yx1eu7bUGN3QGk87VybswqcqTwT05S-U8=",
      };
      await JOMinstance.post("admin/editCategory", body);

      getServices();
      toast.success("Service Edit Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      <div className="editServices">
        <div className="editServices_inner">
          <div className="editServices_top">
            <p>Edit Service</p>
            <img onClick={() => setEditServices(false)} src={cross} alt="Noo" />
          </div>
          <div className="editServices_LogoUploader">
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

          <div className="editServices_inputWrapper">
            <div className="editServices_child">
              <p>Service Name</p>
              <input
                onChange={(e) => setEditServiceName(e.target.value)}
                placeholder="Service Name"
                type="text"
                defaultValue={serviceId.name}
              />
            </div>

            <div className="editServices_btn">
              <button onClick={() => handleEditService()}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
