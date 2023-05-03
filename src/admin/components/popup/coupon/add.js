import React, {useEffect, useRef} from 'react'
import icon from "../../../assets/images/Carema-02.png"
// import clickOutside from "../../click-outisde"
const Add = ({setAddPop, addPopup}) => {

    // const wrapperRef = useRef(null);
    // clickOutside(wrapperRef, setAddPop, addPopup);

  return (
    <div>
       <div className={addPopup ? "addpost_popup addpost_popup_active" : "addpost_popup"}>
            <div className="addcoupon_popup_inner" id='style-3'>
                <div className='container'>
                    <div className='main_heading'>
                        <div>Add Coupon/Voucher</div>
                        <i className="fa fa-times cross" onClick={() =>setAddPop(false)}></i>
                    </div>
                    <div className='image_section'>
                            <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='id1'><img className="icon" src={icon} alt=''/></label>
                                    <input type="file" id='id1' name="myfile" />
                                </div>
                            </div>
                    </div>
                    <div className='input_section'>
                        <div>
                            <p>Name</p>
                            <input type='text' placeholder='Name' /> 
                        </div>
                        <div>
                            <p>Location</p>
                            <input type='text' placeholder='Location' /> 
                        </div>
                        <div>
                            <p>Description</p>
                            <input type='text' placeholder='Description' /> 
                        </div>
                        <div>
                            <p>Discount</p>
                            <input type='text' placeholder='Discount' /> 
                        </div>
                        <div>
                            <p>Stock</p>
                            <input type='text' placeholder='Stock' /> 
                        </div>
                    </div>

                    <p className='barcode_text'>Upload Barcode</p>

                    <div className='image_section_small'>
                            <div className='barcode_section1'>
                                <div className="section_body">
                                    <label htmlFor='id1'><img className="icon" src={icon} alt=''/></label>
                                    <input type="file" id='id1' name="myfile" />
                                </div>
                            </div>
                    </div>
                    <div className='btns'>
                        <button className='save'>Save/Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add