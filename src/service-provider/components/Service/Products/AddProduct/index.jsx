import { useEffect, useState } from 'react'
import { toast } from "react-toastify";

import instance from '../../../../api'
import UploadFile from '../../../ReuseableComponents/UploadFile'

import Cross from '../../../../assets/images/cross.png'
import camera from '../../../../assets/images/camera2.PNG'

const AddProduct = ({setModalType, modalType, getProductList}) => {

    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [dayCharges, setDayCharges] = useState('')
    const [hourlyCharges, setHourlyCharges] = useState('')
    const [weeklyCharges, setWeeklyCharges] = useState('')
    const [monthlyCharges, setMonthlyCharges] = useState('')
    const [serviceType, setServiceType] = useState('')
    const [terms, setTerms] = useState('')
    const [adult, setAdult] = useState(false)
    const [child, setChild] = useState(false)
    const [driver, setDriver] = useState(false)
    const [license, setLicense] = useState(false)
    const [err, setErr] = useState(false)

    const id = localStorage.getItem('userId')
    toast.configure();

    useEffect(() => {
        getServiceType()
    }, [])

    const getServiceType = () => {
        instance.post('serviceprovider/getServiceAllDetails', {
            spId: id
        })
        .then(res => {
            setServiceType(res.data.data.successResult[0].serviceType)
        })
    }

    const handleProduct = () => {
        const body = {
            serviceProviderId: id,
            title: name,
            description: desc,
            price,
            dayCharges,
            hourlyCharges,
            weeklyCharges,
            monthlyCharges,
            availability: 1,
            totalCharge: price,
            termsAndConditions: terms,
            image: img,
            additionFields: serviceType === 'Hotel' ? {
                adult: adult,
                child: child
            } : {
                license: license,
                driver: driver
            }
        }

        if (img && name && desc && price && dayCharges && hourlyCharges && weeklyCharges && monthlyCharges && terms)
        {
            instance.post('serviceprovider/addServiceListing', body)
            .then(res => {
                if (res.data.success === true)
                {
                    toast.success('Product Added', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                    clearFields()
                    getProductList()
                }
            })
        }
        else
        {
            setErr(true)
        }
    }

    const clearFields = () => {
        setImg('')
        setName('')
        setDesc('')
        setPrice('')
        setDayCharges('')
        setHourlyCharges('')
        setWeeklyCharges('')
        setMonthlyCharges('')
        setTerms('')
        setAdult(false)
        setChild(false)
        setModalType('')
    }

    return(
        <div className={modalType === 'add' ? 'addProduct addProduct_active' : 'addProduct'}>
            <div className="addProduct_inner">
                <img src={Cross} alt="" className='addProduct_close' onClick={() => setModalType('')} />
                <p className="addProduct_title">Add Product</p>
                <label htmlFor="img" className='addProduct_img-lg'>
                    <img src={img ? img : camera} alt="" />
                </label>
                <input type="file" id='img' accept='image/*' onChange={(e) => {UploadFile(e, setImg)}} />
                <label>Product Name</label>
                <input type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
                <label>Product Description</label>
                <input type="text" placeholder='Product Description' value={desc} onChange={(e) => setDesc(e.target.value)} />
                <label>Price</label>
                <input type="number" placeholder='RM 3420' value={price} onChange={(e) => setPrice(e.target.value)} />
                <label>Day Charges</label>
                <input type="number" placeholder='RM 582' value={dayCharges} onChange={(e) => setDayCharges(e.target.value)} />
                <label>Hourly Charges</label>
                <input type="number" placeholder='RM 582' value={hourlyCharges} onChange={(e) => setHourlyCharges(e.target.value)} />
                <label>Weekly Charges</label>
                <input type="number" placeholder='RM 582' value={weeklyCharges} onChange={(e) => setWeeklyCharges(e.target.value)} />
                <label>Monthly Charges</label>
                <input type="number" placeholder='RM 582' value={monthlyCharges} onChange={(e) => setMonthlyCharges(e.target.value)} />
                {serviceType === 'Hotel' && <div className='addProduct_checks'>
                    <input type="checkbox" id='adult' checked={adult} onChange={() => setAdult(!adult)} />
                    <label htmlFor="adult">Allow Adults</label>
                </div>}
                {serviceType === 'Hotel' && <div className='addProduct_checks'>
                    <input type="checkbox" id='child' checked={child} onChange={() => setChild(!child)} />
                    <label htmlFor="child">Allow Childs</label>
                </div>}
                {serviceType === 'Car Rental' && <div className='addProduct_checks'>
                    <input type="checkbox" id='driver' checked={driver} onChange={() => setDriver(!driver)} />
                    <label htmlFor="driver">Ask for Driver</label>
                </div>}
                {serviceType === 'Car Rental' && <div className='addProduct_checks'>
                    <input type="checkbox" id='license' checked={license} onChange={() => setLicense(!license)} />
                    <label htmlFor="license">Ask for License</label>
                </div>}
                <label>Terms and condition</label>
                <textarea placeholder='Terms and condition' value={terms} onChange={(e) => setTerms(e.target.value)}></textarea>
                {err && <p className="addProduct_err">All Fields are Required*</p>}
                <button className="addProduct_submit addProduct_btn" onClick={handleProduct}>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct