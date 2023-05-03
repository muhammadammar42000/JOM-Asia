import React, {useState, useRef, useEffect} from 'react'
// import instance from '../../api/api'

import { toast } from "react-toastify";
import JOMinstance from '../../../../api';
import ClickOutside from '../../click-outisde'

const DeleteComment = ({setQRDel, qrDel, id, getQrList}) => {
    toast.configure();
    
    const handleBtn = () => {
        // e.preventDefault()
        JOMinstance.post('admin/deleteQr', {id}).then(res => {
        setQRDel(false)
        toast.success(`QR Deleted`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        getQrList()

        })    
    }

    // const componentRef = useRef()
    // const componentRef2 = useRef()

    // useEffect(() => {
    //     ClickOutside(componentRef, componentRef2, setQRDel)
    // }, []);

  return (
    <div>
       <div className={qrDel ? "accept_popup accept_popup_active" : "accept_popup"} >
            <div className="accept_popup_inner" >
               <div className='container'>
                    <div>
                        <p className='main_heading'>Are you sure ?</p>                   
                        <i className="fa fa-times cross" onClick={() =>setQRDel(false) }></i>
                    </div>
               </div>
               <hr/>
               <div className='popup_body'>
                    <div>
                        <button className='accept' onClick={handleBtn}>Delete</button>
                        <button className='reject' onClick={() =>setQRDel(false) }>Cancel</button>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteComment