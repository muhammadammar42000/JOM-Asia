import React, { useState, useEffect } from "react";
import Leftbar from "../../components/leftbar";
import Data from "../../pages/service-provider/data";
import Cards from "../../components/cards";
import HomeSwiper from "../../components/home-swiper";
import AddService from "../../components/popup/services/category";
import AddPost from "../../components/popup/services/addPost";
import SelectAttractionList from "../../components/popup/services/addPostBtn/selectAttractionList";
import AddCategory from "../../components/popup/addCategory/addCategory";
import backgroundImg from "../../assets/images/img2.png";
import ferries from "../../assets/images/ferries.png";
import ArrangeServices from "../../components/popup/arrangeServices/ArrangeServices";
import JOMinstance from "../../../api";
import { useLocation } from "react-router-dom";

const Index = () => {
  const [addService, setAddService] = useState(false);
  const [attractionList, setAttractionList] = useState(false);
  const [addPostPopup, setAddPostPopup] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [addCategory, setAddCategory] = useState(false);
  const [arrangeServices, setArrangeServices] = useState(false);
  const location = useLocation();
  const state = location.state;

  const [subCategories, setSubCategories] = useState([]);

  const getAllSubCatgeories = (name, id) => {
    const body = {
      categoryId: id,
    };
    JOMinstance.post("admin/getServiceProvider", body).then((res) => {
      setSubCategories(res.data.data.successResult);
    });
  };

  const handleAddService = () => {
    setAddService(true);
    getAllSubCatgeories();
  };

  const handleArrangeServices = () => {
    setArrangeServices(true);
  };

  useEffect(() => {
    if (addService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [addService]);

  useEffect(() => {
    if (addCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [addCategory]);

  useEffect(() => {
    if (addService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [addService]);

  useEffect(() => {
    if (state) {
      const body = {
        categoryId: state.categoryId,
      };
      JOMinstance.post("admin/getServiceProvider", body).then((res) => {
        setSubCategories(res.data.data.successResult);
      });
    }
  }, [state?.categoryId]);


  return (
    <div>
      {addService && (
        <AddService setAddService={setAddService} addService={addService} />
      )}
      <AddPost setAddPostPopup={setAddPostPopup} addPostPopup={addPostPopup} />
      <SelectAttractionList
        setAttractionList={setAttractionList}
        attractionList={attractionList}
      />
      {addCategory && (
        <AddCategory
          addCategory={addCategory}
          setAddCategory={setAddCategory}
        />
      )}
      {arrangeServices && (
        <ArrangeServices
          getAllSubCatgeories={getAllSubCatgeories}
          subCategories={subCategories}
          setSubCategories={setSubCategories}
          setArrangeServices={setArrangeServices}
        />
      )}
      <div className="main_layout">
        <Leftbar index={4} />
        <div className="right_bar">
          <div className="main_notifications_heading">
            <div>Services</div>
            <div>
              <input
                className="noti_input"
                type="text"
                placeholder="Search Business Name"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                className="btn-category"
                onClick={() => setAddCategory(true)}
              >
                Add Category
              </button>
              <button
                className="btn-category white"
                onClick={() => handleAddService()}
              >
                Add Service
              </button>

              <button
                onClick={() => handleArrangeServices()}
                className="btn-category white"
              >
                Arrange Services
              </button>
              {/* <button className="btn-post" onClick={() => setAddPostPopup(true)}>Add Post</button> */}
            </div>
          </div>
          <Cards />
          <div className="main_services">
            <div className="main_services_join">
              <HomeSwiper
                getAllSubCatgeories={getAllSubCatgeories}
                id={state?.categoryId}
                iconStatus="on"
              />
            </div>
            <Data
              searchValue={searchValue}
              getAllSubCatgeories={getAllSubCatgeories}
              subCategories={subCategories}
              status="on"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
