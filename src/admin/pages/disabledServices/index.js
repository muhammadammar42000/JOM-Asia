import React, {useEffect, useState} from 'react'
import Leftbar from '../../components/leftbar'
import Cards from '../../components/cards'
import RequestsTable from '../../components/tables/requests/allRequests'
import Data from "../service-provider/data"
import { useLocation } from 'react-router-dom'
import JOMinstance from '../../../api'

const Index = () => {

    const [categories, setCategories] = useState([])
    const [id, setId] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [df, setDF] = useState("")
    const [subCategories, setSubCategories] = useState([])
    const [loader, setLoader] = useState(true);
    const location = useLocation();
    const state = location.state;

    const getCategory = () => {        
        JOMinstance.post("admin/getAdminCategories").then(res => {
            setCategories(res.data.data.successResult)
        })    
    }
    // const geTest = () => {        
    //     instance.post("admin/getDisabledServiceProviders").then(res => {
    //         // setCategories(res.data.data.successResult)
    //         console.log("first", res.data)
    //     })    
    // }
    const getAllSubCatgeories = (name) => {
        const array = []
       
        if(name === 'Places') {
            const body = {
                type: "place"
            }
            JOMinstance.post("admin/getPlaces", body).then(res => {
              setSubCategories(res.data.data.successResult)
              setLoader(false)
          })
        } 
        else {
            const body = {
                categoryId: id
            }
            JOMinstance.post("admin/getDisabledServiceProviders", body).then(res => {
            setSubCategories(res?.data?.data?.successResult)
            setLoader(false)

            // const array = []
            // res?.data?.data?.successResult?.forEach((item, index) => {
            //     const obj = {}
            //     if(item.isActive === 0) {
            //         obj.adminApproved = item.adminApproved
            //         obj.audioFile = item.audioFile
            //         obj.businessAddress = item.businessAddress
            //         obj.businessName = item.businessName
            //         obj.categoryId = item.categoryId
            //         obj.categoryImage = item.categoryImage
            //         obj.categoryName = item.categoryName
            //         obj.companyName = item.companyName
            //         obj.coordinates = item.coordinates
            //         obj.createdAt = item.createdAt
            //         obj.description = item.description
            //         obj.email = item.email
            //         obj.id = item.id
            //         obj.image = item.image
            //         obj.isActive = item.isActive
            //         obj.isBookable = item.isBookable 
            //         obj.isDeleted = item.isDeleted
            //         obj.logo = item.logo
            //         obj.password = item.password
            //         obj.phone = item.phone
            //         obj.ratings = item.ratings
            //         obj.subCategoryId = item.subCategories
            //         obj.termsAndConditions = item.termsAndConditions
            //         obj.tier = item.tier
            //         obj.updatedAt = item.updatedAt
            //         obj.website = item.website
            //         array.push(obj)
            //     }
            // })
            // setSubCategories(array)
        })
        }
  
      }

    useEffect(() => {
        getCategory()
        getAllSubCatgeories()
    }, [id])
    useEffect(() => {
        if(state) {
            setId(state.categoryId)
            setDF(state.categoryName)
        }
    }, [])
    
  return (
    <div>
        <div className="main_layout">
            <Leftbar index={60} />
            <div className="right_bar">
                <Cards />
                <div className='requests'>
                    <div className='requests_heading'>
                        <p>Disabled Services</p>
                            <div>
                                {/* <input type='text' placeholder='Search Business Name' className='requests_search' onChange={(e) => setSearchValue(e.target.value)}/> */}
                                    <input className="noti_input" type='text' placeholder='Search Business Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                                    <select onClick={(e)=> {setId(e.target.value); setDF(e.target.selectedOptions[0].getAttribute('data-set'))}}>
                                    <option value="DEFAULT" disabled>Select Category</option>
                                    <option value={id} selected disabled hidden>{df}</option>
                                        <option value=''>All</option>
                                        {categories && categories.map((item, index) => (<option data-set={item.name} key={item.id} value={item.id}>{item.name}</option>))}
                                    </select>
                            </div> 
                    </div>
                 {loader &&        
                <div className="loaderSmall">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>}
                    <Data from="disabledServices" searchValue={searchValue}  getAllSubCatgeories={getAllSubCatgeories} subCategories= {subCategories} status="on" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index