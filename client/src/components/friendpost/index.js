import React from "react";

function FriendPost({ info, img }) {
  return (
    <section className="popup popup-picture">
      <div className="container">
        <form className="grid-image">
          <div className="picture">
            <img
              src={`${process.env.REACT_APP_API_URL}${img}`}
              className="card_image"
            />
            <p className="card_photo-title2">{info}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
export default FriendPost;
