import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://skazki.land/api/get-resized-image/barmalei-0642a.jpg?width=1024&height=1024&fit=inside"
        alt="logo"
      />
      <div className={classes.loginBlok}>
        {props.isAuth ? (
          <span>{props.login}</span>
        ) : (
          <NavLink to={"/login"}>login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
