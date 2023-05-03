import React, { useState, useEffect } from "react";
import qr from "../../assets/images/Untitled-2-18.png";
import QRPopup from "../../components/popup/qr/qr";
import { CustomHeader, CustomPagination } from "../custom-pagination";
import DeleteQR from "../popup/deleteQR";

const MapCards = ({ qrList, getQrList, mapSearch }) => {
  const [qrPopup, setQRpopup] = useState(false);
  const [qrDel, setQRDel] = useState(false);
  const [qrCode, setQRcode] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [loader, setLoader] = useState(true);

  // Pagination
  const [currentItems, setCurrentItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Pagination
  // useEffect(() => {
  // const offset = currentPage * rowsPerPage
  // setCurrentItems(filterData.slice(offset, parseInt(offset) + parseInt(rowsPerPage)))
  // }, [currentPage, rowsPerPage, getQrList, filterData])

  // useEffect(() => {
  //     const searchtableData = mapSearch ? qrList?.filter(item => item?.name?.toLowerCase().includes(mapSearch.toLowerCase())) : qrList
  //     setFilterData(searchtableData)

  //     }, [mapSearch, getQrList, rowsPerPage])

  useEffect(() => {
    setFilterData(qrList);
    const offset = currentPage * rowsPerPage;
    const data = qrList?.slice(
      offset,
      parseInt(offset) + parseInt(rowsPerPage)
    );
    const filter = mapSearch
      ? data.filter((item) =>
          item?.name?.toLowerCase().includes(mapSearch.toLowerCase())
        )
      : data;
    setCurrentItems(filter);
    setLoader(false);
  }, [mapSearch, getQrList, currentPage, rowsPerPage]);

  return (
    <div>
      <div className="right_body" id="style-3">
        {loader && (
          <div className="loaderSmall">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        <QRPopup qrPopup={qrPopup} setQRpopup={setQRpopup} qrCode={qrCode} />
        <DeleteQR
          id={qrCode}
          setQRDel={setQRDel}
          qrDel={qrDel}
          getQrList={getQrList}
        />
        {currentItems &&
          currentItems.map((item, index) => (
            <div className="right_body_cards">
              <div className="single_cards">
                <div className="single_cards_top">
                  <div className="leftText">
                    <p className="leftText_scan">
                      Scan to Earn <span>{item.points}</span> Points
                    </p>
                    <p className="leftText_name">{item.name}</p>
                    <p className="green">
                      {item.address ? item.address.substring(0, 40) : ""}
                      <span className="completeAddress">
                        {item?.address?.substring(40, item.address?.length)}
                      </span>
                    </p>
                  </div>
                  <div className="rightQr">
                    <img className="img_qr" src={qr} alt="" />
                    {/* <p onClick={() => {setQRcode(item.code); setQRpopup(true)}}>Click to View</p> */}
                  </div>
                  {/* <div className="bottom_img">
                                    <div className="img_text">
                                    <p>{item.name}</p>
                                    <p className="green">{item.address}</p>
                                    </div>
                                </div> */}
                </div>
                <div className="leftText_button">
                  <button
                    className="btndel"
                    onClick={() => {
                      setQRcode(item.id);
                      setQRDel(true);
                    }}
                  >
                    Delete QR
                  </button>
                  <button
                    className="btnview"
                    onClick={() => {
                      setQRcode(item);
                      setQRpopup(true);
                    }}
                  >
                    View QR
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="myPagination">
        <CustomHeader
          filterData={filterData}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          setCurrentPage={setCurrentPage}
        />
        <CustomPagination
          filterData={filterData}
          rowsPerPage={rowsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

{
  /* <img className="img_body" src={item.image} alt=''/> */
}
export default MapCards;
