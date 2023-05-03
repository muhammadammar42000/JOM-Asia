import React, {useState, useRef, useEffect} from 'react'
import instance from '../../api/api'
import { toast } from "react-toastify";
import ClickOutside from '../../click-outisde'

const DeleteUser = ({setDeletePopup, deletePopup, objToSend, getUsers}) => {

    toast.configure();
    
    const handleDelete = () => {
        instance.post("admin/deleteUser", {email: objToSend.email}).then((res) => {
            setDeletePopup(false)
            getUsers()
            toast.success("User Deleted Successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }
    const componentRef = useRef()
    const componentRef2 = useRef()

    useEffect(() => {
        ClickOutside(componentRef, componentRef2, setDeletePopup)
    }, []);
    
  return (
    <div>
       <div className={deletePopup ? "accept_popup accept_popup_active" : "accept_popup"} ref={componentRef}>
            <div className="accept_popup_inner" ref={componentRef2}>
               <div className='container'>
                    <div>
                        <p className='main_heading'>Are you sure ?</p>                   
                        <i className="fa fa-times cross" onClick={() =>setDeletePopup(false) }></i>
                    </div>
               </div>
               <hr/>
               <div className='popup_body'>
                    <div>
                        <button className='accept' onClick={handleDelete}>Delete</button>
                        <button className='reject' onClick={() =>setDeletePopup(false) }>Cancel</button>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteUser