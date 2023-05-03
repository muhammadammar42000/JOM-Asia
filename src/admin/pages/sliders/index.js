import React, { useState, useEffect } from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
import AddSlider from "../../components/popup/sliders/AddSlider";
import instance from "../../components/api/api";
import backgroundImg from "../../assets/images/img2.png";
import JOMinstance from "../../../api";
import { toast } from "react-toastify";

const Index = () => {
  // slider fake data

  const [addSlider, setAddSlider] = useState(false);
  const [allSliders, setAllSliders] = useState([]);

  const getSliderImages = async () => {
    const response = await JOMinstance.post("admin/getSlider");
    setAllSliders(response.data.data.successResult);
  };

  const handleDeleteSlider = async (id) => {
    // instance.post("admin/deleteSlider", {id}).then((res) => {
    //     getSliders()
    // })
    const body = {
      id: id,
    };

    try {
      await JOMinstance.post("admin/deleteSlider", body);
      getSliderImages();

      toast.success("Slider Deleted successfully", {
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

  useEffect(() => {
    getSliderImages();
  }, []);

  return (
    <div>
      {addSlider && (
        <AddSlider
          setAddSlider={setAddSlider}
          addSlider={addSlider}
          getSliderImages={getSliderImages}
        />
      )}

      <div className="main_layout">
        <Leftbar index={8} />
        <div className="right_bar">
          <div className="sliders_heading">
            <div>Sliders</div>
            <button className="sliders_btn" onClick={() => setAddSlider(true)}>
              Add Slider
            </button>
          </div>
          <Cards />
          <div className="sliders">
            <div className="sliders_body">
              {allSliders &&
                allSliders?.map((item, ind) => (
                  <div className="sliders_items" key={ind}>
                    <img src={item.imageUrl} alt="" />
                    <i
                      onClick={() => handleDeleteSlider(item?.id)}
                      className="fas fa-trash-alt"
                    ></i>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
