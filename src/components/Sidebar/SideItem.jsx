import React from "react";
import classes from "./SideItem.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import remove from "../../assets/images/remove.png";

const SideItem = (props) => {
  let Friend = props.friends.map((u) => {
    if (u.followed === true) {
      return (
        <div key={u.id}>
          <div className={classes.friendAva}>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt={u.name}
              />
            </NavLink>
            <div
              onClick={() => {
                props.unFollow(u.id);
              }}
              className={classes.removeLink}
            >
              <img src={remove} alt="removeLink" />
            </div>
          </div>
          <div className={classes.friendName}>{u.name}</div>
        </div>
      );
    }
  });
  return <div className={classes.friendWrapper}>{Friend}</div>;
};

export default SideItem;
