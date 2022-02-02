import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 30; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.pagination}>
        {pages.map((p) => {
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
        <span className={classes.nextPages}>Next Pages</span>
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={classes.userWrapper}>
          <div className={classes.avaButWrapper}>
            <div className={classes.ava}>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt={u.name}
              />
            </div>
            <div className={classes.button}>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.removeFromFriends(u.id);
                  }}
                >
                  Unsubscribe
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.addAsFriends(u.id);
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
