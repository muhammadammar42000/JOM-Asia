import React, {useState, useRef, useEffect} from 'react'
import { NavItem } from 'react-bootstrap'
import icon from "../../../assets/images/user.jpg"
import ClickOutside from '../../click-outisde'

const ViewUser = ({setViewPopup, viewPopup, objToSend}) => {

    const componentRef = useRef()
    const componentRef2 = useRef()

    useEffect(() => {
        ClickOutside(componentRef, componentRef2, setViewPopup)
    }, []);
    
  return (
    <div>
       <div className={viewPopup ? "user_popup user_popup_active" : "user_popup"} ref={componentRef}>
            <div className="user_popup_inner" ref={componentRef2}>
               <div className='container'>
                    <h3 className="user_popup_head">User Detail</h3>
                    <div>                   
                        <i className="fa fa-times cross" onClick={() =>setViewPopup(false) }></i>
                    </div>
               </div>
                <div className="user_popup_main">
                    <div className="user_popup_icon">
                        <img src={objToSend.profileImage? objToSend.profileImage : icon} alt=''/> 
                    </div>            
                    <div>
                        <div className="user_popup_para">
                            <p className='heading'>Full Name</p>
                            <p className='text'>{objToSend?.fullname?.substr(0, 20)}</p>
                        </div>
                        <div className="user_popup_para">
                            <p className='heading'>User Name</p>
                            <p className='text'>{objToSend.username?.substr(0, 20)}</p>
                        </div>
                        <div className="user_popup_para">
                            <p className='heading'>Email</p>
                            <p className='text'>{objToSend.email}</p>
                        </div>
                        <div className="user_popup_para">
                            <p className='heading'>Contact</p>
                            <p className='text'>{objToSend.phone}</p>
                        </div>
                    </div>
                </div>
               {/* <div className='popup_body'>
                    <div>
                        <div className="user_popup_para">
                            <p className='heading'>Full Name</p>
                            <p className='text'>{objToSend.fullname}</p>
                        </div>
                        <div className="user_popup_para">
                            <p className='heading'>User Name</p>
                            <p className='text'>{objToSend.username}</p>
                        </div>
                        <div className="user_popup_para">
                            <p className='heading'>Email</p>
                            <p className='text'>{objToSend.email}</p>
                        </div>
                        <div className="user_popup_para">
                            <p className='heading'>Contact</p>
                            <p className='text'>{objToSend.phone}</p>
                        </div>
                    </div>
               </div> */}
            </div>
        </div>
    </div>
  )
}

export default ViewUser