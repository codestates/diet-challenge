import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";




function Mypage(){
    const [userinfo, setuserinfo] = useState({
        userid: "",
        password: "",
        passwordcheck: "",
        usernickname: "",
        goal: "",
      });
      
  
const handleLogout = () => {
    axios.post(
    `${process.env.REACT_APP_API_URL}/users/`,
        {userid: userinfo.userid },
        { usernickname:userinfo.usernickname},
        { goal:userinfo.goal}
        )
        .then(() => {
            // props.logouthandleer()
        })
        .catch(() => {
           alert("로그아웃 되었습니다.") 
        })
}
return (
  <div className="video-app">
      <div className="header">
        <div className="header-left">
          <div className="logo-title">Diet-challenge</div>
        </div>
        <div className="header-menu">
          <Link to="/">
            <div className="header-menu">Home</div>
          </Link>
        </div>
      </div>
  <div className="wrap">
  <div className="form-wrap">
  <div className="bottom-wrap">
      <div>
        <div className="mypage-header">
        <div className="header-box block">
        <div class="middle-container container">
        <div class="profile block">
        <a class="add-button" href="#28"><span class="icon entypo-plus scnd-font-color"></span></a>
        <div class="profile-picture middle-profile-picture clear">
        <img alt="" src="../pages/img/pngegg.jpg" />
        </div>
      <div className="item">나의 유저 네임: {userinfo.userId}</div>
      <div className="item">나의 닉네임: {userinfo.usernickname}</div>
      <div className="item">나의 목표: {userinfo.goal}</div>
        <button className="logoutBtn" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
        </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
 
  
)
}
export default Mypage