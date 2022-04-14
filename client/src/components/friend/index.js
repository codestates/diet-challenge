import React from "react";
import { Requst } from "./requst";
import { FriendList } from "./list";
import { Addfriend } from "./addfriend";
import { useDispatch, useSelector } from "react-redux";

export const Friends = () => {
  const allfriendlist = useSelector((state) => state.userreducer.friends);

  const friendlist = allfriendlist.filter((el) => {
    return el.request === 1;
  });
  const requestfriend = allfriendlist.filter((el) => {
    return el.request === 0;
  });

  return (
    <div className="app-body-side">
      <div className="side-wrpper">
        <div className="side-menu">
          <Addfriend />
          <div className="side-title">친구요청</div>
        </div>

        {requestfriend.map((el) => {
          return (
            <Requst name={el.nickname} id={el.friendId} tableid={el.tableId} />
          );
        })}
      </div>
      <div className="side-menu">
        <div className="side-title">친구목록</div>
      </div>

      {friendlist.map((el) => {
        return <FriendList name={el.nickname} id={el.friendId} />;
      })}
    </div>
  );
};
