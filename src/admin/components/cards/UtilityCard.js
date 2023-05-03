import React, {useState, useEffect} from 'react'
import icon from "../../assets/images/johor-admin-assets-30.png";
import instance from '../api/api';
import EditUtil from "../popup/utility/EditUtil"
import RemoveUtil from "../popup/utility/RemoveUtil"
import { toast } from "react-toastify";
import JOMinstance from '../../../api';

const UtilityCard = ({getUtilityList, allUtilities}) => {

    toast.configure();

  const [editUtilityPopup, setEditUtilityPopup] = useState(false)
  const [removeUtilityPopup, setRemoveUtilityPopup] = useState(false)
//   const [allUtilities, setAllUtilities] = useState([])
  const [utilitiesObj, setUtilitiesObj] = useState({})
  
// const getUtilityList = () => {
//     instance.post('admin/getAllUtilities').then((res) => {
//         setAllUtilities(res.data.data.successResult)
//     })
// }
//   useEffect(() => {
//     getUtilityList()
//   }, [])
  
const handleToggle = (data, index) => {
    const body = {
        id: data.id,
        isActive: allUtilities[index].isActive === 1 ? 0 : 1
        // status: toggle
    }
    JOMinstance.post('admin/updateUtility', body).then((res) => {
        const msg = body.isActive === 0 ? "This category is successfully hidden" : "This category is active now"

        toast.success(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        getUtilityList()
    })
    // instance.post("admin/changeCategoryStatus", body).then(res => {
    //     const msg = body.status === 0 ? "This category is successfully hidden" : "This category is active now"
    //     toast.success(msg, {
    //         position: "top-right",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     });
    //     getAllCatgeories()
    // })  

}

    return (
        <>
           { editUtilityPopup && <EditUtil setUtilitiesObj={setUtilitiesObj} getUtilityList={getUtilityList} utilitiesObj={utilitiesObj} setEditUtilityPopup={setEditUtilityPopup} editUtilityPopup={editUtilityPopup}/> } 
            <RemoveUtil getUtilityList={getUtilityList} utilitiesObj={utilitiesObj} setRemoveUtilityPopup={setRemoveUtilityPopup} removeUtilityPopup={removeUtilityPopup}/>

            {
                allUtilities && allUtilities.map((item, index) => (
                    <div className='utilities_items'>
                        <div className='utilities_inside'>
                            <img src={item.image ? item.image : icon}/> 
                        </div>
                        <div className="utilities_delete">
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"  onClick={() => handleToggle(item,index)}></span>
                                <p className="helping">If toggle is on, it will hide this category</p>
                            </label>
                        </div>
                        <div className='utilities_tags'>
                            <p className='heading'>Name</p>
                            <p className='text'>{item.name}</p>
                        </div>
                        <div className='utilities_tags'>
                            <p className='heading'>Type</p>
                            <p className='text'>{item.type}</p>
                        </div>
                        <div className='utilities_tags'>
                            <p className='heading'>Link</p>
                            <p className='text'>{item.type === 'redirect' && item.link? item.link : '-'}</p>
                        </div>
                        <div className='utilities_btn'>
                            <button className='accept' onClick={() => {setEditUtilityPopup(true); setUtilitiesObj(item)}}>Edit</button>
                            <button className='reject' onClick={() => {setRemoveUtilityPopup(true); setUtilitiesObj(item)}}>Remove</button>
                            {/* <div className="utilities_delete">
                                <label className="switch">
                                    <input type="checkbox" checked={item.isActive === 1 ? false : true }/>
                                    <span className="slider round" onClick={() => handleToggle(item, index)}></span>
                                    <p className="helping">If toggle is on, it will hide this category</p>
                                </label>
                            </div> */}
                        </div>
                    </div>  
                ))
            }
        </>

    )
}

export default UtilityCard