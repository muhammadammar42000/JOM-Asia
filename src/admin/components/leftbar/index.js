import React, { useState, useEffect, Fragment } from "react";
import homeIcon from "../../assets/images/johor-admin-assets-01.png";
import editorIcon from "../../assets/images/johor-admin-assets-02.png";
import gameIcon from "../../assets/images/Admin-Assests-05.png";
import couponIcon from "../../assets/images/Admin-Assests-06.png";
import notificationIcon from "../../assets/images/Admin-Assests-07.png";
import servicesIcon from "../../assets/images/johor-admin-assets-04.png";
import logoutIcon from "../../assets/images/Admin-Assests-09.png";
import SliderIcon from "../../assets/images/sliders.png";
import bookingIcon from "../../assets/images/booking.png";
import Image360Icon from "../../assets/images/johor-admin-assets-06.png";
import instance from "../api/api";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logoJOM.png";
import ServiceProviderIcon from "../../assets/images/profile.png";
import UserIcon from "../../assets/images/Approach-web-portal-icon-25.png";
import disabledServiceIcon from '../../assets/images/Admin-Assests-08.png'
import postIcon from '../../assets/images/plus.png'

const Leftbar = ({ index }) =>
{
    const navigate = useNavigate();
    const [clickIndex, setClickIndex] = useState(0);
    const [isActive, setIsActive] = useState(false)


    useEffect(() =>
    {
        if (index)
        {
            setClickIndex(index);
        }
    }, [index]);


    const handleLogout = () =>
    {
        const fcmToken = localStorage.getItem('fcmtoken')

        if (fcmToken)
        {
            instance.post("admin/logoutAdmin", { fcmToken }).then((res) =>
            {
                localStorage.clear()
                window.location.reload()
            })
        } else
        {
            window.location.reload()
            localStorage.clear()
        }
    }



    return (
        <Fragment>
            {
                isActive ?
                    <div className="left_bar">
                        <div>
                            <span className="toggle" onClick={() => setIsActive(!isActive)}>&#10006;</span>
                        </div>
                        <div>
                            <img className="top_logo" alt="" src={Logo} />
                        </div>
                        <div className="left_bar_all">
                            <div className={clickIndex === 1 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/home"); setClickIndex(1); }}>
                                <div>
                                    <img src={homeIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Home</div>
                            </div>
                            <div className={clickIndex === 2 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/editor"); setClickIndex(2); }}>
                                <div>
                                    <img src={editorIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Top Places</div>
                            </div>
                            {/* <div className={clickIndex === 0 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => {navigate("/booking");    setClickIndex(0);}}>
          <div>
            <img src={bookingIcon} alt="" />
          </div>
          <div className="left_bar_items_text">Booking</div>
        </div> */}
                            <div className={clickIndex === 3 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/requests"); setClickIndex(3); }}>
                                <div>
                                    <img src={bookingIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Countries</div>
                            </div>

                            <div className={clickIndex === 4 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/services"); setClickIndex(4); }}>
                                <div>
                                    <img src={servicesIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Services</div>
                            </div>

                            <div className={clickIndex === 5 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/disabledServices"); setClickIndex(5); }}>
                                <div>
                                    <img src={disabledServiceIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Disabled Services</div>
                            </div>


                            {/* <div className={clickIndex === 5 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/service-provider"); setClickIndex(5); }}>
                                <div>
                                    <img src={ServiceProviderIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Services Provider</div>
                            </div> */}
                            <div className={clickIndex === 6 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/gamification"); setClickIndex(6); }}>
                                <div>
                                    <img src={gameIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Gamification</div>
                            </div>
                            <div className={clickIndex === 7 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/utilities"); setClickIndex(7); }}>
                                <div>
                                    <img src={couponIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Utilities</div>
                            </div>
                            <div className={clickIndex === 8 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/users"); setClickIndex(8); }}>
                                <div>
                                    <img src={UserIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Users</div>
                            </div>
                            <div className={clickIndex === 9 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/sliders"); setClickIndex(9); }}>
                                <div>
                                    <img src={SliderIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Sliders</div>
                            </div>

                            <div className={clickIndex === 10 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/posts"); setClickIndex(10); }}>
                                <div>
                                <img src={postIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Posts</div>
                            </div>
                            {/* <div className={clickIndex === 9 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/notifications"); setClickIndex(9); }}>
                                <div>
                                    <img src={notificationIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Notifications</div>
                            </div> */}
                            <div className={clickIndex === 11 ? "left_bar_items active_items" : "left_bar_items"} onClick={() => { navigate("/360images"); setClickIndex(11); }}>
                                <div>
                                    <img src={Image360Icon} alt="" />
                                </div>
                                <div className="left_bar_items_text">360 images</div>
                            </div>
                            <div className="left_bar_items" onClick={handleLogout}>
                                <div>
                                    <img src={logoutIcon} alt="" />
                                </div>
                                <div className="left_bar_items_text">Logout</div>
                            </div>
                        </div>
                    </div> :
                    <div className="leftNavBar">
                        <span className="toggle1" onClick={() => setIsActive(!isActive)}>☰</span>
                    </div>
            }
        </Fragment>
    );
};

export default Leftbar;
