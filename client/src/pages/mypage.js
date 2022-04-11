import React, { useState } from "react";
import axios from "axios";




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
    <div className="mypageContainer">
      <div>
        <h1 className="title">Mypage</h1>
        <button className="logoutBtn" onClick={handleLogout}>
          logout
        </button>
      </div>
      <div className="item">나의 유저 네임: {userinfo.userId}</div>
      <div className="item">나의 닉네임: {userinfo.usernickname}</div>
      <div className="item">나의 목표: {userinfo.goal}</div>
    </div>
)
}
export default Mypage