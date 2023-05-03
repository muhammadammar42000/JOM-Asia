import React, {useState, useRef, useEffect} from 'react'
// import instance from '../../api/api'
import { toast } from "react-toastify";
import JOMinstance from '../../../../api';
import ClickOutside from '../../click-outisde'

const Confirmation = ({setConfirmModal, confirmModal, delId, getUserPost, setShowDropDown}) => {
    toast.configure();

    useEffect(() => {
        setShowDropDown(false)
    }, [])
    
    const handleBtn = () => {
        // e.preventDefault()
        JOMinstance.post('admin/deletePost', {postId: delId}).then(res => {
        setConfirmModal(false)
        setShowDropDown(false)
        toast.success(`Post Deleted`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        getUserPost()
        })    
    }

    const componentRef = useRef()
    const componentRef2 = useRef()

    useEffect(() => {
        ClickOutside(componentRef, componentRef2, setConfirmModal)
    }, []);

  return (
    <div>
       <div className={confirmModal ? "accept_popup accept_popup_active" : "accept_popup"}  ref={componentRef}>
            <div className="accept_popup_inner"  ref={componentRef2}>
               <div className='container'>
                    <div>
                        <p className='main_heading'>Are you sure ?</p>                   
                        <i className="fa fa-times cross" onClick={() =>setConfirmModal(false) }></i>
                    </div>
               </div>
               <hr/>
               <div className='popup_body'>
                    <div>
                        <button className='accept' onClick={handleBtn}>Delete</button>
                        <button className='reject' onClick={() =>setConfirmModal(false) }>Cancel</button>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Confirmation