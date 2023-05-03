import React, {useState, useEffect} from 'react'
import Leftbar from '../../components/leftbar'
// import TopBar from '../../components/topbar'
import Cards from '../../components/cards'
import searchIcon from "../../assets/images/Untitled-2-14.png"
import Ongoing from './onGoing'
import Completed from './completed'
import Upcoming from './upComing'
import instance from "../../components/api/api" 

const Index = () => {
    const [tabIndex, setTabIndex] = useState(1)
    const [bookingData, setBookingdata] = useState([])
    const [filterData, setFilterData] = useState([])
    const [type, setType] = useState("upcoming")
    const [searchValue, setSearchValue] = useState("")

    const getBooking = () => {  
        const body = {
            status: type
        }
        instance.post("admin/getAllBookings", body).then(res => {
        setBookingdata(res.data.data.successResult)
    })
    }
    const handleSearch = (e) => {
        setSearchValue(e)
        const SearchedbookingData = e ? bookingData.filter(item => item.bookingId.toLowerCase().includes(e.toLowerCase())) : bookingData
        setFilterData(SearchedbookingData)
    }
    useEffect(() => {
        getBooking()
    }, [type])
    
  return (
    <div>
        <div className='main_layout'>
                <Leftbar index={0}/>
            <div className='right_bar'>
                <Cards />
                <div className='booking'>
                    <div className='booking_header'>
                                <div className='booking_header_heading'>
                                    <p>Booking</p>
                                    <input className='date' type='date'  onKeyDown={(e) => e.preventDefault()} />
                                </div>
                                <div className='input_box'><input type='text' onChange={ (e) => handleSearch(e.target.value)} placeholder='Search by ID'/><img src={searchIcon} alt=""/></div>
                            </div>  
                    </div>

                    <div className='booking_body'>
                        <div className='top'>
                            <div className={(tabIndex === 1 && type === "upcoming") ? "_active" : "non_active"} onClick={() => {setTabIndex(1); setType("upcoming")}}>
                                <p>Upcoming</p>
                                <hr/>
                            </div>
                            <div className={(tabIndex === 2 && type === "ongoing") ? "_active" : "non_active"} onClick={() => {setTabIndex(2); setType("ongoing")}}>
                                <p>Ongoing</p>
                                <hr/>
                            </div>
                            <div className={(tabIndex === 3 && type === "completed") ? "_active" : "non_active"} onClick={() => {setTabIndex(3); setType("completed")}}>
                                <p>Completed</p>
                                <hr/>
                            </div>
                        </div>
                    {
                        tabIndex === 1 ? <Upcoming bookingData={searchValue ? filterData : bookingData} /> : ""
                    }
                    {
                        tabIndex === 2 ? <Ongoing bookingData={searchValue ? filterData : bookingData} /> : ""
                    }
                    {
                        tabIndex === 3 ? <Completed bookingData={searchValue ? filterData : bookingData}/> : ""
                    }
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Index