import React, {useState, useEffect} from 'react'
import icon from "../../../../assets/images/Carema-02.png"
import  onFileChange  from '../../../upload-image'
import instance from "../../../api/api"
import { toast } from "react-toastify";

const AttractionPopup = ({setPopUpAttraction, PopUpAttraction, setAddPostPopup}) => {

    const [mainImage, setMainImage] = useState("")
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image4, setImage4] = useState("")
    const [image5, setImage5] = useState("")


    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [website, setWebsite] = useState("")
    const [openingTime, setOpeningTime] = useState("")
    const [closingTime, setClosingTime] = useState("")
    const [contact, setContact] = useState("")

    toast.configure();

    const handleAddPlace = () => {
        setPopUpAttraction(false)
        setAddPostPopup(false)

        toast.success("Place Added Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }
  return (
    <div>
       <div className={PopUpAttraction ? "addeditor_popup addeditor_popup_active" : "addeditor_popup"}>
            <div className="addeditor_popup_inner" id='style-3'>
                <div className='container'>
                    <div className='main_heading'>
                        <div>Add Attraction Place</div>
                        <i className="fa fa-times cross" onClick={() =>{setPopUpAttraction(false); setAddPostPopup(false)}}></i>
                    </div>
                    <div className='image_section'>
                            <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='mainImg-1'>
                                        <img alt="" className={mainImage ? "uploaded-icon" : "icon"}
                                         src={mainImage? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${mainImage}` : icon}/>
                                    </label>
                                    <input type="file" id='mainImg-1' onChange={(e) => onFileChange(e, setMainImage)}/>
                                </div>
                            </div>
                    </div>
                    <div className='five_images'>
                        <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='mainImg-6'>
                                        <img alt="" className={image1 ? "uploaded-small-icon" : "icon"}
                                         src={image1 ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${image1}` : icon}/>
                                    </label>
                                    <input type="file" id='mainImg-6' onChange={(e) => onFileChange(e, setImage1)}/>
                                </div>
                        </div>
                        <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='mainImg-2'>
                                        <img alt="" className={image2 ? "uploaded-small-icon" : "icon"}
                                         src={image2 ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${image2}` : icon}/>
                                    </label>
                                    <input type="file" id='mainImg-2' onChange={(e) => onFileChange(e, setImage2)}/>
                                </div>
                        </div>
                        <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='mainImg-3'>
                                        <img alt="" className={image3 ? "uploaded-small-icon" : "icon"}
                                         src={image3 ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${image3}` : icon}/>
                                    </label>
                                    <input type="file" id='mainImg-3' onChange={(e) => onFileChange(e, setImage3)}/>
                                </div>
                        </div>
                        <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='mainImg-4'>
                                        <img alt="" className={image4 ? "uploaded-small-icon" : "icon"}
                                         src={image4 ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${image4}` : icon}/>
                                    </label>
                                    <input type="file" id='mainImg-4' onChange={(e) => onFileChange(e, setImage4)}/>
                                </div>
                        </div>
                        <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='mainImg-5'>
                                        <img alt="" className={image5 ? "uploaded-small-icon" : "icon"}
                                         src={image5 ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${image5}` : icon}/>
                                    </label>
                                    <input type="file" id='mainImg-5' onChange={(e) => onFileChange(e, setImage5)}/>
                                </div>
                        </div>
                        
                    </div>
                    <div className='input_section'>
                        <div>
                            <p>Name of Place</p>
                            <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}/> 
                        </div>
                        <div>
                            <p>City of Town</p>
                            <input type='text' placeholder='City of Town' onChange={(e) => setAddress(e.target.value)}/> 
                        </div>
                        <div>
                            <p>Contact</p>
                            <input type='text' placeholder='Contact' onChange={(e) => setContact(e.target.value)}/> 
                        </div>
                        <div>
                            <p>Opening Time</p>
                            <input type='text' placeholder='Opening Time' onChange={(e) => setOpeningTime(e.target.value)}/> 
                        </div>
                        <div>
                            <p>Closing Time</p>
                            <input type='text' placeholder='Closing Time' onChange={(e) => setClosingTime(e.target.value)} /> 
                        </div>
                        <div>
                            <p>Address</p>
                            <input type='text' placeholder='Address' onChange={(e) => setAddress(e.target.value)}/> 
                        </div>
                        <div>
                            <p>Official Website</p>
                            <input type='text' placeholder='Official Website' onChange={(e) => setWebsite(e.target.value)} /> 
                        </div>
                    </div>
                   
                    <div className='btns'>
                        <button className='save' onClick={handleAddPlace}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AttractionPopup