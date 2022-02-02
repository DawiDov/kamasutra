import React from "react";
import classes from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={classes.loader}>
            <img src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif'/>
        </div>
    )
}

export default Preloader;