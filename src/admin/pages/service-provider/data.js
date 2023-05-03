import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
// import Travelicon from "../../assets/images/travel.png";
// import BackIcon from "../../assets/images/Back-2-01.png";
import { useNavigate } from "react-router-dom";
import pic3 from "../../assets/images/johor-admin-assets-29.png";
// import locationIcon from "../../assets/images/johor-admin-assets-11.png";
// import starIcon from "../../assets/images/johor-admin-assets-12.png";
// import { Link } from "react-router-dom";
// import instance from "../../components/api/api";
import locationIcon from "../../assets/images/JOM-Web-Aseets-02.png";
import ratingIcon from "../../assets/images/internet-01.png";
import websiteIcon from "../../assets/images/internet-02.png";
import phoneIcon from "../../assets/images/internet-03.png";
import forwardIcon from "../../assets/images/Back-2-01.png";
import EditServiceProvider from "../../components/popup/EditServiceProvider/EditServiceProvider";
import DeleteServiceProvider from "../../components/popup/DeleteServiceProvider/DeleteServiceProvider";
import JOMinstance from "../../../api";

const Index = ({ subCategories, getAllSubCatgeories, searchValue }) => {
  const navigate = useNavigate();

  const [menuToggle, setMenuToggle] = useState(false);
  const [clickIndex, setClickIndex] = useState(-1);
  const [filterData, setFilterData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [deleteService, setDeleteService] = useState(false);
  const optionRef = useRef();

  toast.configure();

  const handleAddEditor = (elem) => {
    if (elem.isActive === 0) {
      setMenuToggle(false);
      {
        toast.error("Disbaled category cannot be added in Top Places", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      JOMinstance.post("admin/addIntoEditorChoice", {
        serviceProviderId: elem.id,
      })
        .then((res) => {
          setMenuToggle(false);
          toast.success("Added Successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          toast.error("Cannot add in Top Places", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setMenuToggle(false);
        });
    }
  };

  // const handleToggle = (data, index) => {

  //   toast.success("Success", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  const handlePlaceToggle = (data, index) => {
    const body = {
      serviceProviderId: data.id,
      status: subCategories[index].isActive === 1 ? 0 : 1,
    };
    JOMinstance.post("admin/disableServiceProvider", body).then((res) => {
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

      getAllSubCatgeories("", data.categoryId);
    });
  };

  useEffect(() => {
    const searchSubCategories = searchValue
      ? subCategories?.filter((item) =>
          item?.businessName?.toLowerCase().includes(searchValue.toLowerCase())
        )
      : subCategories;
    setFilterData(searchSubCategories);
  }, [searchValue, getAllSubCatgeories]);

  useEffect(() => {
    if (edit) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [edit]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setClickIndex(-1);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionRef]);

  return (
    <div>
      <div>
        {edit && <EditServiceProvider setEdit={setEdit} />}
        {
          <DeleteServiceProvider
            setDeleteService={setDeleteService}
            deleteService={deleteService}
          />
        }
        <div className="main_service_list">
          {subCategories?.length > 0 ? (
            subCategories.map((elem, index) => {
              return (
                <div className="service_list">
                  <div className="service_list_main">
                    <div className="service_list_top">
                      <div className="left">
                        <img src={elem.categoryImage} alt="" />
                        <p>{elem.categoryName}</p>
                      </div>
                      <i
                        className="fas fa-ellipsis-v"
                        onClick={() => {
                          setClickIndex(index);
                          setMenuToggle(!menuToggle);
                        }}
                      ></i>
                      {index === clickIndex && menuToggle && (
                        <div ref={optionRef} className="dropDownMain">
                          {" "}
                          <div
                            className="dropdown"
                            onClick={() => handleAddEditor(elem)}
                          >
                            Add to Top Places
                          </div>{" "}
                          <div
                            className="dropdown"
                            onClick={() => navigate("/services-details")}
                          >
                            Manage Service
                          </div>{" "}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="main_ec_body_images">
                        <img
                          onClick={() => navigate(`/services-details/?serviceId=${elem.id}`)}
                          className="img"
                          src={elem.image && elem.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="service_list_bottom">
                      <div className="details">
                        <div>
                          <p className="details_name">{elem.companyName}</p>
                        </div>
                        <div>
                          <div className="show-helping">
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={elem.isActive === 1 ? false : true}
                                onChange={() => handlePlaceToggle(elem, index)}
                              />
                              <span className="slider round"></span>
                              <p className="helping">
                                If toggle is on, it will hide this service
                                provider
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="service_list_rating">
                          <img src={locationIcon} alt="Noo" />
                          <p className="details_text">
                            {elem?.businessAddress}
                          </p>
                        </div>

                        <div className="service_list_rating">
                          <img
                            className="ratingIcon"
                            src={ratingIcon}
                            alt="Noo"
                          />
                          <p className="details_text">Rating {elem?.ratings}</p>
                        </div>

                        <div className="service_list_website">
                          <img src={websiteIcon} alt="Noo" />
                          <p>
                            {elem?.website?.length > 30
                              ? `${elem?.website?.slice(0, 20)}...`
                              : elem?.website}
                          </p>
                        </div>

                        <div className="service_list_website">
                          <img
                            className="ratingIcon"
                            src={phoneIcon}
                            alt="Noo"
                          />
                          <p>{elem?.phone}</p>
                        </div>

                        <div className="service_list_btnSection">
                          <button
                            onClick={() => setEdit(true)}
                            className="editBtn"
                          >
                            {" "}
                            Edit{" "}
                          </button>
                          <button
                            onClick={() => setDeleteService(true)}
                            className="deleteBtn"
                          >
                            {" "}
                            Delete
                          </button>
                          <img
                            onClick={() => navigate(`/services-details/?serviceId=${elem.id}`)}
                            src={forwardIcon}
                            alt="Noo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="error">No Services Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
