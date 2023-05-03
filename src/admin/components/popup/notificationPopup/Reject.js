import React from 'react'
import instance from '../../api/api'
import { toast } from "react-toastify";

const Reject = ({setRejectPopup, rejectPopup, notiObjTOsend, getAllNotification}) => {

console.log("notiObjTOsend", notiObjTOsend)

    toast.configure();
    const handleBtn = () => {
        const body = {
            id: notiObjTOsend.notifId
        }
        instance.post("admin/deleteNotification", body).then(res => {
            setRejectPopup(false)
            toast.success(`Notification Removed`, {
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
       <div className={rejectPopup ? "accept_popup accept_popup_active" : "accept_popup"}>
            <div className="accept_popup_inner">
               <div className='container'>
                    <div>
                        <p className='main_heading'>Are you sure ?</p>
                   
                        <i className="fa fa-times cross" onClick={() =>setRejectPopup(false) }></i>
                    </div>
               </div>
               <hr/>
               <div className='popup_body'>

                            <div>
                            <button className='accept' onClick={handleBtn}>Remove</button>
                            <button className='reject' onClick={() =>setRejectPopup(false) }>Cancel</button>
                        </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Reject