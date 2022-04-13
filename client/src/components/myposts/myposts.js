import React from "react";

function MyPost({ id }) {
  return (
    <div className="videos">
      <div className="video">
        <div className="picture">{id}</div>
        <video muted>
          <img src type="picture" />
        </video>
        <div className="video-content">Planning Helps Make</div>
        <div className="view">15.4k views</div>
      </div>
    </div>
  );
}
export default MyPost;
