import React, {useState, useEffect} from 'react'
import JOMinstance from '../../../api';
import Tb from "../../assets/images/n.png";
import notification1 from "../../assets/images/Notification-icon-01.png";
import notification2 from "../../assets/images/Notification-icon-02.png";
import notification3 from "../../assets/images/Notification-icon-03.png";
import BigImage from '../popup/image/BigImage';
import Accept from "../popup/images360popup/Accept"
import Reject from "../popup/images360popup/Reject"


const Images360 = () => {

    const [acceptPopup, setAcceptPopup] = useState(false);
    const [rejectPopup, setRejectPopup] = useState(false);  
    const [bigImage, setBigImage] = useState(false);  
    const [imageObjToSend, setImageObjToSend] = useState({});  
    const [all360Notification, setAll360Notification] = useState([
    // { name: "1" },
    // { name : "1" },
    // { name : "1" },
    // { name : "1" },
    // { name : "1" },
    // { name : "1" },
    // { name : "1" },
    ])


    const getAll360Notification = () => {
        JOMinstance.post('admin/get360Notifs').then((res)=> {
            setAll360Notification(res.data.data.successResult)
        })
    }
    useEffect(() => {
        getAll360Notification();
    }, [])
    
  return (
      <>
     <BigImage imageObjToSend={imageObjToSend} setBigImage={setBigImage} bigImage={bigImage}  />

     <Accept getAll360Notification={getAll360Notification} imageObjToSend={imageObjToSend} setAcceptPopup={setAcceptPopup} acceptPopup={acceptPopup} />
     <Reject getAll360Notification={getAll360Notification} imageObjToSend={imageObjToSend} setRejectPopup={setRejectPopup} rejectPopup={rejectPopup} />
    {
        all360Notification && all360Notification.map((item, index) => (
            <div className="main_section">

            <div className="top">
                <div className="red">Beautiful Place</div>
                <div className="date">22/9/2020</div>
            </div>
            <div className="middle">
                <div>
                
           <img src={item.mediaUrl ? item.mediaUrl : Tb} alt='' style={{cursor: 'pointer'}} onClick={()=>{setBigImage(true); setImageObjToSend(Tb)}}/> 
                   
                </div>
                {/* <div className="middle_content">
                    <div className="head">{item.companyName}</div>
                        <div className="text">
                            <img src={notification1} alt='' />
                            <p>{item.businessAddress}</p>
                        </div>
                    <div className="text">
                        <img src={notification2} alt=''  />
                        <p>{item.website}</p>
                    </div>
                    <div className="text">
                        <img src={notification3} alt='' />
                        <p>{item.phone}</p>
                    </div>
                </div> */}
            </div>
            <div className="bottom">
                <button className="accept" onClick={() => {setAcceptPopup(true); setImageObjToSend(item)}}>Accept</button>
                <button className="reject"  onClick={() => {setRejectPopup(true); setImageObjToSend(item) }}>Reject</button>
            </div>
        </div>
        ))
    }
      </>
  )
}

export default Images360