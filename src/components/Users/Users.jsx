import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Preloader from "../common/preloader/Preloader";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let paginationBeginning =
    props.currentPage - 5 >= 0 ? +props.currentPage - 5 : 0;
  let displayedPages = pages.splice(paginationBeginning, 20);

  return (
    <div className={classes.wrapper}>
      {props.isFetching ? <Preloader /> : null}
      <div className={classes.pagination}>
        {displayedPages.map((p) => {
          return (
            <span
              className={props.currentPage === p && classes.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
        <span className={classes.nextPages}>...</span>
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={classes.userWrapper}>
          <div className={classes.avaButWrapper}>
            <div className={classes.ava}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt={u.name}
                />
              </NavLink>
            </div>
            <div className={classes.button}>
              {u.followed ? (
                <button
                  disabled={props.followingInProgres.some((id) => id === u.id)}
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  Unsubscribe
                </button>
              ) : (
                <button
                  disabled={props.followingInProgres.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Sunscribe
                </button>
              )}
            </div>
          </div>
          <div className={classes.infoWrapper}>
            <div>
              <div className={classes.name}>{u.name}</div>
              <div className={classes.status}>{u.status} ...</div>
            </div>
            <div>
              <div className={classes.city}>Пока нет</div>
              <div className={classes.country}>Пока нет</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
