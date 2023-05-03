import React, {useState} from 'react'

import DeleteComment from "../deleteComment"

import ImgLike from '../../../assets/images/like.png'
import ImgComment from '../../../assets/images/comment.png'
import ImgShare from '../../../assets/images/share.png'
import Avatar from '../../../assets/images/avatar.png'
import cross from '../../../assets/images/cross2.png'
import del from '../../../assets/images/delete (2).png'

const Index = ({data, setPopupModal, commentList, getComments, getUserPost}) => {

    const [commentDel, setCommentDel] = useState(false)
    const [id, setId] = useState("")

  return (
    <div className='post'>
    {data?.postId && <div className="post_inner">
        {commentDel && <DeleteComment getUserPost={getUserPost} getComments={getComments} setCommentDel={setCommentDel} delId={id} commentDel={commentDel}  />}
        <div className="post_img">
            {
                (data.mediaUrl.endsWith('.mp4') || data.mediaUrl.endsWith('.MOV') ) ?
                <div className="social_play">
                   
                    <video width={450} loop autoPlay muted>
                        <source src={data.mediaUrl} type="video/mp4"/>
                    </video>                            
                </div>
                :<img src={data.mediaUrl} alt="" />
            }
            <img className="post_close" src={cross} alt='' onClick={() => setPopupModal(false) }/>
            <p className="post_title">{data.title}</p>
        </div>
        <p className="post_tag">{data.caption}</p>
        <div className="post_top">
            <div className="post_userImg">
                <img src={data.profileImage} alt="" />
            </div>
            <p className="post_userName">{data.username?.substr(0, 20)}</p>
            <p className="post_time">{data.createdAt.substr(0, 10)}</p>
        </div>
        <div className="post_icons">
            <div className="post_likes">
                <img src={ImgLike} alt=""/>
                <p>{data.likesCount}</p>
                <p className="post_userName">Likes</p>
                
            </div>
            <div className="post_likes">
                <img src={ImgComment} alt=""/>
                <p>{data.commentsCount}</p>
                <p>Comment</p>
            </div>
            {/* <div className="post_share">
                <img src={ImgShare} alt="" />
                <p>Share</p>
            </div> */}
        </div>
        <div className="post_comments">
            {commentList.length > 0 && commentList.map((item, index) => (
                <div className="post_comment" key={index}>
                    <div>
                        <div className="post_commentImg">
                            <img src={item.profileImage ? item.profileImage : Avatar} alt="" />
                        </div>
                        <p className="post_commentName">{item.username?.substr(0, 20)}</p>
                        <div className="post_commentDays">
                            <img src={del} alt="" onClick={() =>{setId(item.id); setCommentDel(true)}} />
                        </div>
                    </div>
                    <p className="post_commentText">{item.comment}</p>
                </div>
            ))}
        </div>        
    </div>
    }
</div>
  )
}

export default Index