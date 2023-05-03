import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/images/logo.png'
import HomeIcon from '../../../assets/images/home.png'
import ServiceIcon from '../../../assets/images/service.png'
import ProfileIcon from '../../../assets/images/profile.png'
import BookingIcon from '../../../assets/images/booking.png'
import LogoutIcon from '../../../assets/images/logout.png'

const NavBar = ({index}) => {

    const [isActive, setIsActive] = useState(false)

    const handleLogout = () => {
        window.location.reload()
        localStorage.clear()
    }

    return(
        <div className={isActive === true ? 'navBar navBar_active' : 'navBar'}>
            {!isActive && <span className='navBar_open' onClick={() => setIsActive(true)}>&#9776;</span>}
            {isActive && <span onClick={() => setIsActive(false)} className="navBar_close">&#x2715;</span> }
            {isActive && <div className="navBar_inner">
                <img src={Logo} alt="logo" className='navBar_logo' />
                <ul>
                    <li><Link to="/homesp" className={index === 1 ? 'active' : ''}><img src={HomeIcon} alt="" />Home</Link></li>
                    <li><Link to="/servicesp" className={index === 2 ? 'active' : ''}><img src={ServiceIcon} alt="" />Services</Link></li>
                    <li><Link to="/profilesp" className={index === 3 ? 'active' : ''}><img src={ProfileIcon} alt="" />Profile</Link></li>
                    <li><Link to="/bookingsp" className={index === 4 ? 'active' : ''}><img src={BookingIcon} alt="" />Booking</Link></li>
                    <li><Link to="/gallerysp" className={index === 5 ? 'active' : ''}><img src={HomeIcon} alt="" />Gallery</Link></li>
                    <li><a href="#" onClick={() => handleLogout()}><img src={LogoutIcon} alt="" />Logout</a></li>
                </ul>
            </div>}
        </div>
    )
}

export default NavBar