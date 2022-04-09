// 아이디 비밀번호 입력 구현
// 로그인x 시 보이는 첫 화면
// 웹 사이트에 대한 설명 추가

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Main({ setIsLogin, setAccessToken }) {
  const [userinfo, setuserinfo] = useState({
    userId: "",
    userPassword: "",
  });
  const navigate = useNavigate();

  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    console.log(userinfo);
    if (userinfo.userId === "" || userinfo.userPassword === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
    } else {
      axios
        .post("http://localhost:4000/users/login", userinfo, {
          "Content-Type": "application/json",
          withCredentials: true,
        })
        .then((data) => {
          setAccessToken(data.data.data.accessToken);
          setIsLogin(true);

          navigate("/");
        })
        .catch((err) => {
          alert("아이디와 비밀번호가 틀렸습니다.");
        });
    }
  };
  return (
     <div className="video-app">
          <div className="header">
          <div className="header-left">
            <div className="logo-title">
                Diet-challenge
            </div>            
          </div>
          <div className="header-menu">   
          <div className="header-menu">회원가입</div>   
          <div className="header-menu">mypage</div>   
          </div>
          <span>
            아이디   
          <input type="id" onChange={handleInputValue("userId")} />
          <div></div>
          
          </span>
          <span>
              비밀번호
          </span>
          <div></div>
          <input type="password" onChange={handleInputValue("userPassword")} />
          <button type="button" onClick={handleLogin}>
              로그인
          </button> 
          </div>
        <div className="wrapper">
          <div className="left-side">
            <div className="side-wrapper"> 
            </div>
            <div className="side-wrapper">
              <div className="side-menu">
                <div className="side-title">친구요청</div>
              </div>
            </div>
            <div className="side-wrapper">
              <div className="side-menu">
                <div className="side-title">친구목록</div>
             </div>
            </div>
          </div>
            <div className="wrapper">
                <div className="app-body">
                    <div className="body-title">
                       
                    </div>
                </div>
                </div>        
            <div className="footer">
              <div className="footer-row">
                <div className="footer-links">
                </div>
              </div>
              <div className="footer-row">
              </div>
            </div>
          </div>
          <div className="footer-last">
          </div>
        </div>
      
    );
}
export default Main;
