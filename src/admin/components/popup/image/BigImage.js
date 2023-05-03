import React from 'react'
import Tb from "../../../assets/images/n.png";

const BigImage = ({bigImage, setBigImage, imageObjToSend}) => {
  return (
    <div>
    <div className={bigImage ? "bigImage bigImage_active" : "bigImage"}>
         <div className="bigImage_inner" id='style-3'>
         <i className="fa fa-times cross" onClick={() =>setBigImage(false)}></i>
            <img className='img' src={imageObjToSend} alt=''/>
         </div>
     </div>
 </div>
  )
}

export default BigImage