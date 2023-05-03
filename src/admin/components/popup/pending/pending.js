import React from 'react'
const Pending = ({setPendingPopup, objToSend}) => {
  return (
    <div>
       <div className="pending_popup">
            <div className="pending_popup_inner">
               <div className='container'>
                    <div>
                        <i className="fa fa-times cross" onClick={() =>setPendingPopup(false) }></i>
                        <p className='main_heading'>{objToSend.name}</p>                   
                    </div>
               </div>
               <hr/>
               <div className='popup_body'>
                    <div>
                        <img src={objToSend.image} alt=''/>
                    </div>
                    <div className='popup_body_right'>
                        <div className='popup_body_details'>
                            <div className='popup_body_singleName'>
                                <div className='popup_body_headingName'>{objToSend.companyName}</div>
                            </div>
                            <div className='popup_body_single'>
                                <p className='popup_body_heading'>Contact No</p>
                                <p className='popup_body_text'>{objToSend.phone}</p>
                            </div>
                            <div className='popup_body_single'>
                                <p className='popup_body_heading'>Location</p>
                                <p className='popup_body_text'>{objToSend.businessAddress}</p>
                            </div >

                            <div className='popup_body_single'>
                                <p className='popup_body_heading'>Website</p>
                                <p className='popup_body_text'>{objToSend.website}</p>
                            </div>
                        </div>
                    </div>
               </div>
               <div className='popup_description'>
                        <p className='heading'>Description</p>
                        <p>{objToSend.description}</p>
               </div>
                    <div className='popup_lastThree'>
                        <div>
                            <div className='popup_body_heading'>Is Bookable</div>
                            <div className='popup_body_i'><i className={objToSend.isBookable? "far fa-check-circle" : "far fa-times-circle"}></i></div>
                        </div>
                    </div>
                   
                </div>
        </div>
    </div>
  )
}

export default Pending