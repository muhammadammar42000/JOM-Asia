import Cross from '../../../../assets/images/cross.png'
import camera from '../../../../assets/images/camera.png'

const EditService = ({setIsTrue, isTrue}) => {
    return(
        <div className={isTrue === true ? 'addProduct addProduct_active' : 'addProduct'}>
            <div className="addProduct_inner">
                <img src={Cross} alt="" className='addProduct_close' onClick={() => setIsTrue(false)}/>
                <p className="addProduct_title">Edit Details</p>
                <label htmlFor="img" className='addProduct_img-lg'>
                    <img src={camera} alt="" />
                </label>
                <input type="file" id='img' />
                {/* <div className="addProduct_images">
                    <label htmlFor="img-sm1" className='addProduct_img-sm'>
                        <img src={camera} alt="" />
                    </label>
                    <input type="file" id='img-sm1' />
                    <label htmlFor="img-sm2" className='addProduct_img-sm'>
                        <img src={camera} alt="" />
                    </label>
                    <input type="file" id='img-sm2' />
                    <label htmlFor="img-sm3" className='addProduct_img-sm'>
                        <img src={camera} alt="" />
                    </label>
                    <input type="file" id='img-sm3' />
                    <label htmlFor="img-sm4" className='addProduct_img-sm'>
                        <img src={camera} alt="" />
                    </label>
                    <input type="file" id='img-sm4' />
                    <label htmlFor="img-sm5" className='addProduct_img-sm'>
                        <img src={camera} alt="" />
                    </label>
                    <input type="file" id='img-sm5' />
                </div> */}
                <label htmlFor="email">Name</label>
                <input type="text" placeholder='Name' />
                <label htmlFor="company">Location</label>
                <input type="text" placeholder='Location' />
                <label htmlFor="phone">Details</label>
                <input type="number" placeholder='Details' />
                <label htmlFor="phone">Website</label>
                <input type="text" placeholder='Website' />
                <label htmlFor="phone">Contact</label>
                <input type="text" placeholder='Contact No' />
                <label htmlFor="phone">Address</label>
                <input type="text" placeholder='Address' />
                <label htmlFor="phone">Official Website</label>
                <input type="text" placeholder='Official Website' />
                <button className="addProduct_submit addProduct_btn">Save / Update</button>
            </div>
        </div>
    )
}

export default EditService