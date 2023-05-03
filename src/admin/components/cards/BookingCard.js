import React from 'react'
import bookingImg from "../../assets/images/Untitled-2-01.png"

const BookingCard = ({bookingData}) => {

  return (
   bookingData.length > 0 ? bookingData.map((item, index) => (
    <div className='singleCard'>
        <div className='top'>
            <p className='bookingId'>Booking ID: {item.bookingId}</p>
        </div>
        <div className='middle'>
            <div className='img'><img src={item.image} alt=''/></div>
            <div className='left_text'>
                <h5>{item.companyName}</h5>
                <p>{item.businessAddress}</p>
                <h3>RM {item.price}</h3>
            </div>
        </div>
        <div className='bottom'>
            <div className='items'>
                <p>Check In</p>
                <hr/>
                <h4>{item.bookingStartDate.substr(0, 10)}</h4>
            </div>
            <div className='items'>
                <p>Check Out</p>
                <hr/>
                <h4>{item.bookingEndDate.substr(0, 10)}</h4>
            </div>
            <div className='items'>
                <p>Guest</p>
                <hr/>
                <h4>{parseInt(item.adultNumber) + parseInt(item.childrenNumber)}</h4>
            </div>
        </div>
    </div> 
   ))
   : <p className='booking_error'>There are no bookings at the moment</p>  )
}

export default BookingCard