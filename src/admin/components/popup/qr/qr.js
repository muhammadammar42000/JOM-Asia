import React from 'react'
import Tb from "../../../assets/images/n.png";
import QRCode from 'react-qr-code';

const QRimage = ({qrCode, setQRpopup, qrPopup}) => {
  return (
    <div>
    <div className={qrPopup ? "qrImage qrImage_active" : "qrImage"}>
         <div className="qrImage_inner" id='style-3'>
         <i className="fa fa-times cross" onClick={() =>setQRpopup(false)}></i>
         <QRCode level='H' width={200} value={qrCode} />

         </div>
     </div>
 </div>
  )
}

export default QRimage