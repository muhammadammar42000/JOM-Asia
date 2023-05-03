import React from 'react'
import Leftbar from '../../components/leftbar'
import TopBar from '../../components/topbar'
import Cards from '../../components/cards'

const index = () => {
  return (
    <div>
        <TopBar/>
        <div className='main_layout'>
                <Leftbar/>
            <div className='right_bar'>
                <Cards />
                <h4>Report</h4>   
            </div>
        </div>
    </div>
  )
}

export default index