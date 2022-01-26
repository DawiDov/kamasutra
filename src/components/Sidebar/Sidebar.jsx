import React from "react";  
import classes from "./Sidebar.module.css";
import SideItem from "./SideItem/SideItem";



const Sidebar = (props) => {
    return (
        <div className={classes.sidebarContent}>
            <SideItem friends={props.state.friends}/>
        </div>
    )
}
export default Sidebar;