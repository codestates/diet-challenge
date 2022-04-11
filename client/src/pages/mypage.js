import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function Mypage() {
  const [isChange, setIsChange] = useState(false);
  const userinfo = useSelector((state) => state.userreducer.userinfo);

  const handleChange = () => {
    setIsChange(!isChange);
  };

  return isChange ? (
    <div>
      <div className="mypageContainer">
        <div>
          <h1 className="title">Mypage</h1>
        </div>
        <div className="item">
          나의 유저 네임: <input></input>
          <button onClick={handleChange}>정보 수정</button>
        </div>
        <div className="item">
          나의 비밀번호: <input></input>
        </div>
        <div className="item">
          나의 비밀번호 확인: <input></input>
          <button onClick={handleChange}>정보 수정</button>
        </div>
        <div className="item">
          나의 닉네임: <input></input>
          <button onClick={handleChange}>정보 수정</button>
        </div>
        <div className="item">
          나의 목표: <input></input>
          <button onClick={handleChange}>정보 수정</button>
        </div>
        <button onClick={handleChange}>수정완료</button>
      </div>
    </div>
  ) : (
    <div className="mypageContainer">
      <div>
        <h1 className="title">Mypage</h1>
      </div>
      <div className="item">나의 유저 네임: {userinfo.userid}</div>
      <div className="item">나의 닉네임: {userinfo.usernickname}</div>
      <div className="item">나의 목표: {userinfo.goal}</div>
      <button onClick={handleChange}>정보 수정</button>
    </div>
  );
}
export default Mypage;
