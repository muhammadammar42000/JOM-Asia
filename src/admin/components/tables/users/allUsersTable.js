import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../api/api";
import { toast } from "react-toastify";

import icon from "../../../assets/images/user.jpg";
import ViewUser from "../../popup/users/viewUser";
import DeleteUser from "../../popup/users/deleteUser";
import JOMinstance from "../../../../api";

const AllUsersTable = ({
  users,
  getUsers,
  searchValue,
  filterType,
  verType,
  setFilterData,
  filterData,
}) => {
  const [viewPopup, setViewPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [objToSend, setObjToSnd] = useState({});
  const navigate = useNavigate();
  toast.configure();

  useEffect(() => {
    if (searchValue) {
      if (filterType === "name") {
        const data = users?.filter((item) =>
          item?.username?.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilterData(data);
      } else if (filterType === "email") {
        const data = users?.filter((item) =>
          item?.email?.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilterData(data);
      }
    } else if (filterType === "version") {
      if (verType === "all") {
        const data = users?.filter((item) => item?.version !== null);
        setFilterData(data);
      } else {
        const data = users?.filter((item) =>
          item?.version?.toLowerCase().includes(verType.toLowerCase())
        );
        setFilterData(data);
      }
    } else {
      setFilterData(users);
    }
    console.clear();
  }, [searchValue, getUsers, filterType, verType]);

  // useEffect(() =>
  // {
  //     const searchtableData = searchValue ?
  //         users?.filter(item => (item?.version?.toLowerCase().includes(searchValue.toLowerCase())
  //             || item?.username?.toLowerCase().includes(searchValue.toLowerCase())
  //             || item?.email?.toLowerCase().includes(searchValue.toLowerCase())))
  //         : users
  //     setFilterData(searchtableData)

  // }, [searchValue, getUsers])

  const handleNavigate = (item) => {
    /* navigate(`/users/userId=${item.id}`) */
    navigate(`/profile/?userId=${item.id}`);
  };

  const handleToggle = (data, index) => {
    const body = {
      userId: data.id,
      status: filterData[index].blockedByAdmin === 1 ? 0 : 1,
      // status: toggle
    };
    JOMinstance.post("admin/blockUser", body).then((res) => {
      const msg =
        body.status === 1
          ? "This user is successfully blocked"
          : "This user is unblocked now";

      toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      getUsers();
    });
  };
  return (
    <div className="pending_table">
      {/* <ViewUser viewPopup={viewPopup} setViewPopup={setViewPopup} objToSend={objToSend} />
            <DeleteUser getUsers={getUsers} deletePopup={deletePopup} setDeletePopup={setDeletePopup} objToSend={objToSend} /> */}
      <table>
        <tr className="pending_table_header">
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact No</th>
          <th>Version</th>
          {/* <th>No of Posts</th> */}
          <th>Block/Unblock</th>
          <th>View</th>
          {/* <th>Delete</th> */}
        </tr>
        {filterData &&
          filterData.map((item, index) => (
            <tr className="pending_table_rows">
              <td>
                <img
                  className="userImage"
                  src={item.profileImage ? item.profileImage : icon}
                  alt=""
                />
              </td>
              <td>{item?.username?.substr(0, 20)}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.version ? item.version : "-"}</td>
              {/* <td>{item.postsCount}</td> */}
              <td>
                <div className="pending_table_delete">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={item.blockedByAdmin === 0 ? false : true}
                    />
                    <span
                      className="slider round"
                      onClick={() => handleToggle(item, index)}
                    ></span>
                    <p className="helping">
                      If toggle is on, it will block{" "}
                      {item.username?.substr(0, 20)}
                    </p>
                  </label>
                </div>
              </td>
              {/* <td><i className="fas fa-eye" onClick={() => {setViewPopup(true); setObjToSnd(item) }}></i></td> */}
              <td>
                <i
                  className="fas fa-eye"
                  onClick={() => handleNavigate(item)}
                ></i>
              </td>
              {/* <td><i className="fas fa-trash" onClick={() => {setDeletePopup(true); setObjToSnd(item) }}></i></td> */}
            </tr>
          ))}
      </table>
    </div>
  );
};

export default AllUsersTable;
