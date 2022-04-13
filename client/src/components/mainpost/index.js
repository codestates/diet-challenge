import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MainPost() {
  const latest = useSelector((state) => state.userreducer.latest);

  return (
    <div className="videos">
      <div className="video">
        <div className="picture">15.13</div>
        <video muted>
          <img src type="picture" />
        </video>
        <div className="video-content">Planning Helps Make</div>
        <div className="view">15.4k views</div>
        <Link to="/createpost">
          <button>새 글 쓰기</button>
        </Link>
      </div>
    </div>
  );
}
export default MainPost;
