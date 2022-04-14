import Main from "./pages/main";
import Home from "./pages/home";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSwitch } from "./actions";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    navigate("/");
  }, []);

  const login = useSelector((state) => state.userreducer.isLogin);
  const accessToken = useSelector((state) => state.userreducer.switch);

  const testreduxfunction = () => {
    dispatch(setSwitch());

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
