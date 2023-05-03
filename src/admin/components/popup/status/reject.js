import React from 'react'

const Reject = ({setRejectPopup, rejectPopup}) => {
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
                            <button className='accept'>Reject</button>
                            <button className='reject' onClick={() =>setRejectPopup(false) }>Cancel</button>
                        </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Reject