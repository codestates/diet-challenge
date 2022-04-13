import Main from "./pages/main";
import Home from "./pages/home";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  const login = useSelector((state) => state.userreducer.isLogin);
  const accessToken = useSelector((state) => state.userreducer.accessToken);

  const testreduxfunction = () => {
    console.log(accessToken);
    // dispatch(test());
    // console.log(reduxtest);
  };

  return (
    <div>
      <Routes>
        <Route path="/*" element={login ? <Home /> : <Main />} />
      </Routes>
      <div>
        <button className="test" type="butten" onClick={testreduxfunction}>
          테스트
        </button>
        <Link to="/createpost">
          <button className="test" type="butten">
            포스트1
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
