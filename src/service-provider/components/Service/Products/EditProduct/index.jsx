import { useEffect, useState } from 'react'
import { toast } from "react-toastify";

import instance from '../../../../api'
import UploadFile from '../../../ReuseableComponents/UploadFile'

import Cross from '../../../../assets/images/cross.png'
import camera from '../../../../assets/images/camera2.PNG'

const AddProduct = ({setModalType, modalType, getProductList, data}) => {

    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [err, setErr] = useState(false)
    toast.configure();

    useEffect(() => {
        if (data)
        {
            setImg(data.image)
            setName(data.title)
            setDesc(data.description)
            setPrice(data.price)
        }
    }, [modalType])

    const handleProduct = () => {
        const body = {
            serviceListingId: data.id,
            title: name,
            description: desc,
            price,
            image: img,
        }

        if (img && name && desc && price)
        {
            instance.post('serviceprovider/updateSpListing', body)
            .then(res => {
                if (res.data.success === true)
                {
                    toast.warn('Product Edited', {
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
        setModalType('')
    }

    return(
        <div className={modalType === 'edit' ? 'addProduct addProduct_active' : 'addProduct'}>
            <div className="addProduct_inner">
                <img src={Cross} alt="" className='addProduct_close' onClick={() => setModalType('')} />
                <p className="addProduct_title">Edit Product</p>
                <label htmlFor="img" className='addProduct_img-lg'>
                    <img src={img ? img : camera} alt="" />
                </label>
                <input type="file" id='img' accept='image/*' onChange={(e) => {UploadFile(e, setImg)}} />
                <label>Product Name</label>
                <input type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
                <label>Product Description</label>
                <input type="text" placeholder='Product Description' value={desc} onChange={(e) => setDesc(e.target.value)} />
                <label>Price</label>
                <input type="number" placeholder='3420' value={price} onChange={(e) => setPrice(e.target.value)} />
                {err && <p className="addProduct_err">All Fields are Required*</p>}
                <button className="addProduct_submit addProduct_btn" onClick={handleProduct}>Edit Product</button>
            </div>
        </div>
    )
}

export default AddProduct