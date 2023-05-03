import React from 'react'
import instance from '../../api/api'
import { toast } from "react-toastify";


const Accept = ({setAcceptPopup, acceptPopup, popuptype, objToSend, getServiceTable, which}) => {
    toast.configure();
    const handleBtn = () => {
        toast.success(`Service Provider ${popuptype} successfully`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setAcceptPopup(false)
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
                            <button className='accept' onClick={handleBtn}>{popuptype === 'accept' ? 'Accept' : 'Reject'}</button>
                            <button className='reject' onClick={() =>setAcceptPopup(false) }>Cancel</button>
                        </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Accept