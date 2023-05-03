import React from 'react'
import instance from '../../api/api'
import { toast } from "react-toastify";


const Accept = ({setAcceptPopup, acceptPopup, notiObjTOsend, getAllNotification}) => {

    toast.configure();
    
    const handleBtn = () => {
        const body = {
            serviceProviderId: notiObjTOsend.spId,
            status: 1
        }
        instance.post("admin/updateserviceRequest", body).then(res => {
            setAcceptPopup(false)
            toast.success(`Service Provider accepted successfully`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            getAllNotification()
        })    
    }
  return (
    <div>
       <div className={acceptPopup ? "accept_popup accept_popup_active" : "accept_popup"}>
            <div className="accept_popup_inner">
               <div className='container'>
                    <div>
                        <p className='main_heading'>Are you sure ?</p>
                   
                        <i className="fa fa-times cross" onClick={() =>setAcceptPopup(false) }></i>
                    </div>
               </div>
               <hr/>
               <div className='popup_body'>

                            <div>
                            <button className='accept' onClick={handleBtn}>Accept</button>
                            <button className='reject' onClick={() =>setAcceptPopup(false) }>Cancel</button>
                        </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Accept