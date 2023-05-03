import React, { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import editIcon from "../../assets/images/Edit.png";
import EditCategory from "../popup/services/editCateogry";
import instance from "../api/api";
import { toast } from "react-toastify";

import gastronomy from "../../assets/images/icons-01.png";
import attraction from "../../assets/images/icons-02.png";
import education from "../../assets/images/icons-03.png";
import recreation from "../../assets/images/icons-04.png";
import shopping from "../../assets/images/icons-05.png";
import museum from "../../assets/images/icons-06.png";
import accommodation from "../../assets/images/icons-07.png";
import golf from "../../assets/images/icons-08.png";
import halthCare from "../../assets/images/icons-09.png";
import hotel from "../../assets/images/icons-10.png";
import marketPlace from "../../assets/images/icons-11.png";
import petron from "../../assets/images/icons-12.png";
import flight from "../../assets/images/icons-13.png";
import ferries from "../../assets/images/icons-14.png";
import busses from "../../assets/images/icons-15.png";
import JOMinstance from "../../../api";

const Index = ({ iconStatus, id, getAllSubCatgeories }) => {
  // slider fake data

  toast.configure();

  const [editPopup, setEditPopup] = useState(false);
  const [categoryObj, setCategoryObj] = useState({});
  // const [sliderFakeData, setSliderFakeData] = useState([]);
  // const [categories, setCategories] = useState(sliderFakeData);
  const [clickIndex, setClickIndex] = useState("All");
  const [stateUpdate, setStateUpdate] = useState(false);
  const [sliderData, setSliderData] = useState([]);

  const getServices = async () => {
    try {
      const services = await JOMinstance.post("admin/getAdminCategories");
      setSliderData(services?.data?.data?.successResult);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = (data, index) => {
    console.log(data);
    const body = {
      categoryId: data.id,
      status: sliderData[index].isActive === 1 ? 0 : 1,
      //status: toggle
    };

    JOMinstance.post("admin/changeCategoryStatus", body).then((res) => {
      const msg =
        body.status === 0
          ? "This category is successfully hidden"
          : "This category is active now";

      toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // getServices();
    });

    if (data?.isActive === 1) {
      sliderData[index].isActive = 0;
      setStateUpdate(!stateUpdate);
    } else {
      sliderData[index].isActive = 1;
      setStateUpdate(!stateUpdate);
    }
  };

  useEffect(() => {
    getServices();
    setClickIndex(id);
  }, []);

  useEffect(() => {
    if (editPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [editPopup]);

  return (
    <div>
      {editPopup && (
        <EditCategory
          editPopup={editPopup}
          setEditPopup={setEditPopup}
          categoryObj={categoryObj}
        />
      )}
      <div className="clients">
        <div className="clients_body">
          <Swiper
            speed={700}
            modules={[Navigation]}
            navigation
            breakpoints={{
              1: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
              1200: {
                slidesPerView: 7,
              },
            }}
          >
            {/* <div>
              {
                <SwiperSlide>
                  <div
                    className={
                      iconStatus === "on" ? "big_img" : "clients_image"
                    }
                    style={{ textAlign: "center" }}
                  >
                    <div className="clients_whiteBox2"></div>
                    <img src={"addImg"} alt="" />
                    {iconStatus === "on" ? (
                      <div>
                        <div>
                          <img
                            className="clients_edit"
                            src={editIcon}
                            alt=""
                            onClick={() => {
                              setEditPopup(true);
                            }}
                          />
                        </div>
                        <div className="clients_delete">
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={elem.isActive === 1 ? false : true}
                            />
                            <span
                              className="slider round"
                              onClick={() => handleToggle(elem)}
                            ></span>
                            <p className="helping">
                              If toggle is on, it will hide this category
                            </p>
                          </label>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <p
                      className={
                        clickIndex === "All"
                          ? "clients_name clients_nameActive"
                          : "clients_name"
                      }
                      onClick={() => {
                        setClickIndex("All");
                      }}
                    >
                      All
                    </p>
                  </div>
                </SwiperSlide>
              }
            </div> */}

            {sliderData &&
              sliderData.map((elem, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      className={
                        iconStatus === "on" ? "big_img" : "clients_image"
                      }
                      style={{ textAlign: "center" }}
                      key={index}
                    >
                      <img src={gastronomy} alt="" />
                      {iconStatus === "on" ? (
                        <div>
                          <div>
                            <img
                              className="clients_edit"
                              src={editIcon}
                              alt=""
                              onClick={() => {
                                setEditPopup(true);
                                setCategoryObj(elem);
                              }}
                            />
                          </div>
                          <div className="clients_togglerWrapper">
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={elem.isActive === 1 ? false : true}
                                onClick={() => handleToggle(elem, index)}
                              />
                              <span
                                className="slider round"
                                // onClick={() => handleToggle(elem)}
                              ></span>
                              <p className="helping">
                                If toggle is on, it will hide this category
                              </p>
                            </label>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      <p
                        className={
                          iconStatus
                            ? clickIndex === index
                              ? "clients_name clients_nameActive"
                              : "clients_name"
                            : "clients_name1"
                        }
                        onClick={() => {
                          getAllSubCatgeories(elem.name, elem.id);
                          setClickIndex(index);
                        }}
                      >
                        {elem.name}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Index;
