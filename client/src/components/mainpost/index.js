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
      {latest === null ? (
        <div>글을 작성 해 주세요</div>
      ) : (
        <form className="popup-picture_case">
          <div className="card">
            <img
              src={`${process.env.REACT_APP_API_URL}${latest.img}`}
              className="card_image1"
            />
            <div className="card_photo-name1">
              <p className="card_photo-title1">{latest.info}</p>
            </div>
          </div>
        </form>
      )}
    </section>
  );
}
export default MainPost;
