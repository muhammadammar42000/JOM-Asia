import React, { useState, useEffect } from "react";
import star from "../../assets/images/johor-admin-assets-12.png";
import locationIcon from "../../assets/images/johor-admin-assets-11.png";
import instance from "../../components/api/api";
import { toast } from "react-toastify";
import image from "../../../admin/assets/images/johor-admin-assets-27.png";
import JOMinstance from "../../../api";

const Index = ({ homeView }) => {
  const editorChoiceFakeData = [
    // {
    //   businessAddress: "Persiaran Pantai, Desaru Coast, 81930 Bandar ",
    //   businessName: "Anantara Desaru Coast Resort & Villas",
    //   companyName: "Anantara Desaru Coast Resort & Villas",
    //   editorChoiceId: "092ec0e6-fa53-4c3c-85f1-64e8eaae53b8",
    //   image: image,
    //   phone: "12345678",
    //   placeId: null,
    //   ratings: 0,
    //   serviceProviderId: "123455",
    // },
    // {
    //   businessAddress: "Persiaran Pantai, Desaru Coast, 81930 Bandar ",
    //   businessName: "Anantara Desaru Coast Resort & Villas",
    //   companyName: "Anantara Desaru Coast Resort & Villas",
    //   editorChoiceId: "092ec0e6-fa53-4c3c-85f1-64e8eaae53b8",
    //   image: image,
    //   phone: "12345678",
    //   placeId: null,
    //   ratings: 0,
    //   serviceProviderId: "123455",
    // },
    // {
    //   businessAddress: "Persiaran Pantai, Desaru Coast, 81930 Bandar ",
    //   businessName: "Anantara Desaru Coast Resort & Villas",
    //   companyName: "Anantara Desaru Coast Resort & Villas",
    //   editorChoiceId: "092ec0e6-fa53-4c3c-85f1-64e8eaae53b8",
    //   image: image,
    //   phone: "12345678",
    //   placeId: null,
    //   ratings: 0,
    //   serviceProviderId: "123455",
    // },
    // {
    //   businessAddress: "Persiaran Pantai, Desaru Coast, 81930 Bandar ",
    //   businessName: "Anantara Desaru Coast Resort & Villas",
    //   companyName: "Anantara Desaru Coast Resort & Villas",
    //   editorChoiceId: "092ec0e6-fa53-4c3c-85f1-64e8eaae53b8",
    //   image: image,
    //   phone: "12345678",
    //   placeId: null,
    //   ratings: 0,
    //   serviceProviderId: "123455",
    // },
  ];

  const [ecSearch, setEcSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const [editorList, setEditorList] = useState(editorChoiceFakeData);
  toast.configure();

  const getEditorChoices = () => {
    JOMinstance.post("admin/getEditorsChoice").then((res) => {
      setEditorList(res.data.data.successResult);
    });
  };

  const handleDeleteEditor = (id) => {
    const body = {
      editorChoiceId: id.editorChoiceId,
    };
    JOMinstance.post("admin/deleteFromEditorChoice", body).then((res) => {
      toast.success("Successfully Removed", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      getEditorChoices();
    });
  };

  useEffect(() => {
    getEditorChoices();
  }, []);

  useEffect(() => {
    const searchtableData = ecSearch
      ? editorList?.filter((item) =>
          item?.businessName?.toLowerCase().includes(ecSearch.toLowerCase())
        )
      : editorList;
    setFilterData(searchtableData);
  }, [ecSearch, getEditorChoices]);

  return (
    <div className="ec">
      {homeView === "true" ? (
        <div className="ec_heading">
          <div>Top Places</div>
          
        </div>
      ) : (
        ""
      )}
      <div className="ec_body" id="style-3">
        {editorList ? (
          editorList.map((item, ind) => (
            <div className="ec_body_images">
              <div className="delete-icon">
                <i
                  onClick={() => handleDeleteEditor(item)}
                  className="fas fa-trash-alt"
                ></i>
              </div>
              <img className="main-img" src={item.image} alt="" />
              <div className="ec_body_icon">
                <p>{item.rating ? item.rating : 0}</p>
                <img src={star} alt="" />
              </div>
              <div className="ec_body_text">
                <div className="name">{item.businessName}</div>
                <div className="green">
                  <img className="location" src={locationIcon} alt="" />
                  <p>{item.businessAddress}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Index;
