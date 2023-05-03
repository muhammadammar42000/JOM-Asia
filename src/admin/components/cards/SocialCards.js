import { useState, useRef, useEffect } from "react";
import JOMinstance from "../../../api";

import Avatar from "../../assets/images/avatar.png";
import ImgComment from "../../assets/images/comment.png";
import ImgShare from "../../assets/images/share.png";
import like from "../../assets/images/like.png";
import ImgOption from "../../assets/images/option.png";
import ImgDelete from "../../assets/images/delete (2).png";
// import instance from '../api/api'
// import ConfirmationModal from '../popup/confirmation'
import Posts from "../popup/posts";

const SocialCard = ({ data, getUserPost }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [popupModal, setPopupModal] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [delId, setDelId] = useState("");

  const deletePost = (e, id) => {
    e.preventDefault();
    JOMinstance.post("admin/deletePost", { postId: id }).then((res) => {
      getUserPost();
      setShowDropDown(false);
    });
  };
  const getComments = () => {
    JOMinstance.post("user/getPostComment", { postId: data.postId }).then(
      (res) => {
        const temp = res.data.data.successResult.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        setCommentList(temp);
      }
    );
  };
  useEffect(() => {
    if (popupModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [popupModal]);
  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="social_card">
      {/* <ConfirmationModal
        setConfirmModal={setConfirmModal}
        confirmModal={confirmModal}
        getUserPost={getUserPost}
        delId={delId}
        setShowDropDown={setShowDropDown}
      /> */}
      {popupModal && (
        <Posts
          getUserPost={getUserPost}
          getComments={getComments}
          commentList={commentList}
          data={data}
          setPopupModal={setPopupModal}
          popupModal={popupModal}
        />
      )}
      <div className="social_top">
        <div>
          <div className="social_userImg">
            <img src={data.profileImage ? data.profileImage : Avatar} alt="" />
          </div>
          <p className="social_userName">{data?.username?.substr(0, 20)}</p>
        </div>
        <p className="social_time">{data.createdAt.substr(0, 10)}</p>
        <div>
          <div className="social_options">
            <img
              src={ImgOption}
              alt=""
              onClick={() => setShowDropDown(!showDropDown)}
            />
            {showDropDown && (
              <div className="social_dropdown">
                <ul>
                  <li onClick={(e) => deletePost(e, data.postId)}>
                    <a href="/#">
                      <img src={ImgDelete} alt="" /> Delete
                    </a>
                  </li>
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      setDelId(data.postId);
                      setConfirmModal(true);
                    }}
                  >
                    <a href="/#">
                      <img src={ImgDelete} alt="" /> Delete
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="social_img" onClick={() => setPopupModal(true)}>
        {data.mediaUrl.endsWith(".mp4") || data.mediaUrl.endsWith(".MOV") ? (
          <div className="social_play">
            <video width="400" loop autoPlay muted>
              <source src={data.mediaUrl} type="video/mp4" />
            </video>
          </div>
        ) : (
          <img src={data.mediaUrl} alt="" />
        )}

        <div className="social_title">
          <p>{data.title}</p>
        </div>
      </div>
      <div className="social_tag">
        <p>{data.caption}</p>
      </div>
      <div className="social_icons">
        <div className="social_likes">
          <img src={like} />
          <p>{data.likesCount}</p>
          <p>Like</p>
        </div>
        <div className="social_likes">
          <img src={ImgComment} alt="" />
          <p>{data.commentsCount}</p>
          <p>Comments</p>
        </div>
        <div className="social_share">
          <img src={ImgShare} alt="" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
