import React from "react";  
import classes from "./SideItem.module.css";
import userPhoto from "../../assets/images/user.png";

const SideItem = (props) => {

        let Friend = props.users.map(u => {
            if (u.followed === true) {
                return <div key={u.id}>
                    <div className={classes.friendAva}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={ u.name } alt="ava"/>
                    </div>
                    <div className={classes.friendName}>
                        {u.name}
                    </div>
                </div>
                    }
                }
            )
    return <div className={classes.friendWrapper}>
            { Friend }
          </div>
        }

export default SideItem;