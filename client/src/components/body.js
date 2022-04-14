import React from "react";
import FriendPost from "./friendpost";
import MainPost from "./mainpost";

function Body() {
  return (
    <div className="gallery">
      <div className="profile">
      <div className="profile-cover">
        
         <div className="profile-avatar">
        <MainPost />
         </div>
        <div className="main-container">
          </div>
          </div>
          </div>
              <FriendPost />
          </div>
   
  );
}
export default Body;
