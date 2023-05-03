import React, {useState, useEffect} from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import editIcon from "../../assets/images/Edit.png";
import EditCategory from "../popup/services/editCateogry";
import instance from "../api/api";
import { toast } from "react-toastify";
import PendingTable from "../tables/pending-users/pendingTable";
// import ferries from "../../../admin/assets/images/ferries.png";
import flight from "../../../admin/assets/images/flight.png";
import fun from "../../../admin/assets/images/fun.png"
import health from "../../../admin/assets/images/health.png";
import hotel from "../../../admin/assets/images/hotel.png";
import market from "../../../admin/assets/images/market.png";
import buses from "../../../admin/assets/images/buses.png";
import train from "../../../admin/assets/images/train.png";

import ferries from "../../assets/images/JOM-Web-Aseets-53.png";




const sliderFakeData = [
  {
    name: "Ferries",
    img: ferries,
    isActive : 0
  },
  {
    name: "Ferries",
    img: ferries,
    isActive : 0
  },
  {
  name: "Fun",
  img: ferries,  
  isActive : 0
  },
  {
  name: "Health",
  img: ferries,  
  isActive : 0
  },
  {
  name: "Hotel",
  img: ferries,
  isActive : 0
  },
  {
  name: "Market",
  img: ferries,
  isActive : 0
  },
  {
  name: "Buses",
  img: buses,
  isActive : 0
  },
  {
  name: "Train",
  img: ferries,  
  isActive : 0
  
  }
]


const tableFakeData = [
  {
  createdAt: "20/20/2020",
  businessName: "Al Mirhaj Tower",
  name: "John",
  companyName: "Al Mirhaj Tower",
  email: "john@gmail.com",
  businessAddress : "New York"
  },
  {
    createdAt: "20/20/2020",
    businessName: "Al Mirhaj Tower",
    name: "John",
    companyName: "Al Mirhaj Tower",
    email: "john@gmail.com",
    businessAddress : "New York"
  },
  {
    createdAt: "20/20/2020",
    businessName: "Al Mirhaj Tower",
    name: "John",
    companyName: "Al Mirhaj Tower",
    email: "john@gmail.com",
    businessAddress : "New York"
  },
  {
    createdAt: "20/20/2020",
    businessName: "Al Mirhaj Tower",
    name: "John",
    companyName: "Al Mirhaj Tower",
    email: "john@gmail.com",
    businessAddress : "New York"
  },
  {
    createdAt: "20/20/2020",
    businessName: "Al Mirhaj Tower",
    name: "John",
    companyName: "Al Mirhaj Tower",
    email: "john@gmail.com",
    businessAddress : "New York"
  },
  {
    createdAt: "20/20/2020",
    businessName: "Al Mirhaj Tower",
    name: "John",
    companyName: "Al Mirhaj Tower",
    email: "john@gmail.com",
    businessAddress : "New York"
  },
  {
    createdAt: "20/20/2020",
    businessName: "Al Mirhaj Tower",
    name: "John",
    companyName: "Al Mirhaj Tower",
    email: "john@gmail.com",
    businessAddress : "New York"
  },
  {
    createdAt: "20/20/2020",
    businessName: "Al Mirhaj Tower",
    name: "John",
    companyName: "Al Mirhaj Tower",
    email: "john@gmail.com",
    businessAddress : "New York"
  },
  {
    createdAt: "20/20/2020",
    businessName: "Al Mirhaj Tower",
    name: "John",
    companyName: "Al Mirhaj Tower",
    email: "john@gmail.com",
    businessAddress : "New York"
  },
]

const Index = ({ iconStatus }) => {

    toast.configure();


    const [editPopup, setEditPopup] = useState(false)
    const [categoryObj, setCategoryObj] = useState({})
    const [categories, setCategories] = useState(sliderFakeData)
    const [tableData, setTableData] = useState(tableFakeData)
    const [clickIndex, setClickIndex] = useState("All") 

    const getServiceTable = (id) => {        
          
    }
    const handleToggle = (data, index) => {
      if (data?.isActive === 0) {
          categories[index].isActive = 1
      } else {
        data.isActive = 0
        }
        }




  return (
    <div>
       { editPopup && <EditCategory  editPopup={editPopup} setEditPopup={setEditPopup} categoryObj={categoryObj}/> } 
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
            <SwiperSlide>
              <div
                className={iconStatus === "on" ? "big_img" : "clients_image"}
                style={{ textAlign: "center" }}
              >
                <div className="clients_whiteBox"></div>
                {/* <img src={"addImg"} alt="" /> */}
                {iconStatus === "on" ? (
                  <div>
                    {/* <div><img className="clients_edit" src={editIcon} alt='' onClick={() => { setEditPopup(true)}} /></div> */}
                    <div className="clients_delete">
                      {/* <label className="switch">
                            <input type="checkbox" checked={elem.isActive === 1 ? false : true} />
                            {/* <span className="slider round" onClick={() => handleToggle(elem)}></span> */}
                      {/* <p className="helping">If toggle is on, it will hide this category</p> */}
                      {/* </label> } */}
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
            {categories &&
              categories.map((elem, index) => (
                <SwiperSlide>
                  <div
                    className={
                      iconStatus === "on" ? "clients_image" : "clients_image"
                    }
                    style={{ textAlign: "center" }}
                  >
                    <img src={elem.img} alt="" />
                    {iconStatus === "on" ? (
                      <div>
                        <div><img className="clients_edit" src={editIcon} alt='' onClick={() =>{ setEditPopup(true);}}/></div>
                    <div  className="clients_delete">
                        <label className="switch">
                            <input type="checkbox" checked={elem.isActive === 0 ? false : true }/>
                            <span className="slider round" onClick={() => handleToggle(elem, index)}></span>
                            <p className="helping">If toggle is on, it will hide this category</p>
                        </label>
                    </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <p className={clickIndex === index ? "clients_name1 clients_nameActive" : "clients_name1" } onClick={() => {getServiceTable(elem.id); setClickIndex(index)}}>{elem.name}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <PendingTable getServiceTable={getServiceTable} tableData={tableData} />
    </div>
  );
};

export default Index;
