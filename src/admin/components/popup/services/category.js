import React, { useEffect, useState } from "react";
import icon from "../../../assets/images/Carema-02.png";
import { toast } from "react-toastify";
// import axios from "axios";
// import bgImg from "../../../assets/images/JOM-Web-Aseets-01.png";
import crossImg from "../../../assets/images/Cross-01.png";
import uploadIcon from "../../../assets/images/360icon.png";
import Select from "react-select";
import addIconImg from "../../../assets/images/JOM-Portal-Assets-33.png";
import locationIcon from "../../../assets/images/Notification-icon-01.png";
import JOMinstance from "../../../../api";

const AddService = ({ setAddService, addService }) => {
  const [imageLink, setImageLink] = useState();
  const [categoryName, setCategoryName] = useState();
  const uploadImg = `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${imageLink}`;
  const [viewImg, setViewImg] = useState();
  const [viewLogo, setViewLogo] = useState();

  const options = [
    { value: "chocolate", label: "Food", icon: icon },
    { value: "strawberry", label: "Museum", icon: icon },
  ];

  // const countries = [
  //   { value: "Malaysia", icon: icon },
  //   { value: "Singapore", icon: icon },
  //   { value: "Vietnam", icon: icon },
  //   { value: "Thailand", icon: icon },
  //   { value: "Indonesia", icon: icon },
  // ];

  const getCountries = async () => {
    try {
      const res = await JOMinstance.post("admin/getAllCountry");
      setCountries(res.data.data.successResult);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCategories = async () => {
    try {
      const res = await JOMinstance.post("admin/getAdminCategories");
      setCategories(res.data.data.successResult);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCountries();
    getCategories();
  }, []);

  toast.configure();

  const getImage = (data) => {
    // axios.post('https://backend.johortourism.my/admin/uploadFile', data)
    //         .then(res => {
    //             setImageLink(res.data.data.successResult[0])
    //         })
    //         .catch(err => console.log(err))
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

  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handleAddCategory = async () => {
    setAddService(false);

    try {
      const body = {
        image:
          "https://images.unsplash.com/photo-1510438974273-f09ea1f2d4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&w=1000&q=80",
        logo: "https://www.logodesign.net/images/home-page-logo-03.png",
        countryId: countryId,
        categoryId: categoryId,
        companyName: serviceName,
        description: description,
        website: website,
        phone: contactNumber,
        coordinates: location,
        subCategoryId: null,
        password: "123456",
        email: email,
        businessAddress: "checking",
        businessName: "checking",
        isBookable: "chekcing",
      };

      await JOMinstance.post("serviceprovider/addServiceProvider", body);
    } catch (error) {
      console.log(error.message);
    }

    toast.success("Category Added Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setAddService(false);
  };
  return (
    <div>
      <div className="addService">
        <div className="addService_inner">
          <div className="addService_top">
            <p>Add Service Provider</p>
            <img
              onClick={() => setAddService(false)}
              src={crossImg}
              alt="Noo"
            />
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
              <p>Select Country</p>
              <select
                className="selectStyle Reactselect"
                onChange={(e) => setCountryId(e.target.value)}
              >
                <option>Select Country</option>
                {countries?.map((item, index) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>

              {/* <Select
                className="Reactselect"
                placeholder="Select Service"
                // value={selectedOption}
                // onChange={this.handleChange}
                options={countries}
                getOptionLabel={(e) => (
                  <div className="addService_select">
                    <img src={locationIcon} alt="..." />
                    <span style={{ marginLeft: 20 }}>{e?.value}</span>
                  </div>
                )}
              /> */}
            </div>

            <div className="addService_child">
              <p>Select Category</p>
              <select
                className="selectStyle Reactselect"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option>Select Category</option>
                {categories?.map((item, index) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
              {/* <Select
                className="Reactselect"
                placeholder="Select Service"
                // value={selectedOption}
                // onChange={this.handleChange}
                options={options}
                getOptionLabel={(e) => (
                  <div className="addService_select">
                    <img src={e?.icon} alt="..." />
                    <span style={{ marginLeft: 20 }}>{e?.value}</span>
                  </div>
                )}
              /> */}
            </div>

            <div className="addService_child">
              <p>Service Name</p>
              <input
                onChange={(e) => setServiceName(e.target.value)}
                placeholder="Service Name"
                type="text"
              />
            </div>
            <div className="addService_child">
              <p>Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="text"
              />
            </div>

            <div className="addService_child">
              <p>Description</p>
              <input
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Service Description"
                type="text"
              />
            </div>

            <div className="addService_child">
              <p>Website</p>
              <input
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Website"
                type="text"
              />
            </div>

            <div className="addService_child">
              <p>Contact Number</p>
              <input
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Contact Number"
                type="text"
              />
            </div>

            <div className="addService_child">
              <p>Location</p>
              <input
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                type="text"
              />
            </div>

            <div className="addService_btn">
              <button onClick={() => handleAddCategory()}>Add Service</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
