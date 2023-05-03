import React, {useState, useEffect} from 'react'
import Leftbar from '../../components/leftbar'
import Cards from "../../components/cards";
import SocialCard from '../../components/cards/SocialCards';
import JOMinstance from '../../../api';
// import instance from '../../components/api/api';


const Posts = () => {

    const [postList, setPostList] = useState([])

    const getUserPost = () => {
        JOMinstance.post("user/explorePage").then((res)=> {
            setPostList(res.data.data.successResult)
        })
    }
    useEffect(() => {
        getUserPost()
    }, [])
    
  return (
    <div>
        <div className='main_layout'>
            <Leftbar index={13}/>
            <div className='right_bar'>
                <Cards />
                    <div className='social'>
                        <p className='social_mainTitle'>All Posts</p>
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

export default Posts