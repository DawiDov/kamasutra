import React from "react";  
import classes from "./Header.module.css";

const Header = () => {
    return <header className={classes.header}>
        <img src='https://skazki.land/api/get-resized-image/barmalei-0642a.jpg?width=1024&height=1024&fit=inside' alt="logo" />
    </header>;
}
export default Header;