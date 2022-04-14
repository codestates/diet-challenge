import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Friends } from "../components/friend/index";
import axios from "axios";
import { setAccessToken, setLogin, setMainPage, test } from "../actions/index";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { FriendList } from "../components/friend/list";
import Body from "../components/body";
import Mypage from "../pages/mypage";
import CreatePost from "../components/mypost";
import Myposts from "../components/myposts"

axios.defaults.withCredentials = true;

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = useSelector((state) => state.userreducer.accessToken);
  const reduxtest = useSelector((state) => state.userreducer.test);
  const initialState = useSelector((state) => state.userreducer);
  const img = useSelector((state) => state.userreducer.img);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((data) => {
        dispatch(setMainPage(data.data.data));
      })
      .catch(() => {
        console.log("error");
      });
  }, [initialState]);

  const Logout = () => {
    dispatch(setLogin());
    dispatch(setAccessToken(""));
    navigate("/");
  };

  const testfunction = () => {
    console.log(img);
  };

  return (
    <div className="video-app">
      <div className="header">
        <div className="header-left">
          <div className="logo-title">Diet challenge</div>
        </div>
        <div className="header-menu">
          <Link to="/">
            <div className="header-menu1">Home</div>
          </Link>
          <Link to="/mypost">
            <div className="header-menu1">My posts</div>
          </Link>
          <Link to="/mypage">
            <div className="header-menu1">mypage</div>
          </Link>
          <div className="header-menu1" onClick={Logout}>
            Log out
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="left-side">
          <div className="side-wrapper"></div>
          <div className="side-wrapper">
            <div className="side-menu">
              <div className="side-title">친구요청</div>
              <div className="search">
                <div className="btn">
                </div>
              </div>
            </div>
            <Friends />
          </div>
          <div className="side-wrapper">
            <div className="side-menu">
              <div className="side-title">친구목록</div>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="body-container">
            <div></div>
               <div className="body-menu">
                <div id="top-banner" className="banner">
                    <h1 className="home-header">Diet challenge</h1>
                    <h2 className="home-header1">
                    다이어트 n년차! 이번엔 성공하자 
                    친구와 함께 기록을 공유하며 함께 성공해요
                    </h2>
                    <p className="member1">See what's my activity
                    {img && <img class="profile"src={img} alt="profile-cover" />}{" "}
                    <button onClick={testfunction}>테스트</button>
                  <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/createpost" element={<CreatePost />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route path="/mypost" element={<Myposts />} />
                  </Routes>
                      </p>
                    </div>
                  
                    </div>
                  <div className="footer">
                  <div className="footer-wrap">
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            
       
   

  );
}
export default Home;
