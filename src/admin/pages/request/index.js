import React, { useEffect, useState } from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
import RequestsTable from "../../components/tables/requests/allRequests";
import instance from "../../components/api/api";
import CreateCountry from "../../components/popup/CreateCountry/CreateCountry";
import editIcon from "../../assets/images/Edit.png";
import EditCountries from "../../components/popup/EditCountries/EditCountries";
import JOMinstance from "../../../api";

const Index = () => {
  // table fake data
  const tableFakeData = [
    // {
    //   adminApproved: 0,
    //   audioFile: null,
    //   businessAddress: "MRPJ G44 Parit Pinang Seribu Jalan Abdul Rahm",
    //   businessName: "Warung Ketupat Air Tangan Ibu",
    //   categoryId: "1255ce5d-8368-4887-941d-fb18c94213a4",
    //   companyName: "Warung Ketupat Air Tangan Ibu",
    //   coordinates: "1010",
    //   createdAt: "2022-07-14T08:54:24.000Z",
    //   description: "Service options: Dine-in · Takeaway",
    //   email: "warungketupat@gmail.com",
    //   image:
    //     "https://backend.johortourism.my/src/assets/imagedefaults/logo.png",
    //   isActive: 1,
    //   isBookable: 0,
    //   isDeleted: 0,
    //   logo: "https://backend.johortourism.my/src/assets/imagedefaults/cover.png",
    //   name: "Food",
    //   phone: "0136646646",
    //   ratings: 0,
    //   spId: "57245729-bf4a-47b9-9ea4-915f95667559",
    //   subCategoryId: null,
    //   termsAndConditions: null,
    //   tier: null,
    //   website: "www.facebook.com/WarungKetupat/",
    // },
    // {
    //   adminApproved: 0,
    //   audioFile: null,
    //   businessAddress: "MRPJ G44 Parit Pinang Seribu Jalan Abdul Rahm",
    //   businessName: "Warung Ketupat Air Tangan Ibu",
    //   categoryId: "1255ce5d-8368-4887-941d-fb18c94213a4",
    //   companyName: "Warung Ketupat Air Tangan Ibu",
    //   coordinates: "1010",
    //   createdAt: "2022-07-14T08:54:24.000Z",
    //   description: "Service options: Dine-in · Takeaway",
    //   email: "warungketupat@gmail.com",
    //   image:
    //     "https://backend.johortourism.my/src/assets/imagedefaults/logo.png",
    //   isActive: 1,
    //   isBookable: 0,
    //   isDeleted: 0,
    //   logo: "https://backend.johortourism.my/src/assets/imagedefaults/cover.png",
    //   name: "Food",
    //   phone: "0136646646",
    //   ratings: 0,
    //   spId: "57245729-bf4a-47b9-9ea4-915f95667559",
    //   subCategoryId: null,
    //   termsAndConditions: null,
    //   tier: null,
    //   website: "www.facebook.com/WarungKetupat/",
    // },
    // {
    //   adminApproved: 0,
    //   audioFile: null,
    //   businessAddress: "MRPJ G44 Parit Pinang Seribu Jalan Abdul Rahm",
    //   businessName: "Warung Ketupat Air Tangan Ibu",
    //   categoryId: "1255ce5d-8368-4887-941d-fb18c94213a4",
    //   companyName: "Warung Ketupat Air Tangan Ibu",
    //   coordinates: "1010",
    //   createdAt: "2022-07-14T08:54:24.000Z",
    //   description: "Service options: Dine-in · Takeaway",
    //   email: "warungketupat@gmail.com",
    //   image:
    //     "https://backend.johortourism.my/src/assets/imagedefaults/logo.png",
    //   isActive: 1,
    //   isBookable: 0,
    //   isDeleted: 0,
    //   logo: "https://backend.johortourism.my/src/assets/imagedefaults/cover.png",
    //   name: "Food",
    //   phone: "0136646646",
    //   ratings: 0,
    //   spId: "57245729-bf4a-47b9-9ea4-915f95667559",
    //   subCategoryId: null,
    //   termsAndConditions: null,
    //   tier: null,
    //   website: "www.facebook.com/WarungKetupat/",
    // },
    // {
    //   adminApproved: 0,
    //   audioFile: null,
    //   businessAddress: "MRPJ G44 Parit Pinang Seribu Jalan Abdul Rahm",
    //   businessName: "Warung Ketupat Air Tangan Ibu",
    //   categoryId: "1255ce5d-8368-4887-941d-fb18c94213a4",
    //   companyName: "Warung Ketupat Air Tangan Ibu",
    //   coordinates: "1010",
    //   createdAt: "2022-07-14T08:54:24.000Z",
    //   description: "Service options: Dine-in · Takeaway",
    //   email: "warungketupat@gmail.com",
    //   image:
    //     "https://backend.johortourism.my/src/assets/imagedefaults/logo.png",
    //   isActive: 1,
    //   isBookable: 0,
    //   isDeleted: 0,
    //   logo: "https://backend.johortourism.my/src/assets/imagedefaults/cover.png",
    //   name: "Food",
    //   phone: "0136646646",
    //   ratings: 0,
    //   spId: "57245729-bf4a-47b9-9ea4-915f95667559",
    //   subCategoryId: null,
    //   termsAndConditions: null,
    //   tier: null,
    //   website: "www.facebook.com/WarungKetupat/",
    // },
    // {
    //   adminApproved: 0,
    //   audioFile: null,
    //   businessAddress: "MRPJ G44 Parit Pinang Seribu Jalan Abdul Rahm",
    //   businessName: "Warung Ketupat Air Tangan Ibu",
    //   categoryId: "1255ce5d-8368-4887-941d-fb18c94213a4",
    //   companyName: "Warung Ketupat Air Tangan Ibu",
    //   coordinates: "1010",
    //   createdAt: "2022-07-14T08:54:24.000Z",
    //   description: "Service options: Dine-in · Takeaway",
    //   email: "warungketupat@gmail.com",
    //   image:
    //     "https://backend.johortourism.my/src/assets/imagedefaults/logo.png",
    //   isActive: 1,
    //   isBookable: 0,
    //   isDeleted: 0,
    //   logo: "https://backend.johortourism.my/src/assets/imagedefaults/cover.png",
    //   name: "Food",
    //   phone: "0136646646",
    //   ratings: 0,
    //   spId: "57245729-bf4a-47b9-9ea4-915f95667559",
    //   subCategoryId: null,
    //   termsAndConditions: null,
    //   tier: null,
    //   website: "www.facebook.com/WarungKetupat/",
    // },
    // {
    //   adminApproved: 0,
    //   audioFile: null,
    //   businessAddress: "MRPJ G44 Parit Pinang Seribu Jalan Abdul Rahm",
    //   businessName: "Warung Ketupat Air Tangan Ibu",
    //   categoryId: "1255ce5d-8368-4887-941d-fb18c94213a4",
    //   companyName: "Warung Ketupat Air Tangan Ibu",
    //   coordinates: "1010",
    //   createdAt: "2022-07-14T08:54:24.000Z",
    //   description: "Service options: Dine-in · Takeaway",
    //   email: "warungketupat@gmail.com",
    //   image:
    //     "https://backend.johortourism.my/src/assets/imagedefaults/logo.png",
    //   isActive: 1,
    //   isBookable: 0,
    //   isDeleted: 0,
    //   logo: "https://backend.johortourism.my/src/assets/imagedefaults/cover.png",
    //   name: "Food",
    //   phone: "0136646646",
    //   ratings: 0,
    //   spId: "57245729-bf4a-47b9-9ea4-915f95667559",
    //   subCategoryId: null,
    //   termsAndConditions: null,
    //   tier: null,
    //   website: "www.facebook.com/WarungKetupat/",
    // },
    // {
    //   adminApproved: 0,
    //   audioFile: null,
    //   businessAddress: "MRPJ G44 Parit Pinang Seribu Jalan Abdul Rahm",
    //   businessName: "Warung Ketupat Air Tangan Ibu",
    //   categoryId: "1255ce5d-8368-4887-941d-fb18c94213a4",
    //   companyName: "Warung Ketupat Air Tangan Ibu",
    //   coordinates: "1010",
    //   createdAt: "2022-07-14T08:54:24.000Z",
    //   description: "Service options: Dine-in · Takeaway",
    //   email: "warungketupat@gmail.com",
    //   image:
    //     "https://backend.johortourism.my/src/assets/imagedefaults/logo.png",
    //   isActive: 1,
    //   isBookable: 0,
    //   isDeleted: 0,
    //   logo: "https://backend.johortourism.my/src/assets/imagedefaults/cover.png",
    //   name: "Food",
    //   phone: "0136646646",
    //   ratings: 0,
    //   spId: "57245729-bf4a-47b9-9ea4-915f95667559",
    //   subCategoryId: null,
    //   termsAndConditions: null,
    //   tier: null,
    //   website: "www.facebook.com/WarungKetupat/",
    // },
  ];

  const [countriesArray, setCountriesArray] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tableData, setTableData] = useState(tableFakeData);
  const [which, setWhich] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [createCountry, setCreateCountry] = useState(false);
  const [editCountries, setEditCountries] = useState(false);
  const [countryData, setCountryData] = useState([]);

  const getCountryList = async () => {
    // await JOMinstance.post("admin/getAllCountry").then((res) => {
    //   console.log(res);
    //   // setCategories(res.data.data.successResult);
    // });

    const res = await JOMinstance.post("admin/getAllCountry");
    setCountriesArray(res.data.data.successResult);
  };

  const handleEditCountry = async (country) => {
    setEditCountries(true);
    setCountryData(country);
    console.log("countryData ==> ", country);
  };

  // console.log(countriesArray);

  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <div>
      {createCountry && (
        <CreateCountry
          setCountriesArray={setCountriesArray}
          setCreateCountry={setCreateCountry}
          countriesArray={countriesArray}
          getCountryList={getCountryList}
        />
      )}
      {editCountries && <EditCountries setEditCountries={setEditCountries} countryData={countryData} getCountryList={getCountryList} />}
      <div className="main_layout">
        <Leftbar index={3} />
        <div className="right_bar">
          <div className="requests_heading">
            <p>Countries</p>
            <div>
              <input
                type="text"
                placeholder="Search Business Name"
                className="requests_search"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <select>
                <option value="all">All</option>
                {categories &&
                  categories.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
              <button
                onClick={() => setCreateCountry(true)}
                className="btn-category white"
              >
                Create Country
              </button>
            </div>
          </div>
          <Cards />
          <div className="requests">
            <div className="requests_body">
              <div className="heading">
                <p>List of Countries</p>
              </div>
              <div className="gridbox">
                {countriesArray?.map((country, index) => (
                  <div className="countryCard" key={index}>
                    <div className="editLogo">
                      <img
                        onClick={() => handleEditCountry(country)}
                        src={editIcon}
                      />
                    </div>
                    <div className="data">
                      <img src={country.image} />
                      <h5>{country.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
              {/* <RequestsTable searchValue={searchValue} tableData={tableData} which={which}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
