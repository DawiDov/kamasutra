import React from "react";  
import classes from "./SideItem.module.css";

const SideItem = (props) => {

    let Friend = props.state.map(f => {
        return <>
                <div className={classes.friendAva}>
                    <img src={f.ava} alt="ava" />
                </div>
                <div className={classes.friendName}>
                    {f.name}
                </div>
                </>
                

    }
        )

    return <div className={classes.friendWrapper}>
            { Friend }
          </div>
}
export default SideItem;