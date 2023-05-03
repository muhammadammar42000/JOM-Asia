import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import JOMinstance from "../../../../api";
import ClickOutside from "../../click-outisde";

const DeleteComment = ({
  setCommentDel,
  commentDel,
  delId,
  getComments,
  getUserPost,
}) => {
  toast.configure();

  const handleBtn = async () => {
    // e.preventDefault()
    try {
      await JOMinstance.post("admin/deleteComment", { commentId: delId }).then(
        (res) => {
          setCommentDel(false);
          toast.success(`Comment Deleted`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          getComments();
          getUserPost();
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

//   const componentRef = useRef();
//   const componentRef2 = useRef();

//   useEffect(() => {
//     ClickOutside(componentRef, componentRef2, setCommentDel);
//   }, []);

  return (
    <div>
      <div
        className={
          commentDel ? "accept_popup accept_popup_active" : "accept_popup"
        }
        // ref={componentRef}
      >
        <div className="accept_popup_inner" >
          <div className="container">
            <div>
              <p className="main_heading">Are you sure ?</p>
              <i
                className="fa fa-times cross"
                onClick={() => setCommentDel(false)}
              ></i>
            </div>
          </div>
          <hr />
          <div className="popup_body">
            <div>
              <button className="accept" onClick={handleBtn}>Delete</button>
              <button className="reject" onClick={() => setCommentDel(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteComment;

// import React, { useState, useRef, useEffect } from "react";

// const DeleteComment = () => {
//   return (
//     <div>
//       <h1>ammar</h1>
//     </div>
//   );
// };

// export default DeleteComment;
