// 아이디 비밀번호 입력 구현
// 로그인x 시 보이는 첫 화면
// 웹 사이트에 대한 설명 추가

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "../components/modal";
import { useDispatch } from "react-redux";
import { setLogin, setAccessToken } from "../actions/index";

function Main() {
  const [userinfo, setuserinfo] = useState({
    userId: "",
    userPassword: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          dispatch(setAccessToken(data.data.data.accessToken));
          dispatch(setLogin());
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
          <div className="logo-title">Diet-challenge</div>
        </div>
        <div className="header-menu">
          <Link to="/signup">
            <div className="header-menu">회원가입</div>
          </Link>
        </div>
        <span>
          아이디
          <input type="id" onChange={handleInputValue("userId")} />
          <div></div>
        </span>
        <span>비밀번호</span>
        <div></div>
        <input type="password" onChange={handleInputValue("userPassword")} />
        <button type="button" onClick={handleLogin}>
          로그인
        </button>
      </div>
      <div className="wrapper">
        <div className="left-side">
          <div className="side-wrapper"></div>
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
              <div className="body-menu">
                <div id="top-banner" className="banner">
                  <div className="banner-inner-wrapper">
                    <h2>
                      다이어트 n년차! 이번엔 성공하자 <br />
                      친구와 함께 기록을 공유하며 함께 성공해요
                    </h2>
                    <h1>Diet challenge</h1>
                    See what's my activity
                    <div className="follow-buttons">
                      <button className="follow">이전</button>
                      <button className="follow follow-option active">
                        다음
                      </button>
                    </div>
                  </div>
                  <div className="videos">
                    <div className="video">
                      <div className="picture">15.13</div>
                      <video muted>
                        <img src type="picture" />
                      </video>
                      <div className="video-content">Planning Helps Make</div>
                      <div className="view">15.4k views</div>
                    </div>
                    <div className="video">
                      <div className="video-time">13.10</div>
                      <video muted>
                        <source
                          src="https://player.vimeo.com/external/356200184.sd.mp4?s=f528556cafba1d369984dc341104e7eef8bb71bb&profile_id=139&oauth2_token_id=57447761"
                          type="video/mp4"
                        />
                      </video>
                      <div className="video-content">This Is Cloaud Break</div>
                      <div className="view">13.2k views</div>
                    </div>
                    <div className="video">
                      <div className="video-time">15.30</div>
                      <video muted>
                        <source
                          src="https://player.vimeo.com/external/364324653.sd.mp4?s=7ded2b451ac7f5dfaf1375277aa0308cdf5d011c&profile_id=139&oauth2_token_id=57447761"
                          type="video/mp4"
                        />
                      </video>
                      <div className="video-content">Lost Your Mind</div>
                      <div className="view">11.7k views</div>
                    </div>
                    <div className="video">
                      <div className="video-time">11.30</div>
                      <video muted>
                        <source
                          src="https://player.vimeo.com/external/399004885.sd.mp4?s=1d39443bef9856dacc4d3ba2c6be0881e38b7e66&profile_id=139&oauth2_token_id=57447761"
                          type="video/mp4"
                        />
                      </video>
                      <div className="video-content">Planning Helps Make</div>
                      <div className="view">9.2k views</div>
                    </div>
                    <div className="video">
                      <div className="video-time">6.35</div>
                      <video muted>
                        <source
                          src="https://player.vimeo.com/external/353556576.sd.mp4?s=8e942d8680fe908418143e63e04b8798982d5bea&profile_id=139&oauth2_token_id=57447761"
                          type="video/mp4"
                        />
                      </video>
                      <div className="video-content">
                        Research In Advertising
                      </div>
                      <div className="view">18.4k views</div>
                    </div>
                    <div className="video">
                      <div className="video-time">2.21</div>
                      <video muted>
                        <source
                          src="https://player.vimeo.com/external/368556609.sd.mp4?s=3fa896a1d6d8c04382a9b8f33053d2eaabe4342b&profile_id=139&oauth2_token_id=57447761"
                          type="video/mp4"
                        />
                      </video>
                      <div className="video-content">See The Unmatched</div>
                      <div className="view">3.4k views</div>
                    </div>
                    <div className="video">
                      <div className="video-time">12.10</div>
                      <video muted>
                        <source
                          src="https://player.vimeo.com/external/285489976.sd.mp4?s=4fa6461f93f18e0d6cfc30461fffb05311d60a28&profile_id=164&oauth2_token_id=57447761"
                          type="video/mp4"
                        />
                      </video>
                      <div className="video-content">Dance In The Air</div>
                      <div className="view">17.4k views</div>
                    </div>
                    <div className="video">
                      <div className="video-time">7.50</div>
                      <video muted>
                        <source
                          src="https://player.vimeo.com/external/325725646.sd.mp4?s=763c0f293299052689f8344b3a155ea2b4a1c92b&profile_id=164&oauth2_token_id=57447761"
                          type="video/mp4"
                        />
                      </video>
                      <div className="video-content">
                        Sadness Will Last Forever
                      </div>
                      <div className="view">12.6k views</div>
                    </div>
                  </div>
                  <div className="load-more">
                    <svg
                      id="me"
                      xmlns="http://w3.org/2000/svg"
                      viewBox="0 0 341.333 341.333"
                      fill="currentColor"
                    >
                      <path d="M341.227 149.333V0l-50.133 50.133C260.267 19.2 217.707 0 170.56 0 76.267 0 .107 76.373.107 170.667s76.16 170.667 170.453 170.667c79.467 0 146.027-54.4 164.907-128h-44.373c-17.6 49.707-64.747 85.333-120.533 85.333-70.72 0-128-57.28-128-128s57.28-128 128-128c35.307 0 66.987 14.72 90.133 37.867l-68.8 68.8h149.333z" />
                    </svg>
                    Load More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
