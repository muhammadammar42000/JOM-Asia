import React, {useState} from 'react'
import Editor from "../../popup/services/addPostBtn/editorPopup"
import National from "../../popup/services/addPostBtn/nationalParkPopup"
import Attraction from "../../popup/services/addPostBtn/attractionPopup"
import SelectAttractionList from './addPostBtn/selectAttractionList'

const AddPost = ({addPostPopup, setAddPostPopup}) => {
    const [PopUpEditor, setPopUpEditor] = useState(false)
    const [attractionList, setAttractionList] = useState(false)
    const [PopUpNational, setPopUpNational] = useState(false)
    const [PopUpAttraction, setPopUpAttraction] = useState(false)

  return (
    <div>       
        <Editor setPopUpEditor={setPopUpEditor} PopUpEditor={PopUpEditor} />     
        <National setPopUpNational={setPopUpNational} PopUpNational={PopUpNational}/>
        <Attraction setAddPostPopup={setAddPostPopup} setPopUpAttraction={setPopUpAttraction} PopUpAttraction={PopUpAttraction}/>           
        <SelectAttractionList setAddPostPopup={setAddPostPopup} setAttractionList={setAttractionList} attractionList={attractionList}/>
        <div className={addPostPopup ? "addpost_popup addpost_popup_active" : "addpost_popup"}>
            <div className="addpost_popup_inner" id='style-3'>
                <div className='container'>
                    <div className='main_heading'>
                        <div>Add Post</div>
                        <i className="fa fa-times cross" onClick={() =>setAddPostPopup(false)}></i>
                    </div>
                    {/* <div>
                        <button onClick={() =>{setAttractionList(true); setAddPostPopup(false)}} >Top Places</button>
                    </div> */}
                    <div>
                         <button onClick={() =>setPopUpAttraction(true)}>Attraction Place</button>
                    </div>
                    {/* <div>
                        <button onClick={() =>setPopUpNational(true)}>National Park</button>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost