import React, { useState, useEffect } from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
import { Link, useLocation, useNavigate } from "react-router-dom";
import backgrounImg from "../../assets/images/img2.png";
import backBtn from "../../assets/images/JOM-Web-Aseets-68.png";
import starIcon from "../../assets/images/JOM-Web-Aseets-69.png";
import logoMid from "../../assets/images/resitanceLogo.png";
import locationIcon from "../../assets/images/JOM-Web-Aseets-67.png";
import addImgIcon from "../../assets/images/JOM-Portal-Assets-33.png";
import img1 from "../../assets/images/JOM-Portal-Assets-69.png";
import img2 from "../../assets/images/JOM-Portal-Assets-70.png";
import img3 from "../../assets/images/JOM-Portal-Assets-71.png";
import crossIcon from "../../assets/images/JOM-Portal-Assets-68.png";
import EditServiceProvider from "../../components/popup/EditServiceProvider/EditServiceProvider";
import sliderAddIcon from "../../assets/images/JOM-Portal-Assets-31.png";
import JOMinstance from "../../../api";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Index = (props) => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const value = urlParams.get("serviceId");

  const [allListing, setAllListing] = useState([]);

  const [viewLogo, setViewLogo] = useState();
  const [viewImg, setViewImg] = useState();
  const [edit, setEdit] = useState(false);

  const getListing = async () => {
    if (value) {
      await JOMinstance.post("serviceprovider/getServiceAllDetails", {
        spId: value,
      }).then((res) => {
        if (res.data.data.successResult[0]) {
          setAllListing(res.data.data.successResult);
        }

        console.log(allListing[0])

        // res.data.data.successResult.forEach(item => {
        //     const obj = {}
        //     obj.listings = item.listings
        //     tempArray.push(obj)
        //     setAllListing(tempArray)
        // })
        // setAllListing(res.data.data.successResult)
      });
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleAdd = (e) => {
    const file = e.target.files;
    const imageArray = Array.from(file);

    const selectedFileArray = imageArray?.map((a) => {
      const file = URL.createObjectURL(a);
      const arrObjImg = { url: file, type: "image" };
      return arrObjImg;
    });

    setAllListing(allListing.concat(selectedFileArray));
  };

  const handleDelete = (res) => {
    // setAllListing(allListing?.filter((item) => item !== res));
  };

  useEffect(() => {
    getListing();
  }, []);

  useEffect(() => {
    if (edit) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [edit]);

  return (
    <div>
      {/* <TopBar/> */}
      {edit && <EditServiceProvider setEdit={setEdit} />}
      <div className="main_layout">
        <Leftbar index={0} />
        <div className="right_bar">
          {/* <Cards /> */}

          <div className="booking">
            <div className="booking_left">
              <div className="booking_leftInner">
                <div style={{ position: "relative" }}>
                  <img
                    className="backgroundImg"
                    // src={viewImg ? viewImg : backgrounImg}
                    src={allListing[0]?.image}
                    alt="No"
                  />
                  <div className="addBackgroundIcon">
                    {/* background img uploader */}
                    <div className="booking_LogoUploader">
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
                          <img src={addImgIcon} alt="No" className="logo" />
                        ) : (
                          <div className="updloadImgIcon">
                            <img className="logo" src={addImgIcon} alt="No" />
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="booking_top">
                  <img
                    onClick={() => handleBack()}
                    className="backBtn"
                    src={backBtn}
                    alt="backBtn"
                  />
                  <div className="booking_ratingSection">
                    <p className="ratingPoint">{allListing[0]?.ratings}</p>
                    <img alt="star" className="starIcon" src={starIcon} />
                  </div>
                </div>

                <div className="booking_logoSection">
                  <div className="circle">
                    <img
                      // src={viewLogo ? viewLogo : logoMid}
                      src={allListing[0]?.logo}
                      className="logoMid"
                      alt="logoIcon"
                    />

                    {/* logo uploader */}
                    <div className="booking_imgUploader">
                      <input
                        type="file"
                        onChange={(e) =>
                          setViewLogo(URL.createObjectURL(e.target.files[0]))
                        }
                        name="file2"
                        id="file2"
                        class="uploadFile"
                      />
                      <label for="file2">
                        {viewLogo && viewLogo ? (
                          <img src={addImgIcon} alt="No" className="viewImg" />
                        ) : (
                          <div className="updloadImgIcon">
                            <img className="logo" src={addImgIcon} alt="No" />
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                  <p className="hotelName">
                  {allListing[0]?.companyName}
                  </p>
                  <div className="booking_locationInfo">
                    <img
                      alt="location-Icon"
                      className="locationIcon"
                      src={locationIcon}
                    />
                    <p>{allListing[0]?.businessAddress}</p>
                  </div>
                </div>

                <div className="booking_sliderWrapper">
                  <Swiper
                    slidesPerView={4}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      300: {
                        slidesPerView: 2,
                      },
                      400: {
                        slidesPerView: 2,
                      },
                      600: {
                        slidesPerView: 4,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      {" "}
                      <div className="booking_SlideAdd">
                        <input
                          multiple
                          accept="image/png , image/jpeg , image/webp"
                          type="file"
                          onChange={(e) => handleAdd(e)}
                          name="file3"
                          id="file3"
                          class="uploadFile"
                        />
                        <label for="file3">
                          <div className="updloadImgIcon">
                            <img
                              className="logo"
                              src={sliderAddIcon}
                              alt="No"
                            />
                          </div>
                        </label>
                      </div>
                    </SwiperSlide>

                    {allListing?.map((res) => {
                      console.log(res)
                      return (
                        <SwiperSlide>
                          <div className="booking_sliderChild">
                            {" "}
                            <img
                              className="sliderImg"
                              src={res.image}
                              alt="Noo"
                            />{" "}
                            <img
                              onClick={() => handleDelete(res)}
                              className="crossIcon"
                              src={crossIcon}
                              alt="Noo"
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>

                <div className="booking_save">
                  <button>Save / Update</button>
                </div>
              </div>
            </div>

            <div className="booking_right">
              <div className="booking_rightInner">
                <div className="booking_btn">
                  {" "}
                  <button onClick={() => setEdit(true)}>
                    Edit Service
                  </button>{" "}
                </div>
                <p className="descriptionHead">Description</p>

                <div className="booking_paraWrapper">
                  <p className="descriptionPara">
                    {allListing[0]?.description}
                  </p>
                </div>

                <p className="contactHead">Contact</p>

                <div className="booking_linkSection">
                  <div className="booking_section">
                    <p className="smallHead">Name</p>
                    <p className="smallInfo">{allListing[0]?.businessName}</p>
                  </div>
                  <div className="booking_section">
                    <p className="smallHead">Website</p>
                    <p className="smallInfo">{allListing[0]?.website}</p>
                  </div>

                  <div className="booking_section">
                    <p className="smallHead">Location</p>
                    <p className="smallInfo">{allListing[0]?.businessAddress}</p>
                  </div>
                  <div className="booking_section">
                    <p className="smallHead">Contact</p>
                    <p className="smallInfo">{allListing[0]?.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
