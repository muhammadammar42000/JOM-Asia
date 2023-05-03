import { useEffect, useState } from "react"
import instance from "../../../api"
import CardsBody from "./CardsBody"

import Icon1 from '../../../assets/images/booking2.png'
import Icon2 from '../../../assets/images/booking3.png'
import Icon3 from '../../../assets/images/complete.png'
import Icon4 from '../../../assets/images/bell.png'

const Cards = () => {

    const [data, setData] = useState({})
    const id = localStorage.getItem('userId')
    
    useEffect(() => {
        instance.post('serviceprovider/serviceProviderStats', {serviceProviderId: id})
        .then(res => {
            setData(res.data.data.successResult[0])
        })
    }, [])

    return(
        <div className="cards">
            <CardsBody title='Total Booking' value={data.totalBookings} icon={Icon1} />
            <CardsBody title="Todays's Booking" value={data.todaysBookings} icon={Icon2} />
            <CardsBody title='Total Booking Completed' value={data.completedBookings} icon={Icon3} />
            <CardsBody title='Notification' value='0' icon={Icon4} />
        </div>
    )
}

export default Cards