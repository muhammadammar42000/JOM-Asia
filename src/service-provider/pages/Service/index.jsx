import { useState, useEffect } from 'react'
// import EditService from '../../components/Service/ServiceDetails/EditService'

import instance from '../../api'

import NavBar from '../../components/ReuseableComponents/NavBar'
import ServiceDetails from '../../components/Service/ServiceDetails'
import Products from '../../components/Service/Products'

const Service = () => {
    const [data, setData] = useState({})
    const id = localStorage.getItem('userId')
    // const [isTrue, setIsTrue] = useState(false)

    useEffect(() => {
        instance.post('serviceprovider/getServiceAllDetails', {
            spId: id
        })
        .then(res => {
            setData(res.data.data.successResult[0])
        })
    }, [])

    return(
        <div className="service">
            <NavBar index={2}/>
            <div className="service_right">
                <div className="service_top">
                    <p className="service_mainTitle">Service Type - {data.serviceType}</p>
                    {/* <button className='service_edit' onClick={() => setIsTrue(true)}>Edit</button> */}
                </div>
                <ServiceDetails/>
                <Products/>
                {/* <EditService setIsTrue={setIsTrue} isTrue={isTrue}/> */}
            </div>
        </div>
    )
}

export default Service