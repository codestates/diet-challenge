import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MainPost() {
  const latest = useSelector((state) => state.userreducer.latest);

  return (
    <div className="conatainer">
      <div className="gallery">
        <div className="picture">15.13</div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHrmpzOG2EyzjEXAFocxaOc4OmSY33_vDXA&usqp=CAU"
          type="picture"/>
        <div className="member1">산책</div>
        <Link to="/createpost">
          <button>새 글 쓰기</button>
        </Link>
      </div>
    </div>
  );
}
export default MainPost;
