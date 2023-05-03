import { useEffect, useState } from 'react'
import instance from '../../api'
// import UploadFile from '../ReuseableComponents/UploadFile'

import Cross from '../../assets/images/cross.png'
// import Camera from '../../assets/images/camera.png'
// import AudioIcon from '../../assets/images/audio.png'

const Signup = ({setStep, step, setData, data}) => {

    const [category, setCategory] = useState({})
    const [categoryList, setCategoryList] = useState([])
    const [subCategoryList, setSubCategoryList] = useState([])
    const [subCategoryId, setSubCategoryId] = useState('')
    // const [logo, setLogo] = useState('')
    // const [cover, setCover] = useState('')
    // const [audio, setAudio] = useState('')
    // const [audioName, setAudioName] = useState('')
    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [website, setWebsite] = useState('')
    const [description, setDescription] = useState('')
    const [number, setNumber] = useState('')
    const [location, setLocation] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [isBookable, setIsBookable] = useState(0)
    // const [terms, setTerms] = useState('')
    const [err, setErr] = useState(false)
    const [errEmail, setErrEmail] = useState(false)

    useEffect(() => {
        instance.post('/serviceprovider/getCategories')
        .then(res => {
            setCategoryList(res.data.data.successResult)
        })
    }, [])

    const handleCategory = (e) => {
        setSubCategoryId('')
        setCategory({id: e.target.value, name: e.target.selectedOptions[0].getAttribute('data-name')})

        instance.post('/serviceprovider/getSubCategories', {
            categoryId: e.target.value
        })
        .then(res => {
            setSubCategoryList(res.data.data.successResult)
        })
    }

    console.log('email', email);

    const handleSubmit = () => {
        const validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email.match(validRegex))
        {
            setErr(true)
            setErrEmail(true)
            console.log('run');
        }
        // else if (!logo)
        // {
        //     setErr(true)
        // }
        // else if (!cover)
        // {
        //     setErr(true)
        // }
        else if (!companyName)
        {
            setErr(true)
        }
        else if (!businessName)
        {
            setErr(true)
        }
        // else if (!description)
        // {
        //     setErr(true)
        // }
        else if (!number)
        {
            setErr(true)
        }
        else if (pass.length < 6)
        {
            setErr(true)
        }
        else if (confirmPass !== pass)
        {
            setErr(true)
        }
        // else if (!category.id)
        // {
        //     setErr(true)
        // }
        // else if (!terms)
        // {
        //     setErr(true)
        // }
        else if (email && companyName && businessName && number && pass && confirmPass)
        {
            setData({...data, image: "https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/defaults/logo.png", logo : "https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/defaults/cover.png", subCategoryId: subCategoryId ? subCategoryId : null, isBookable, email, businessName, companyName, categoryId: category.id, description, phone: number, coordinates: '1010', website, businessAddress: location, password: pass })
            setStep(3)
        }
    }

    return(
        <div className={step === 2 ? 'signup signup_active' : 'signup'}>
            <div className="signup_inner">
                <p className="signup_title">Create Account</p>
                <div className="signup_images">
                    {/* <div>
                        <label>Logo</label>
                        <label htmlFor="logo">
                            <div className="signup_img">
                                <img src={logo ? logo : Camera} alt="" />
                            </div>
                        </label>
                        <input type="file" id='logo' accept='image/*' onChange={(e) => {UploadFile(e, setLogo)}} />
                        {err && !logo && <p className='signup_err'>Logo is Required</p>}
                    </div> */}
                    {/* <div>
                        <label>Cover</label>
                        <label htmlFor="cover">
                            <div className="signup_img">
                                <img src={cover ? cover : Camera} alt="" />
                            </div>
                        </label>
                        <input type="file" id='cover' accept='image/*' onChange={(e) => {UploadFile(e, setCover)}} />
                        {err && !cover && <p className='signup_err'>Cover is Required</p>}
                    </div> */}
                </div>
                <label >Type of Service</label>
                <div className="signup_select">
                    <select defaultValue={'DEFAULT'} onChange={(e) => handleCategory(e)}>
                        <option value="DEFAULT" disabled>Select Service</option>
                        {categoryList.map((item, index) => {
                            return(
                                <option key={index} value={item.id} data-name={item.name} >{item.name}</option>
                            )
                        })}
                    </select>
                    {err && !category.id && <p className='signup_err'>Category is Required</p>}
                </div>
                {subCategoryList.length > 0 && <div className="signup_select">
                    <label >Service Sub Category</label>
                    <select defaultValue={'DEFAULT'} onChange={(e) => setSubCategoryId(e.target.value)}>
                        <option value="DEFAULT" disabled>Select Sub Category</option>
                        {subCategoryList.map((item, index) => {
                            return(
                                <option value={item.id} key={index} >{item.name}</option>
                            )
                        })}
                    </select>
                </div>}
                <label>Email</label>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                {err && errEmail && <p className='signup_err'>Email is not valid</p>}
                <label>Company Name</label>
                <input type="text" placeholder='Company Name' onChange={(e) => setCompanyName(e.target.value)} />
                {err && !companyName && <p className='signup_err'>Company Name is Required</p>}
                <label>Business Name</label>
                <input type="text" placeholder='Business Name' onChange={(e) => setBusinessName(e.target.value)} />
                {err && !businessName && <p className='signup_err'>Business Name is Required</p>}
                <label>Phone Number</label>
                <input type="number" placeholder='Number' onChange={(e) => setNumber(e.target.value)} />
                {err && !number && <p className='signup_err'>Phone Number is Required</p>}
                <label >Password</label>
                <input type="password" placeholder='Password' onChange={(e) => setPass(e.target.value)} />
                {err && pass.length < 6 && <p className='signup_err'>Password must be atleast 6 characters</p>}
                <label>Confirm Password</label>
                <input type="password" placeholder='Confirm Password' onChange={(e) => setConfirmPass(e.target.value)} />
                {err && confirmPass !== pass && <p className='signup_err'>Confirm password is not same</p>}
                <label>Website</label>
                <input type="text" placeholder='www.google.com' onChange={(e) => setWebsite(e.target.value)} />
                {/* {err && !website && <p className='signup_err'>Website is Required</p>} */}
                <label>Description</label>
                <input type="text" placeholder='Description...' onChange={(e) => setDescription(e.target.value)} />
                {/* {err && !description && <p className='signup_err'>Description is Required</p>} */}
                <label>Location</label>
                <input type="text" placeholder='Location' onChange={(e) => setLocation(e.target.value)} />
                {/* {err && !location && <p className='signup_err'>Location is Required</p>} */}
                <label>Can Be Booked</label>
                <div>
                    <input type="checkbox" onChange={(e) => setIsBookable(isBookable ? 0 : 1)  } />
                    <span className='signup_book'>Check if service can be booked</span>
                </div>
                {/* <label>Upload Audio</label>
                <label htmlFor="audio" className='signup_audio'>
                    <img src={AudioIcon} alt="" />
                    <p>Upload Audio</p>
                    <input type="file" id='audio' accept=".mp3,audio/*" onChange={(e) => {UploadFile(e, setAudio); setAudioName(e.target.files[0] && e.target.files[0].name)}} />
                </label> */}
                {/* {err && !audio && <p className='signup_err'>Audio File is Required</p>} */}
                {/* {audioName && <p className='signup_audioname'>{audioName}</p>} */}
                {/* <label>Terms {'&'} Condition</label>
                <textarea placeholder='Terms And Condition' className='signup_terms' onChange={(e) => setTerms(e.target.value)}></textarea>
                {err && !terms && <p className='signup_err'>Terms and Services is Required</p>} */}
                <button className="signup_submit signup_btn" onClick={() => handleSubmit()}>Next</button>
                <img src={Cross} alt="" className='signup_close' onClick={() => setStep(0)} />
            </div>
        </div>
    )
}

export default Signup