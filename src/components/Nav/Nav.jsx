import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    const initialState = {
        state: {
            navList:[
                {title: 'Profile', link: '/profile'},
                {title: 'Messages', link: '/dialogs'},
                {title: 'Friends', link: '/friends'},
                {title: 'News', link: '/news'},
                {title: 'Music', link: '/music'},
                {title: 'Settings', link: '/settings'},
            ],
        },
    }
    let navComponent = initialState.state.navList.map(nL => {
       return <div className={classes.item}>
                <NavLink to={nL.link} key={nL.title}
                    className={navData => navData.isActive ? classes.active : classes.passive}>{nL.title}</NavLink>
             </div>
        }
    )

    return (
    <nav className={classes.nav}>
            { navComponent }
    </nav>

    )
}
export default Nav;