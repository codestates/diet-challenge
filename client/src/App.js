import Main from "./pages/main";
import Home from "./pages/home";
import Signup from "./pages/signup";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  const testfunction = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Home /> : <Main setIsLogin={setIsLogin} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <div>
        <button className="test" type="butten" onClick={testfunction}>
          로그인
        </button>
        <Link to="/signup">
          <button className="test" type="butten">
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
