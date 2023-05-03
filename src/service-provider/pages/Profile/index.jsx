import { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import NavBar from '../../components/ReuseableComponents/NavBar'
import instance from '../../api'
import UploadFile from '../../components/ReuseableComponents/UploadFile'

import Camera from '../../assets/images/camera.png'
import AudioIcon from '../../assets/images/audio.png'

const Profile = () => {

    const [companyName, setCompanyName] = useState('')
    const [number, setNumber] = useState('')
    const [addr, setAddr] = useState('')
    const [website, setWebsite] = useState('')
    const [err, setErr] = useState(false)
    const [logo, setLogo] = useState('')
    const [cover, setCover] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [description, setDescription] = useState('')
    const [audio, setAudio] = useState('')
    const [audioName, setAudioName] = useState('')
    const [terms, setTerms] = useState('')
    const id = localStorage.getItem('userId')
    toast.configure();

    useEffect(() => {
        instance.post('serviceprovider/getServiceAllDetails', {
            spId: id
        })
        .then(res => {
            const result = res.data.data.successResult[0]
            console.log('result', result);
            setCompanyName(result.companyName)
            setNumber(result.phone)
            setAddr(result.businessAddress)
            setWebsite(result.website)
            setLogo(result.logo)
            setCover(result.image)
            setDescription(result.description)
            setBusinessName(result.businessName)
            setTerms(result.providerTermsConditions)
        })
    }, [])

    const updateProfile = () => {
        if (companyName && number && addr && businessName && website && logo && cover && description && terms)
        {
            console.log('run');
            instance.post('serviceprovider/updateServiceProvider', {
                id: id,
                companyName: companyName,
                phone: number,
                businessAddress: addr,
                website,
                logo,
                image: cover,
                businessName,
                description,
                audioFile: audio,
                termsAndConditions: terms
            })
            .then(res => {
                if (res.data.success === true)
                {
                    toast.success('Profile Updated', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setErr(false)
                }
            })
        }
        else
        {
            setErr(true)
        }
    }


    return(
        <div className="profile">
            <NavBar index={3}/>
            <div className="profile_right">
                <p className="profile_mainTitle">Profile</p>
                <div className="profile_inner">
                    <div className="profile_form">
                        {/* <label htmlFor="email">Email</label>
                        <input type="email" disabled value={data.email} /> */}
                        <div className="profile_images">
                            <div>
                                <label>Logo</label>
                                <label htmlFor="logo">
                                    <div className="signup_img">
                                        <img src={logo ? logo : Camera} alt="" />
                                    </div>
                                </label>
                                <input type="file" id='logo' accept='image/*' onChange={(e) => {UploadFile(e, setLogo)}} />
                                {/* {err && !logo && <p className='signup_err'>Logo is Required</p>} */}
                            </div>
                            <div>
                                <label>Cover</label>
                                <label htmlFor="cover">
                                    <div className="signup_img">
                                        <img src={cover ? cover : Camera} alt="" />
                                    </div>
                                </label>
                                <input type="file" id='cover' accept='image/*' onChange={(e) => {UploadFile(e, setCover)}} />
                                {/* {err && !cover && <p className='signup_err'>Cover is Required</p>} */}
                            </div>
                        </div>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        <label htmlFor="phone">Business Name</label>
                        <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                        <label htmlFor="phone">Location</label>
                        <input type="text" value={addr} onChange={(e) => setAddr(e.target.value)} />
                        <label htmlFor="phone">Website</label>
                        <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
                        <label htmlFor="phone">Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <label>Upload Audio</label>
                        <label htmlFor="audio" className='signup_audio'>
                            <img src={AudioIcon} alt="" />
                            <p>Upload Audio</p>
                            <input type="file" id='audio' accept=".mp3,audio/*" onChange={(e) => {UploadFile(e, setAudio); setAudioName(e.target.files[0] && e.target.files[0].name)}} />
                        </label>
                        {audioName && <p className='signup_audioname'>{audioName}</p>}
                        <label>Terms {'&'} Condition</label>
                        <textarea placeholder='Terms And Condition' value={terms} className='signup_terms' onChange={(e) => setTerms(e.target.value)}></textarea>
                        {/* {err && !terms && <p className='signup_err'>Terms and Services is Required</p>} */}
                        {/* <label htmlFor="pass">Password</label>
                        <input type="text" value="*****" disabled />
                        <label htmlFor="pass">Type of Service</label>
                        <input type="text" value={data.serviceType} disabled /> */}
                        {err && <p className='profile_err'>All Fields are Required*</p>}
                        <button className="profile_submit profile_btn" onClick={updateProfile}>Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile