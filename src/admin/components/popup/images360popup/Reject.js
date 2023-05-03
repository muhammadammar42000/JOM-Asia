import React from 'react'
import instance from '../../api/api'
import { toast } from "react-toastify";

const Reject = ({setRejectPopup, rejectPopup, imageObjToSend, getAll360Notification}) => {

    toast.configure();

    const handleBtn = () => {
        const body = {
            postId: imageObjToSend.postId,
            status: 0
        }
        // instance.post("admin/approve360Image", body).then(res => {
        //     setRejectPopup(false)
        //     toast.success(`Rejected successfully`, {
        //         position: "top-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        //     getAll360Notification()
        // })    
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
                            <button className='accept' onClick={() => setRejectPopup(false)}>Reject</button>
                            <button className='reject' onClick={() =>setRejectPopup(false) }>Cancel</button>
                        </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Reject