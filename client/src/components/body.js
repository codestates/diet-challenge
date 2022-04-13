import React from "react";
import FriendPost from "./friendpost";
import MainPost from "./mainpost";

function Body() {
  return (
    <div className="gallery">
        <MainPost />
      <FriendPost />
    </div>
  );
}
export default Body;
