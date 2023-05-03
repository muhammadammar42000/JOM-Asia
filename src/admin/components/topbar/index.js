import React from 'react'
import Logo from "../../assets/images/Admin-Assests-01.png"
import Bell from "../../assets/images/Notification-Red.png"

const TopBar = () => {
  return (
    <div className='top_bar'>
       <div className='top_bar_items'>
          <div>
              <img className='top_logo' alt="" src={Logo} />
          </div>
          <div className='top_logo_bell'>  
            <img src={Bell} alt="" />
        </div>
       </div>

    </div>
  )
}

export default TopBar