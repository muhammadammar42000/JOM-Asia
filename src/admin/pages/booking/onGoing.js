import React from 'react'
import BookingCard from './../../components/cards/BookingCard'

const Index = ({bookingData}) => {

  return (
    <div className='content'>
        <div className='content_allCards'>                         
            <BookingCard bookingData={bookingData} />                                          
        </div>
</div>
  )
}

export default Index