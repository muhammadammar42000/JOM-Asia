import React, {useState} from 'react'
import icon from "../../../../assets/images/Carema-02.png"
import  onFileChange  from '../../../upload-image'

const EditorPopup = ({setPopUpEditor, PopUpEditor}) => {

    const [mainImage, setMainImage] = useState("")
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image4, setImage4] = useState("")
    const [image5, setImage5] = useState("")

  return (
    <div>
       <div className={PopUpEditor ? "addeditor_popup addeditor_popup_active" : "addeditor_popup"}>
            <div className="addeditor_popup_inner" id='style-3'>
                <div className='container'>
                    <div className='main_heading'>
                        <div>Add Top Places</div>
                        <i className="fa fa-times cross" onClick={() =>setPopUpEditor(false)}></i>
                    </div>
                    <div className='image_section'>
                            <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='mainImg'>
                                        <img alt="" className={mainImage ? "uploaded-icon" : "icon"}
                                         src={mainImage ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${mainImage}` : icon}/>
                                    </label>
                                    <input type="file" id='mainImg' onChange={(e) => onFileChange(e, setMainImage)}/>
                                </div>
                            </div>
                    </div>
                    <div className='five_images'>
                        <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='img1'>
                                        <img alt="" className={image1 ? "uploaded-small-icon" : "icon"}
                                         src={image1 ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${image1}` : icon}/>
                                    </label>
                                    <input type="file" id='img1' name="myfile" onChange={(e) => onFileChange(e, setImage1)}/>
                                </div>
                        </div>
                        <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='img2'>
                                        <img alt="" className={image2 ? "uploaded-small-icon" : "icon"}
                                         src={image2 ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${image2}` : icon}/>
                                    </label>
                                    <input type="file" id='img2' name="myfile" onChange={(e) => onFileChange(e, setImage2)}/>
                                </div>
                        </div>
                        <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='img3'>
                                        <img alt="" className={image3 ? "uploaded-small-icon" : "icon"}
                                         src={image3 ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${image3}` : icon}/>
                                    </label>
                                    <input type="file" id='img3' name="myfile" onChange={(e) => onFileChange(e, setImage3)}/>
                                </div>
                        </div>
                        <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='img4'>
                                        <img alt="" className={image4 ? "uploaded-small-icon" : "icon"}
                                         src={image4 ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${image4}` : icon}/>
                                    </label>
                                    <input type="file" id='img4' name="myfile" onChange={(e) => onFileChange(e, setImage4)}/>
                                </div>
                        </div>
                        <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='img5'>
                                        <img alt="" className={image5 ? "uploaded-small-icon" : "icon"}
                                         src={image5 ? `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${image5}` : icon}/>
                                    </label>
                                    <input type="file" id='img5' name="myfile" onChange={(e) => onFileChange(e, setImage5)}/>
                                </div>
                        </div>
                        
                    </div>
                    <div className='input_section'>
                        <div>
                            <p>Name</p>
                            <input type='text' placeholder='Name' /> 
                        </div>
                        <div>
                            <p>City of Town</p>
                            <input type='text' placeholder='City of Town' /> 
                        </div>
                        <div>
                            <p>Details</p>
                            <input type='text' placeholder='Details' /> 
                        </div>
                        <div>
                            <p>Opening Time</p>
                            <input type='text' placeholder='Opening Time' /> 
                        </div>
                        <div>
                            <p>Closing Time</p>
                            <input type='text' placeholder='Closing Time' /> 
                        </div>
                        <div>
                            <p>Address</p>
                            <input type='text' placeholder='Address' /> 
                        </div>
                        <div>
                            <p>Official Website</p>
                            <input type='text' placeholder='Official Website' /> 
                        </div>
                    </div>
                   
                    <div className='btns'>
                        <button className='save'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditorPopup