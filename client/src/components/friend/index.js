import React from "react";
import { Requst } from "./requst";
import { FriendList } from "./list";
import { Addfriend } from "./addfriend";
import { useDispatch, useSelector } from "react-redux";

export const Friends = () => {
  const allfriendlist = useSelector((state) => state.userreducer.friends);

  const friendlist = allfriendlist.filter((el) => {
    return el.request === true;
  });
  const requestfriend = allfriendlist.filter((el) => {
    return el.request === false;
  });

  return (
    <div className="app-body-side">
      <div className="side-wrpper">
        <div className="side-title2">친구추가</div>
        <Addfriend />
        <div className="side-title"></div>
        {requestfriend.map((el) => {
          return <Requst name={el.nickname} id={el.friendId} />;
        })}
      </div>

      <div className="side-title1">친구목록</div>
      {friendlist.map((el) => {
        return <FriendList name={el.nickname} id={el.friendId} />;
      })}
    </div>
  );
};
