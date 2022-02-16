import React from "react";
import Preloader from "../../common/preloader/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.userField}>
      <div className={classes.image}>
        <img
          src="http://dgdesign.ru/uploads/posts/2018-11/1543390519_shapka-sayta-priroda-1622317.jpg"
          alt="top_image"
        />
      </div>
      <div className={classes.infoField}>
        <div className={classes.nameAvaWrapper}>
          <div className={classes.name}>{props.profile.fullName}</div>
          <div className={classes.avatar}>
            <img
              src={
                props.profile.photos.large
                  ? props.profile.photos.large
                  : "https://clck.ru/asqy8"
              }
              alt="ava"
            />
          </div>
        </div>
        <div className={classes.aboutMe}>
          <span>
            about me:{" "}
            {props.profile.aboutMe
              ? props.profile.aboutMe
              : "я не придумал сюда текст"}
          </span>
        </div>
        <div className={classes.lookingForAJob}>
          <span>
            looking for a job:{" "}
            {props.profile.lookingForAJob ? "in search" : "already working"}
          </span>
        </div>
        <div className={classes.lookingForAJobDescription}>
          <span>
            looking for a job description:{" "}
            {props.profile.lookingForAJobDescription
              ? props.profile.lookingForAJobDescription
              : "и сюда текст я не придумал тоже"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
