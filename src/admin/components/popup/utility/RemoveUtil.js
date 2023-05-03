import React from 'react'
import instance from '../../api/api'
import { toast } from "react-toastify";

const RemoveUtil = ({setRemoveUtilityPopup, removeUtilityPopup, getUtilityList, utilitiesObj}) => {
   
    toast.configure();

  const handleDelete = () => {
        toast.success("Successfully Deleted", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setRemoveUtilityPopup(false)
        getUtilityList()        
  }
    return (
    <div>
       <div className={removeUtilityPopup ? "accept_popup accept_popup_active" : "accept_popup"}>
            <div className="accept_popup_inner">
               <div className='container'>
                    <div>
                        <p className='main_heading'>Are you sure ?</p>
                   
                        <i className="fa fa-times cross" onClick={() =>setRemoveUtilityPopup(false) }></i>
                    </div>
               </div>
               <hr/>
               <div className='popup_body'>

                            <div>
                            <button className='accept' onClick={handleDelete}>Remove</button>
                            <button className='reject' onClick={() =>setRemoveUtilityPopup(false) }>Cancel</button>
                        </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default RemoveUtil