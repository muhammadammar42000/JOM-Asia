import { useEffect, useState } from 'react'
import instance from '../../../api'
import ImgLocation from '../../../assets/images/location.png'
import Img from '../../../assets/images/img1.png'

const ServiceDetails = () => {

    const [data, setData] = useState({})
    const id = localStorage.getItem('userId')

    useEffect(() => {
        instance.post('serviceprovider/getServiceAllDetails', {
            spId: id
        })
        .then(res => {
            setData(res.data.data.successResult[0])
        })
    }, [])


    return(
        <div className="service_details">
            <div className="service_images">
                <img src={data.image !== null ? data.image : Img} alt="..." />
            </div>
            <div className="service_mid">
                <p className="service_name">{data.companyName}</p>
                {data.businessAddress && <p className='service_location'><img src={ImgLocation} alt="" /> {data.businessAddress}</p>}
                {data.description && <p className="service_desc">{data.description}</p>}
            </div>
            <div className="service_info">
                {data.website && <p className="service_textRed">Website</p>}
                {data.website && <p className="service_text">{data.website}</p>}
                <p className="service_textRed">Contact</p>
                <p className="service_text">{data.phone}</p>
            </div>
        </div>
    )
}

export default ServiceDetails