import Main from "./pages/main";
import Home from "./pages/home";
import Signup from "./pages/signup";
import CreatePost from "./components/mypost";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAccessToken, setLogin, test } from "./actions/index";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    navigate("/");
  }, []);

  const reduxtest = useSelector((state) => state.userreducer.test); //테스트용 값
  const login = useSelector((state) => state.userreducer.isLogin);
  const accessToken = useSelector((state) => state.userreducer.accessToken);

  const testreduxfunction = () => {
    dispatch(setLogin());
    console.log(accessToken);
    // dispatch(test());
    // console.log(reduxtest);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={login ? <Home /> : <Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
      <div>
        <Link to="/signup">
          <button className="test" type="butten">
            회원가입
          </button>
        </Link>
        <button className="test" type="butten" onClick={testreduxfunction}>
          테스트
        </button>
        <Link to="/createpost">
          <button className="test" type="butten">
            포스트
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
