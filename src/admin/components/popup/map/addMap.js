import React, {useState, useRef, useEffect} from 'react'
// import instance from "../../../components/api/api"
import { toast } from "react-toastify";
import GoogleMap from '../../googleMap';
import icon from "../../../assets/images/Carema-02.png"
import  onFileChange  from '../../upload-image'
import ClickOutside from '../../click-outisde'
import JOMinstance from '../../../../api';


const Add = ({setMapPopup, mapPopup, getQrList}) => {

    toast.configure();

    const [place, setPlace] = useState([])
    const [placeObj, setPlaceObj] = useState({})
    const [searchText,setSearchText] = useState("")
    const [name,setName] = useState("")
    const [points,setPoints] = useState("")
    const [mainImage, setMainImage] = useState("")
    const [address, setaddress] = useState("");
    const [googleLatLong, setGoogleLatLong] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    // const conCat = `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${mainImage}`
    const lettersOnly = /^[A-Za-z]+$/;
    // const getPlaces = (e) => {
    //     setSearchText(e.target.value)
    //     const body = {
    //         keyword: e.target.value
    //     }
    //     instance.post("admin/searchPlaces", body).then((res) => {
    //         setPlace(res.data.data.successResult)
    //     })
    // }
    const handleAddMap = () => {


        if(isClicked){
            const body = {
                name,
                points,
                lat: googleLatLong.lat,
                long: googleLatLong.lng,
                address: address,
                // image: `https://jtiresourcebucket.s3.ap-south-1.amazonaws.com/${mainImage}`
                image: "img"
            }
            JOMinstance.post("admin/addQr", body).then((res) => {
                if(res.data.success){
                    toast.success("QR Added Successfully", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    getQrList()
                    setMapPopup(false)
                    setaddress("")
                    setName("")
                    setPoints("")
                } else {
                    {toast.error("Cannot Submit empty values", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });}
                }
            })
            
        } else {
                {toast.error("Please select valid location", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });}
            
        }

    }
    // const componentRef = useRef()
    // const componentRef2 = useRef()

    // useEffect(() => {
    //     ClickOutside(componentRef, componentRef2, setMapPopup)
    // }, []);
  return (
    <div>
       <div className={mapPopup ? "addmap_popup addmap_popup_active" : "addmap_popup"}>
            <div className="addmap_popup_inner" id='style-3'>
                <div className='container'>
                    <div className='main_heading'>
                        <div>Add Map</div>
                        <i className="fa fa-times cross" onClick={() =>setMapPopup(false)}></i>
                    </div>
                    {/* <div className='image_section'>
                        <div className='barcode_section1'>
                            <div className="section_body">
                            <label htmlFor='mapImg1'><img alt="" className={mainImage ? "uploaded-icon" : "icon"} src={mainImage ? conCat : icon}/></label>
                                <input type="file" id='mapImg1' name="myfile" onChange={(e) => onFileChange(e, setMainImage)}/>
                            </div>
                        </div>
                    </div> */}
                    <div className='input_section'>
                        <div>
                            <p>Name</p>
                            <input type='text' value={name} placeholder='Name' onChange={(e) => { (lettersOnly.test(e.target.value) || e.target.value === "" ) && setName(e.target.value) }} /> 
                        </div>
                        <div>
                            <p>Scan to earn points</p>
                            <input type='number' value={points} placeholder='Enter points' onChange={(e) => setPoints(e.target.value)} /> 
                        </div>
                        {/* <div>
                            <p>Location</p>
                            <input className='location-field' type='text' value={searchText} placeholder='Location' onChange={(e) => getPlaces(e)}/> 
                        </div>
                        <div className='location'>
                            {
                                searchText && (place && place.map((item, index) => (
                                    <ul>
                                        <li key={index} onClick={() => {setPlaceObj(item); setSearchText(item.name); setPlace(null);}}>{item.name}</li>
                                    </ul>
                                )) ) 
                            }
                        </div> */}
                        <div>
                            <p>Location</p>
                            <GoogleMap setIsClicked={setIsClicked} isClicked={isClicked} setaddress={setaddress} setGoogleLatLong= {setGoogleLatLong} />
                        </div>
                    </div>
                    <div className='btns'>
                        <button className='save' onClick={handleAddMap}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add