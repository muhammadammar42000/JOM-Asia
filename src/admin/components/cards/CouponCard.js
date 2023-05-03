import React from 'react'
import wallpaper from "../../assets/images/Untitled-2-20.png";
import barcode from "../../assets/images/Untitled-2-21.png";

const CouponCard = ({expired}) => {
  return (
    <div className="coupon_cards_single">
        {
            expired && <div className='expired'>Expired</div>
        }
    <div>
        <img className="top_img" src={wallpaper} alt="" />
    </div>
    <div className="middle">
        <h5>Ku lai Centre Point</h5>
        <p>Batu Pahat</p>
    </div>
    <p className="detail_text">Regency Special <br/> list Hospital Medical Camp</p>
    <div className="discount">
        <p className="number">70%OFF</p>
        <p className="text">Stock - 05</p>
    </div>
    <div>
        <img className="barcode_img" src={barcode} alt=''/>
    </div>
</div>
  )
}

export default CouponCard