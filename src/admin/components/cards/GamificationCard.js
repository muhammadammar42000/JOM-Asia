import React, {useEffect, useState} from 'react'
import pic4 from '../../assets/images/johor-admin-assets-30.png'
import starIcon from "../../assets/images/Untitled-2-08.png";
import { CustomHeader, CustomPagination } from '../custom-pagination';


const GamificationCard = ({gameLevel, userLevelSearch, getUserLevel}) => {

    const [filterData, setFilterData] = useState([])
    const [loader, setLoader] = useState(true);

    // Pagination
    const [currentItems, setCurrentItems] = useState(null);
    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    // Pagination
    // useEffect(() => {
    // const offset = currentPage * rowsPerPage     
    // setCurrentItems(filterData.slice(offset, parseInt(offset) + parseInt(rowsPerPage)))
    // }, [currentPage, rowsPerPage, getUserLevel, filterData])

    // // Searching
    // useEffect(() => {
    //     const searchtableData = userLevelSearch ? gameLevel?.filter(item => item?.fullname?.toLowerCase().includes(userLevelSearch.toLowerCase())) : gameLevel
    //     setFilterData(searchtableData)    
    //     }, [userLevelSearch, getUserLevel, rowsPerPage])

    useEffect(() => {
        setFilterData(gameLevel)
        const offset = currentPage * rowsPerPage 
        const data = gameLevel?.slice(offset, parseInt(offset) + parseInt(rowsPerPage))
        const filter = userLevelSearch ? data.filter(item => item?.fullname?.toLowerCase().includes(userLevelSearch.toLowerCase())) : data
        setLoader(false)
        setCurrentItems(filter)
    }, [userLevelSearch, getUserLevel, currentPage, rowsPerPage])

  return (
    <div>
    <div className="left_body" id="style-3">
            {
                loader &&        
                <div className="loaderSmall">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            }
        {
            currentItems && currentItems.map((item, index) => (
                <div className="left_cards">
                <div className="left_cards_top">
                    <div><img src={item.profileImage ? item.profileImage : pic4} alt="" /></div>
                        <div className="text">
                        <p className="name">{item?.fullname?.substr(0, 20)}</p>
                        <p className="level">Rank {item.rank}</p>
                    </div>
                </div>
                <div className="left_cards_middle">
                        <div className="img_text">
                            <img src={starIcon} alt="" />
                            <p>Total earn points</p>
                        </div>
                            <p className="img_text_number">{item.earnedpoints}</p>
                </div>
                {/* <div className="left_cards_bottom">
                    <div className="img_bar">
                        <ProgressBar variant="success" now={(parseInt(item.earnedpoints) / 10000 * 100 )} />
                    </div>
                    <div className="level_bar">
                        <div>
                            <img src={yellow2k} alt=""/>
                        </div>
                        <div>
                            <img src={silver5k} alt=""/>
                        </div>
                        <div>
                            <img src={silver10k} alt=""/>
                        </div>                        
                    </div>
                </div> */}
        </div>
            ))
        }
    </div>
        <div className='myPagination'>
            <CustomHeader 
                filterData={filterData} 
                rowsPerPage={rowsPerPage} 
                setRowsPerPage={setRowsPerPage} 
                setCurrentPage={setCurrentPage} 
            />
            <CustomPagination 
                filterData={filterData} 
                rowsPerPage={rowsPerPage} 
                setCurrentPage={setCurrentPage} 
                currentPage={currentPage}
            />
        </div>
    </div>
  )
}

export default GamificationCard