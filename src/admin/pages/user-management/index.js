import React, { useState, useEffect, useRef } from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
// import ClickOutside from "../../components/click-outisde";
import AllUsersTable from "../../components/tables/users/allUsersTable";
import JOMinstance from "../../../api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("email");
  const [verType, setVerType] = useState("all");
  const [versionNo, setVerionsNo] = useState([]);
  const [verUsers, setVerUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filterDD, setFilterDD] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const getUsers = () => {
    JOMinstance.post("admin/getAllUsers").then((res) => {
      setUsers(res.data?.data?.successResult);
      const result = res.data?.data?.successResult.filter(
        (item) => item?.version !== null
      );
      setVerUsers(result);
      setLoader(false);
    });
  };

  const getVersions = () => {
    JOMinstance.post("admin/getversionusers").then((res) => {
      setVerionsNo(res.data?.data?.successResult);
    });
  };
  useEffect(() => {
    getUsers();
    getVersions();
  }, []);

  const componentRef = useRef();
  const componentRef2 = useRef();

  // useEffect(() => {
  //   ClickOutside(componentRef, componentRef2, setFilterDD);
  // }, []);

  return (
    <div>
      <div className="main_layout">
        <Leftbar index={12} />
        <div className="right_bar">
          
          <div className="users_heading">
            <p>Users</p>
            <div className="users_number">
              <div className="users_filter" ref={componentRef2}>
                {filterType === "email" && (
                  <input
                    type="text"
                    placeholder="Search by Email"
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                )}
                {filterType === "name" && (
                  <input
                    type="text"
                    placeholder="Search by Name"
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                )}
                {filterType === "version" && (
                  <select onChange={(e) => setVerType(e.target.value)}>
                    <option value="" selected disabled hidden>
                      Select Version
                    </option>
                    <option value="all">All</option>
                    {versionNo &&
                      versionNo.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    {/* <option value="2.0.0">2.0.0</option>
                                    <option value="3.0.0">3.0.0</option> */}
                  </select>
                )}
                <i
                  className="fas fa-filter"
                  onClick={() => setFilterDD(!filterDD)}
                ></i>

                {filterDD && (
                  <div className="users_filterSection">
                    <p
                      className={filterType === "email" && "selected"}
                      onClick={() => {
                        setFilterType("email");
                        setFilterDD(false);
                        setSearchValue("");
                      }}
                    >
                      Email
                    </p>
                    <p
                      className={filterType === "name" && "selected"}
                      onClick={() => {
                        setFilterType("name");
                        setFilterDD(false);
                        setSearchValue("");
                      }}
                    >
                      Name
                    </p>
                    <p
                      className={filterType === "version" && "selected"}
                      onClick={() => {
                        setFilterType("version");
                        setFilterDD(false);
                        setSearchValue("");
                      }}
                    >
                      Version
                    </p>
                  </div>
                )}
              </div>
              {(searchValue || verType !== "all") && (
                <span>{filterData.length}</span>
              )}
            </div>
            <div className="users_card">
              <div>
                <p className="header">Total Users</p>
                <span>{users?.length}</span>
              </div>
              <div>
                <p className="header">Switched Users</p>
                <span>{verUsers?.length}</span>
              </div>
              <div>
                <p className="header">Remaining Users</p>
                <span>{users?.length - verUsers?.length}</span>
              </div>
            </div>
          </div>

          <Cards />
          <div className="users" ref={componentRef}>
            <div className="requests_body">
              {loader && (
                <div className="loaderSmall">
                  <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
              <AllUsersTable
                setFilterData={setFilterData}
                filterData={filterData}
                searchValue={searchValue}
                filterType={filterType}
                verType={verType}
                getUsers={getUsers}
                users={users}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
