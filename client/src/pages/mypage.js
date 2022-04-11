import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function Mypage() {
  const userinfo = useSelector((state) => state.userreducer.userinfo);

  const Logout = () => {
    console.log(userinfo);
  };

  return (
    <div className="mypageContainer">
      <div>
        <h1 className="title">Mypage</h1>
        <button className="logoutBtn" onClick={Logout}>
          logout
        </button>
      </div>
      <div className="item">나의 유저 네임: {userinfo.userid}</div>
      <div className="item">나의 닉네임: {userinfo.usernickname}</div>
      <div className="item">나의 목표: {userinfo.goal}</div>
    </div>
  );
}
export default Mypage;
