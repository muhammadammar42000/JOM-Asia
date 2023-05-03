import { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import axios from 'axios';
import instance from '../../api'
import NavBar from '../../components/ReuseableComponents/NavBar'

const Gallery = () => {

    const [imagesList, setImagesList] = useState([])
    const [oldImages, setOldImages] = useState([])
    const [img, setImg] = useState('')
    const [err, setErr] = useState(false)
    const id = localStorage.getItem('userId')
    toast.configure();

    useEffect(() => {
        getImages()
    }, [])

    useEffect(() => {
        if (img)
        {
            const obj = {serviceProviderId: id, type: 'image', url: img}
            setImagesList([...imagesList, obj])
        }
    }, [img])

    const handleImage = (e) => {
        UploadFile(e)
    }

    const UploadFile = (e) => {
        const file = e.target.files[0]
    
        if (file)
        {
            const formData = new FormData()
            formData.append("uploadFor", 'logo')
            formData.append(
                'logo',
                file,
                file.name
            )
            axios.post('https://backend.johortourism.my/admin/uploadFile', formData)
            .then(res => {
                const result = res.data.data.successResult
                setImg(`https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${result}`)
            })
            .catch(err => console.log(err))
        }
    }

    const deleteImage = (param) => {
        const data = imagesList
        const newData = data.filter((item, index) => index !== param)
        setImagesList(newData)
    }

    const deleteOldImage = (param) => {
        instance.post('serviceprovider/deleteSpGallery', {mediaId: param})
        .then(res => {
            toast.error('Images Deleted!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            getImages()
        })
        .catch(err => console.log('err', err.response))
    }

    const handleApi = () => {
        if (imagesList.length+oldImages.length > 4)
        {
            instance.post('/serviceprovider/addSpGallery', {gallery: imagesList})
            .then(res => {
                toast.success('Images Uploaded Successfully', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setImagesList([])
                getImages()
                setErr(false)
            })
        }
        else if (imagesList.length+oldImages.length < 5)
        {
            setErr(true)
        }
    }

    const getImages = () => {
        instance.post('serviceprovider/getServiceAllDetails', {spId: id})
        .then(res => {
            if (res.data.data.successResult[0].media !== null)
            {
                setOldImages(res.data.data.successResult[0].media)
            }
            else if (res.data.data.successResult[0].media === null)
            {
                setOldImages([])
            }
        })
    }

    return(
        <div className="gallery">
            <NavBar index={5}/>
            <div className="gallery_right">
                <p className="gallery_mainTitle">Gallery</p>
                <p className="gallery_desc">Upload Atleast 5 Images</p>
                <label className={'gallery_label'} htmlFor="img">
                    Upload Image
                </label>
                <input type="file" id='img' accept='image/*' multiple onChange={(e) => handleImage(e)} />
                <div className="gallery_images">
                    {imagesList.map((item, index) => {
                        return(
                            <div className="gallery_img" key={index}>
                                <img src={item.url} alt="..." />
                                <span className='gallery_remove' onClick={() => deleteImage(index)}>Remove</span>
                            </div>
                        )
                    })}
                </div>
                {err && <p className='gallery_err'>Minimum 5 Images Required</p>}
                <button className='gallery_submit' disabled={imagesList.length > 0 ? false : true} onClick={handleApi}>Submit Images</button>
                <p className="gallery_mainTitle2">Already Uploaded Images</p>
                <div className="gallery_images">
                    {oldImages.map((item, index) => {
                        return(
                            <div className="gallery_img" key={index}>
                                <img src={item.url} alt="..." />
                                {oldImages.length > 5 && <span className='gallery_remove' onClick={() => deleteOldImage(item.id)}>Remove</span>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gallery