import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Friends } from "../components/friend/index";
import axios from "axios";
import { setAccessToken, setLogin, setMainPage, test } from "../actions/index";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Body from "../components/body";
import Mypage from "../pages/mypage";
import Admin from "./admin";
import CreatePost from "../components/mypost";
import Myposts from "../components/myposts";
import Loading from "../components/loading";

axios.defaults.withCredentials = true;

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const accessToken = useSelector((state) => state.userreducer.accessToken);
  const renderswitch = useSelector((state) => state.userreducer.switch);
  const initialState = useSelector((state) => state.userreducer);
  const authorization = useSelector(
    (state) => state.userreducer.userInfo.authorization
  );

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${process.env.REACT_APP_API_URL}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((data) => {
        dispatch(setMainPage(data.data.data));
      })
      .catch(() => {
        console.log("error");
      });

    setIsLoading(false);
  }, [renderswitch]);

  const Logout = () => {
    dispatch(setLogin());
    dispatch(setAccessToken(""));
    navigate("/");
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="video-app">
      <div className="header">
        <div className="header-left">
          <div className="logo-title">Diet challenge</div>
        </div>
        <div className="header-menu">
          {authorization ? (
            <Link to="/admin">
              <div className="header-menu">Admin</div>
            </Link>
          ) : null}
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
          <div className="side-wrapper">
            <Friends />
          </div>
        </div>

        <div className="wrap">
          <div className="body">
            <div className="body-menu">
              <div id="top-banner" className="banner">
                <h1 className="main-header1">Diet challenge</h1>
                <h2 className="main-header">
                  다이어트 n년차! 이번엔 성공하자 <br />
                  친구와 함께 기록을 공유하며 함께 성공해요
                </h2>
                See what's my activity
              </div>

              <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/createpost" element={<CreatePost />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/mypost" element={<Myposts />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
