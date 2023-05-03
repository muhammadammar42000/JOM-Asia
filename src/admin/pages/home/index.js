import React, { useEffect, useState } from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
import HomeScreenSwiper from "../../components/home-swiper/homescreen";
import AddPost from "../../components/popup/services/addPost";
import Editor from "../../components/popup/services/addPostBtn/editorPopup";
import NotifcationCard from "../../components/cards/NotifcationCard";
import EditorChoice from "../editor-choice/EditorChoice";
import EditProfileJES from "../../components/popup/EditProfileJES/EditProfileJES";
import DisclaimerJES from "../../components/popup/DisclaimerJES/DisclaimerJES";
import EditServices from "../../components/popup/EditServices/EditServices";

//Ammar Work
import gastronomy from "../../assets/sliderIcons/Icon-2-01.png";
import attraction from "../../assets/sliderIcons/Icon-2-02.png";
import education from "../../assets/sliderIcons/Icon-2-03.png";
import recreation from "../../assets/sliderIcons/Icon-2-04.png";
import shopping from "../../assets/sliderIcons/Icon-2-05.png";
import museum from "../../assets/sliderIcons/Icon-2-06.png";
import accomodation from "../../assets/sliderIcons/Icon-2-07.png";
import golf from "../../assets/sliderIcons/Icon-2-08.png";
import healthCare from "../../assets/sliderIcons/Icon-2-09.png";
import hotel from "../../assets/sliderIcons/Icon-2-10.png";
import marketPlace from "../../assets/sliderIcons/Icon-2-11.png";
import petron from "../../assets/sliderIcons/Icon-2-12.png";
import flight from "../../assets/sliderIcons/Icon-2-13.png";
import ferries from "../../assets/sliderIcons/Icon-2-14.png";
import buses from "../../assets/sliderIcons/Icon-2-15.png";
import editIcon from "../../assets/images/JOM-Portal-Assets-35.png";
import JOMinstance from "../../../api";
import { toast } from "react-toastify";

const Index = () => {
  const [addPostPopup, setAddPostPopup] = useState(false);
  const [PopUpEditor, setPopUpEditor] = useState(false);
  const [serviceLength, setServiceLength] = useState("");
  const [notiLength, setNotiLength] = useState("");

  const [serviceId, setServiceId] = useState({});

  // const [edit , setEdit] = useState(true)

  const countriesArray = [
    {
      name: "Vietnam",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png",
      numberOfServices: 35,
    },
    {
      name: "Thailand",
      imgSrc:
        "https://cdn.britannica.com/38/4038-004-111388C2/Flag-Thailand.jpg",

      numberOfServices: 12,
    },
    {
      name: "Indonesia",
      imgSrc:
        "https://cdn.britannica.com/48/1648-004-A33B72D8/Flag-Indonesia.jpg",
      numberOfServices: 18,
    },
    {
      name: "Malaysia",
      imgSrc:
        "https://cdn.britannica.com/31/4031-004-82B0F3A9/Flag-Malaysia.jpg",
      numberOfServices: 15,
    },
    {
      name: "Singapore",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png",
      numberOfServices: 25,
    },
    {
      name: "Vietnam",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png",
      numberOfServices: 35,
    },
    {
      name: "Thailand",
      imgSrc:
        "https://cdn.britannica.com/38/4038-004-111388C2/Flag-Thailand.jpg",

      numberOfServices: 12,
    },
    {
      name: "Indonesia",
      imgSrc:
        "https://cdn.britannica.com/48/1648-004-A33B72D8/Flag-Indonesia.jpg",
      numberOfServices: 18,
    },
  ];

  const [editServices, setEditServices] = useState(false);

  const [Allservices, setAllservices] = useState([]);
  const [stateUpdate, setStateUpdate] = useState(false);
  const [sliderData, setSliderData] = useState([]);

  const getServices = async () => {
    try {
      const services = await JOMinstance.post("admin/getAdminCategories");
      setAllservices(services?.data?.data?.successResult);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = (data, index) => {
    console.log(data);
    const body = {
      categoryId: data.id,
      status: Allservices[index].isActive === 1 ? 0 : 1,
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
      Allservices[index].isActive = 0;
      setStateUpdate(!stateUpdate);
    } else {
      Allservices[index].isActive = 1;
      setStateUpdate(!stateUpdate);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      {editServices && (
        <EditServices serviceId={serviceId} getServices={getServices} setEditServices={setEditServices} />
      )}

      <AddPost setAddPostPopup={setAddPostPopup} addPostPopup={addPostPopup} />
      <Editor setPopUpEditor={setPopUpEditor} PopUpEditor={PopUpEditor} />
      {/* {edit && <DisclaimerJES />} */}

      {/* <TopBar/> */}
      <div className="main_layout">
        <Leftbar index={1} />
        <div className="right_bar">
          <div className="main_notifications_heading">
            <div>Home</div>
          </div>
          <Cards setServiceLength={setServiceLength} />

          {/* Service and Notifications */}
          <div className="home">
            <div className="home_services">
              <div className="home_services_heading">
                <div>Services</div>
                <div className="bullet">
                  <p className="number_bullet">{Allservices.length}</p>
                  {/* <button className="add" onClick={() => setAddPostPopup(true)}>Add Post</button> */}
                </div>
              </div>
              <div className="home_services_body" id="style-3">
                <div className="gridBox">
                  {Allservices?.map((service, i) => (
                    <div className="box" key={i}>
                      <div className="edit-toggle">
                        <div>
                          <label className="switch">
                            <input
                              type="checkbox"
                              checked={service.isActive === 1 ? false : true}
                              onClick={() => handleToggle(service, i)}
                            />
                            <span className="slider round"></span>
                          </label>
                        </div>
                        <div className="editIcon">
                          <img
                            onClick={() => {
                              setEditServices(true);
                              setServiceId(service);
                            }}
                            src={editIcon}
                          />
                        </div>
                      </div>
                      <div className="data">
                        <img src={gastronomy} />
                        <p>{service.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <HomeScreenSwiper /> */}
                {/* <PendingTable /> */}
              </div>
            </div>
            <div className="home_notifications">
              <div className="home_notifications_heading">
                <span>Countries</span>
                <span className="number_bullet">0</span>
              </div>
              <div className="home_notifications_body" id="style-3">
                {/* <NotifcationCard
                  setNotiLength={setNotiLength}
                  heading="Request for services"
                /> */}

                {countriesArray.map((country) => (
                  <div className="countryCard">
                    <div className="image">
                      <img src={country.imgSrc} />
                    </div>
                    <div className="data">
                      <h5>{country.name}</h5>
                      <h6>
                        {" "}
                        <span>Services :</span> {country.numberOfServices}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* // Top Places     */}
          <EditorChoice homeView={"true"} />
        </div>
      </div>
    </div>
  );
};

export default Index;
