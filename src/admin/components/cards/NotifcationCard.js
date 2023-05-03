import React, {useState, useEffect} from 'react'
import Tb from "../../assets/images/n.png";
import notification1 from "../../assets/images/Notification-icon-01.png";
import notification2 from "../../assets/images/Notification-icon-02.png";
import notification3 from "../../assets/images/Notification-icon-03.png";
import BigImage from '../popup/image/BigImage';
import Accept from "../popup/notificationPopup/Accept"
import Reject from "../popup/notificationPopup/Reject"
import instance from '../api/api';
import { useNavigate } from "react-router-dom";

const NotifcationCard = ({heading, setNotiLength}) => {

    const navigate = useNavigate();

    const [acceptPopup, setAcceptPopup] = useState(false);
    const [rejectPopup, setRejectPopup] = useState(false);  
    const [bigImage, setBigImage] = useState(false);  
    const [allNotification, setAllNotification] = useState([
    { name: "1" },
    {name : "1"},
    {name : "1"},
    {name : "1"},
    {name : "1"},
    {name : "1"},
    {name : "1"},
    ])
    const [notiObjTOsend, setNotiObjTOsend] = useState({})


    const getAllNotification = () => {
        // instance.post('admin/getSpNotification').then((res)=> {
        //     console.log(res.data.data.successResult)
        //     setAllNotification(res.data.data.successResult)
        //     setNotiLength(res?.data?.data?.successResult?.length)
        // })
    }
    // useEffect(() => {
    //     getAllNotification();
    // }, [])
    
  return (
      <>
     <BigImage setBigImage={setBigImage} bigImage={bigImage}  />

     <Accept getAllNotification={getAllNotification} notiObjTOsend={notiObjTOsend} setAcceptPopup={setAcceptPopup} acceptPopup={acceptPopup} />
     <Reject getAllNotification={getAllNotification} notiObjTOsend={notiObjTOsend} setRejectPopup={setRejectPopup} rejectPopup={rejectPopup} />
    {
        allNotification && allNotification.map((item, index) => (
            <div className="main_section">

            <div className="top">
                <div className="red">John Wick</div>
                <div className="date">20/2/2020</div>
            </div>
            <div className="middle">
                <div>
                
           {/* <img src={item.image ? item.image : Tb} alt='' style={{cursor: 'pointer'}} onClick={()=>setBigImage(true)}/>  */}
             <img src={item.image ? item.image : Tb} alt=''  />
                   
                </div>
                <div className="middle_content">
                    <div className="head">Apple Inc.</div>
                        <div className="text">
                            <img src={notification1} alt='' />
                            <p>Columbia</p>
                        </div>
                    <div className="text">
                        <img src={notification2} alt=''  />
                        <p>www.apple.com</p>
                    </div>
                    <div className="text">
                        <img src={notification3} alt='' />
                        <p>123456789</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <button className="accept" onClick={() => {navigate("/requests")}}>View</button>
                <button className="reject"  onClick={() => {setRejectPopup(true); setNotiObjTOsend(item)}}>Remove</button>
            </div>
        </div>
        ))
    }
      </>
  )
}

export default NotifcationCard