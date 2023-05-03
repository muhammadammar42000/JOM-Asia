import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Leftbar from '../../components/leftbar'
import Cards from "../../components/cards";
import lvl1 from "../../assets/images/Untitled-2-05.png"
import lvl2 from "../../assets/images/Untitled-2-06.png"
import lvl3 from "../../assets/images/Untitled-2-07.png"
import StarImg from "../../assets/images/Untitled-2-08.png"
import icon from "../../assets/images/user.jpg"
import SocialCard from '../../components/cards/SocialCards';
// import instance from '../../components/api/api';
import JOMinstance from '../../../api';

const Profile = () => {


    const [postList, setPostList] = useState([])
    const [userData, setUserData] = useState({})
    const [bar, setBar] = useState(0)

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    
    const getUserPost = () => {
        JOMinstance.post('admin/getUserProfile', {userId})
        .then(res => {
            setUserData(res.data.data.successResult[0])
            setPostList(res.data.data.successResult[0].posts)
            const points = res.data.data.successResult[0].earnedpoints
            setTimeout(() => {
                setBar((parseInt(points)*100) / 10000)
            }, 300)
        })
    }

    useEffect(() => {
        getUserPost()
    }, [])

    // console.log("userData", )
    return(
        <div>
            <div className='main_layout'>
                    <Leftbar index={12}/>
                <div className='right_bar'>
                    <Cards />
                    <Link to='/users'>
                        <button className="serviceDetails_edit">Go Back</button>
                    </Link>
                    <div className='aprofile'>
                        <div className='aprofile_body'>
                            <div>
                                <div className='aprofile_top'>
                                    <div className="aprofile_left">
                                        <img src={userData.profileImage ? userData.profileImage : icon} alt="" />
                                    </div>
                                    <div className="aprofile_right">
                                        <div>
                                            <p className='aprofile_text1'>Posts</p>
                                            <p className='aprofile_text2'>{userData.postsCount}</p>
                                        </div>
                                        <div>
                                            <p className='aprofile_text1'>Likes</p>
                                            <p className='aprofile_text2'>{userData.likesCount}</p>
                                        </div>
                                        <div>
                                            <p className='aprofile_text1'>Places</p>
                                            <p className='aprofile_text2'>{userData.placesCount}</p>
                                        </div>
                                    </div>
                                </div>                                
                                <div className="aprofile_mid">
                                    <div>
                                        <p className="aprofile_name">{userData?.fullname?.substr(0, 20)}</p>
                                        <p className="aprofile_level">{userData.email}</p>
                                        <p className="aprofile_level">Level {userData.rank}</p>
                                    </div>                  
                                </div>
                                <div className="aprofile_card">
                                    <div className="aprofile_cardTop">
                                        <div>
                                            <img className='aprofile_star' src={StarImg} alt="" />
                                            <p className='aprofile_text'>Total earned points</p>
                                        </div>
                                        <div>
                                            <p className="aprofile_points">{userData.earnedpoints}</p>
                                        </div>
                                    </div>
                                    <div className="aprofile_bar">
                                        <div className="aprofile_barInner" style={{width: `${bar}%`, transition : '2s'}} ></div>
                                    </div>
                                    <div className="aprofile_medals">
                                        <div>
                                            <img src={lvl1} alt="" />                                           
                                        </div>
                                        <div>
                                            <img src={lvl2} alt="" />                                            
                                        </div>
                                        <div>
                                            <img src={lvl3} alt="" />                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='social'>
                        <p className='social_mainTitle'>Social</p>
                    </div>
                    <div className='social_mainCard'>
                        {postList ? postList.map((item, index) => {
                            return (
                                <SocialCard key={index} data={item} getUserPost={getUserPost}/>
                            )
                        }) : <div className='social_error'>No posts</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile