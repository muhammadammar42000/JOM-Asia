import React, {useState, useEffect} from "react";
import Leftbar from "../../components/leftbar";
import Data from "../service-provider/data";
import Cards from "../../components/cards";
import HomeSwiper from "../../components/home-swiper";
import Category from "../../components/popup/services/category";
import AddPost from "../../components/popup/services/addPost";
import instance from "../../components/api/api";
import SelectAttractionList from "../../components/popup/services/addPostBtn/selectAttractionList";
import backgroundImg from "../../assets/images/img2.png";
import ferries from "../../assets/images/ferries.png";

const ServiceProviderNew = () => {
  
  // sub categories fake data
  const CategoriesFakeData = [
    {
      adminApproved :  1,
      audioFile : "",
      businessAddress : "Taman Mutiara Rini Skudai Johor",
      businessName : "Leva Leur Cafe",
      categoryId : "1255ce5d-8368-4887-941d-fb18c94213a4",
      categoryImage : ferries,
      categoryName : "Food",
      companyName :  "Leva Leur Cafe",
      coordinates : "1010",
      createdAt :  "2022-06-21T03:29:14.000Z",
      description : "1st Makan Lambak At Johor Bahru Halal Seafood Restaurant In Johor Bahru, With #jommakanlambak style. Serve unique experience seafood that just lambak on your table.",
      email : "LevaLeurCafe@gmail.com",
      id  : "01bd3f14-de20-46ab-b7cc-9a9fe1a20f6e",
    image : backgroundImg,
    isActive : 1,
    isBookable :  0,
    isDeleted : 0,
    logo : "https://backend.johortourism.my/src/assets/image/9WrjyMeq9LD03.jpg",
    password : "123456",
    phone :  "073862622",
    ratings :  3.5,
    subCategoryId : null,
    termsAndConditions : "-",
    tier :  null,
    updatedAt :  null,
    website :  "www.facebook.com/JomMakanLambak"
      },
      {
        adminApproved :  1,
        audioFile : "",
        businessAddress : "Taman Mutiara Rini Skudai Johor",
        businessName : "Leva Leur Cafe",
        categoryId : "1255ce5d-8368-4887-941d-fb18c94213a4",
        categoryImage : ferries,
        categoryName : "Food",
        companyName :  "Leva Leur Cafe",
        coordinates : "1010",
        createdAt :  "2022-06-21T03:29:14.000Z",
        description : "1st Makan Lambak At Johor Bahru Halal Seafood Restaurant In Johor Bahru, With #jommakanlambak style. Serve unique experience seafood that just lambak on your table.",
        email : "LevaLeurCafe@gmail.com",
        id  : "01bd3f14-de20-46ab-b7cc-9a9fe1a20f6e",
      image : backgroundImg,
      isActive : 1,
      isBookable :  0,
      isDeleted : 0,
      logo : "https://backend.johortourism.my/src/assets/image/9WrjyMeq9LD03.jpg",
      password : "123456",
      phone :  "073862622",
      ratings :  3.5,
      subCategoryId : null,
      termsAndConditions : "-",
      tier :  null,
      updatedAt :  null,
      website :  "www.facebook.com/JomMakanLambak"
      },
      {
        adminApproved :  1,
        audioFile : "",
        businessAddress : "Taman Mutiara Rini Skudai Johor",
        businessName : "Leva Leur Cafe",
        categoryId : "1255ce5d-8368-4887-941d-fb18c94213a4",
        categoryImage : ferries,
        categoryName : "Food",
        companyName :  "Leva Leur Cafe",
        coordinates : "1010",
        createdAt :  "2022-06-21T03:29:14.000Z",
        description : "1st Makan Lambak At Johor Bahru Halal Seafood Restaurant In Johor Bahru, With #jommakanlambak style. Serve unique experience seafood that just lambak on your table.",
        email : "LevaLeurCafe@gmail.com",
        id  : "01bd3f14-de20-46ab-b7cc-9a9fe1a20f6e",
      image : backgroundImg,
      isActive : 1,
      isBookable :  0,
      isDeleted : 0,
      logo : "https://backend.johortourism.my/src/assets/image/9WrjyMeq9LD03.jpg",
      password : "123456",
      phone :  "073862622",
      ratings :  3.5,
      subCategoryId : null,
      termsAndConditions : "-",
      tier :  null,
      updatedAt :  null,
      website :  "www.facebook.com/JomMakanLambak"
      },
      {
        adminApproved :  1,
        audioFile : "",
        businessAddress : "Taman Mutiara Rini Skudai Johor",
        businessName : "Leva Leur Cafe",
        categoryId : "1255ce5d-8368-4887-941d-fb18c94213a4",
        categoryImage : ferries,
        categoryName : "Food",
        companyName :  "Leva Leur Cafe",
        coordinates : "1010",
        createdAt :  "2022-06-21T03:29:14.000Z",
        description : "1st Makan Lambak At Johor Bahru Halal Seafood Restaurant In Johor Bahru, With #jommakanlambak style. Serve unique experience seafood that just lambak on your table.",
        email : "LevaLeurCafe@gmail.com",
        id  : "01bd3f14-de20-46ab-b7cc-9a9fe1a20f6e",
      image : backgroundImg,
      isActive : 1,
      isBookable :  0,
      isDeleted : 0,
      logo : "https://backend.johortourism.my/src/assets/image/9WrjyMeq9LD03.jpg",
      password : "123456",
      phone :  "073862622",
      ratings :  3.5,
      subCategoryId : null,
      termsAndConditions : "-",
      tier :  null,
      updatedAt :  null,
      website :  "www.facebook.com/JomMakanLambak"
      },
      {
        adminApproved :  1,
        audioFile : "",
        businessAddress : "Taman Mutiara Rini Skudai Johor",
        businessName : "Leva Leur Cafe",
        categoryId : "1255ce5d-8368-4887-941d-fb18c94213a4",
        categoryImage : ferries,
        categoryName : "Food",
        companyName :  "Leva Leur Cafe",
        coordinates : "1010",
        createdAt :  "2022-06-21T03:29:14.000Z",
        description : "1st Makan Lambak At Johor Bahru Halal Seafood Restaurant In Johor Bahru, With #jommakanlambak style. Serve unique experience seafood that just lambak on your table.",
        email : "LevaLeurCafe@gmail.com",
        id  : "01bd3f14-de20-46ab-b7cc-9a9fe1a20f6e",
      image : backgroundImg,
      isActive : 1,
      isBookable :  0,
      isDeleted : 0,
      logo : "https://backend.johortourism.my/src/assets/image/9WrjyMeq9LD03.jpg",
      password : "123456",
      phone :  "073862622",
      ratings :  3.5,
      subCategoryId : null,
      termsAndConditions : "-",
      tier :  null,
      updatedAt :  null,
      website :  "www.facebook.com/JomMakanLambak"
      }
  ]

  const [categoryPopup, setCategoryPopup] = useState(false)
  const [subCategories, setSubCategories] = useState(CategoriesFakeData)
  const [attractionList, setAttractionList] = useState(false)
  const [addPostPopup, setAddPostPopup] = useState(false)
  const [searchValue, setSearchValue] = useState("")



  return (
    <div>
       { categoryPopup && <Category setCategoryPopup={setCategoryPopup} categoryPopup={categoryPopup}/> } 
        <AddPost setAddPostPopup={setAddPostPopup} addPostPopup={addPostPopup}/>
        <SelectAttractionList setAttractionList={setAttractionList} attractionList={attractionList} />
        
      <div className="main_layout">
        <Leftbar index={5} />
        <div className="right_bar">
        <div className="main_notifications_heading">
                <div>Services Provider</div>
                <div>
                    {/* <input className="noti_input" type='text' placeholder='Search Business Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/> */}
                    {/* <button className="btn-category" onClick={() => setCategoryPopup(true)}>Add Service</button> */}
                    <select className="selector-service">
                    <option value="">All</option>
                    </select>
                    {/* <button className="btn-post" onClick={() => setAddPostPopup(true)}>Add Post</button> */}
                </div>
            </div>
          <Cards />
          <div className="main_services">
            {/* <div className="main_notifications_heading">
                <div>Services Provider</div>
                <div>
                    <input className="noti_input" type='text' placeholder='Search Business Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                    <button className="btn-category" onClick={() => setCategoryPopup(true)}>Add Category</button>
                    <button className="btn-post" onClick={() => setAddPostPopup(true)}>Add Post</button>
                </div>
            </div> */}
            {/* <div className="main_services_join">

              <HomeSwiper 
                iconStatus="on" />

            </div> */}
            <Data searchValue={searchValue}  subCategories={subCategories} status="on" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderNew;
