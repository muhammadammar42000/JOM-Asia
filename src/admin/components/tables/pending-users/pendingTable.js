import React, { useState, useEffect } from "react";
import Pending from "../../popup/pending/pending";
import Accept from "../../popup/status/accept";
import Reject from "../../popup/status/reject";
import instance from "../../api/api";

const PendingTable = ({tableData, getServiceTable}) => {

  const [pendingPopup, setPendingPopup] = useState(false);
  const [acceptPopup, setAcceptPopup] = useState(false);
  const [objToSend, setObjToSend] = useState({});
  const [popuptype, setPopupType] = useState("");
  

  return (
    <div className="pending_table">
        {pendingPopup && <Pending objToSend={objToSend} setPendingPopup={setPendingPopup} /> }
        <Accept getServiceTable={getServiceTable} setAcceptPopup={setAcceptPopup} acceptPopup={acceptPopup} popuptype={popuptype} objToSend={objToSend}/>

        {
            tableData.length > 0 ? 
            <table>
            <tr className="pending_table_header">
              <th>Date</th>
              <th>Business Name</th>
              <th>Service Type</th>
              <th>Company Name</th>
              <th>Email</th>
              {/* <th>Contact No</th> */}
              <th>Location</th>
              <th>Action</th>
            </tr>
            {
                tableData.length !== 0 && tableData?.map((elem, index) => (
                    <tr className="pending_table_rows">
                    <td>{elem?.createdAt.substr(0,10)}</td>
                    <td>{elem?.businessName}</td>
                    <td className="special" onClick={() => {setPendingPopup(true); setObjToSend(elem)}}>{elem?.name}</td>
                    <td>{elem?.companyName}</td>
                    <td>{elem?.email}</td>
                    {/* <td>{elem?.phone}</td> */}
                    <td>{elem?.businessAddress}</td>
                    <td className="btn">
                      <button className="accept" onClick={() => {setAcceptPopup(true); setPopupType('accept'); setObjToSend(elem)}}>Accept</button>
                      <button className="reject"  onClick={() =>{ setAcceptPopup(true); setPopupType('reject'); setObjToSend(elem)}}>Reject</button>
                    </td>
                  </tr>
                ))
            }
          </table> :
           <div className="pending_table_error">
               <hr/>
               <p>No Request Available</p>
           </div>
        }
    </div>
  );
};

export default PendingTable;
