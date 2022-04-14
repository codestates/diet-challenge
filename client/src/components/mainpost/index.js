import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MainPost() {
  const latest = useSelector((state) => state.userreducer.latest);

  return (
    <section className="popup popup-picture">
        <Link to="/createpost">
          <button className="new1">새 글 쓰기</button>
        </Link>
    <form className="popup-picture_case">
      <div className="card">
        
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHrmpzOG2EyzjEXAFocxaOc4OmSY33_vDXA&usqp=CAU" className="card_image1" alt="2002 강아지와" />
    <div className="card_photo-name1">
      <p className="card_photo-title1">
        강아지와 산책
      </p>
    </div>
        </div>
    </form>
     </section>
     
  );
}
export default MainPost;
