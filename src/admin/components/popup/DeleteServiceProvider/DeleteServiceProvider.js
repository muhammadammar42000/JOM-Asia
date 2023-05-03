import React from 'react'

const DeleteServiceProvider = ({setDeleteService , deleteService}) => {
  return (
    <div>
    <div className={deleteService ? "accept_popup accept_popup_active" : "accept_popup"}>
         <div className="accept_popup_inner">
            <div className='container'>
                 <div>
                     <p className='main_heading'>Are you sure ?</p>
                
                     <i className="fa fa-times cross" onClick={() =>setDeleteService(false) }></i>
                 </div>
            </div>
            <hr/>
            <div className='popup_body'>

                         <div>
                         <button className='accept' onClick={() => setDeleteService(false)}>Delete</button>
                         <button className='reject' onClick={() =>setDeleteService(false) }>Cancel</button>
                     </div>
            </div>
         </div>
     </div>
 </div>
  )
}

export default DeleteServiceProvider