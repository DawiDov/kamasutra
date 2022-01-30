import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const initialState = {
            navList:[
                {id: 1, title: 'Profile', link: '/profile'},
                {id: 2, title: 'Messages', link: '/dialogs'},
                {id: 3, title: 'Friends', link: '/friends'},
                {id: 4, title: 'Users', link: '/users'},
                {id: 5, title: 'News', link: '/news'},
                {id: 6, title: 'Music', link: '/music'},
                {id: 7, title: 'Settings', link: '/settings'},
            ],
    }
    let navComponent = initialState.navList.map(nL => {
       return <div key={nL.id} className={classes.item}>
                <NavLink to={nL.link}
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