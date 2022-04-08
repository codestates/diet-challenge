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
        <div className="dark-light">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d /></svg>
        </div>
        <div className="header">
          <div className="header-left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" /></svg>
            <div className="logo">
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="header-menu">
            <div className="menu-item active">Home</div> 
            <div className="menu-item">Categories</div>
            <div className="menu-item notify">Subscriptions</div>
          </div>
          <div className="user-settings">
            <button className="button">
              <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 512.06 512.06">
                <path d />
                <path d="M245.03 253.66l-64 64 22.56 22.56 36.8-36.64v153.44h32V303.58l36.64 36.64 22.56-22.56-64-64a16 16 0 00-22.55 0z" /></svg>
              Upload
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" /></svg>
            <img className="user-profile " src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 492 492">
              <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z" /></svg>
          </div>
        </div>
        <div className="wrapper">
          <div className="left-side">
            <div className="side-wrapper">
              <div className="side-menu">
                <a href="#">
                  <svg width={20} height={17} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path id="a" d="M13 22v-6h4v6h5v-8h3L15 5 5 14h3v8z" />
                    </defs>
                    <g transform="translate(-5 -5)" fill="none" fillRule="evenodd">
                      <mask id="b" fill="currentColor">
                        <use xlinkHref="#a" />
                      </mask>
                      <g mask="url(#b)" fill="currentColor">
                        <path d="M2 2h26v26H2z" />
                      </g>
                    </g>
                  </svg>
                  Home
                </a>
              </div>
            </div>
            <div className="side-wrapper">
              <div className="side-menu">
                <div className="side-title">친구요청</div>
                <button className="button show-more">Show More
                </button>
              </div>
            </div>
            <div className="side-wrapper">
              <div className="side-menu">
                <div className="side-title">친구목록</div>
                <button className="button show-more">Show More
                </button>
              </div>
            </div>
          </div>
        <div className="wrapper">
          <div className="right-side">
            <div className="side-wrapper">
              <div className="side-menu">
                <a href="#">
                  <svg width={20} height={17} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <path id="a" d="M13 22v-6h4v6h5v-8h3L15 5 5 14h3v8z" />
                    </defs>
                    <g transform="translate(-5 -5)" fill="none" fillRule="evenodd">
                      <mask id="b" fill="currentColor">
                        <use xlinkHref="#a" />
                      </mask>
                      <g mask="url(#b)" fill="currentColor">
                        <path d="M2 2h26v26H2z" />
                      </g>
                    </g>
                  </svg>
                  친구  
                 </a>       
              </div>
            </div>
            <div className="side-wrapper">
                <div className="side-menu">
                    <div className="side-title">
                        친구목록
                    </div>
                </div>
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
