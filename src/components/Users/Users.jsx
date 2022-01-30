import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
                debugger
            });
    }

    render() {
        return (
            <div className={classes.wrapper}>
                this.props.usersData.users.map(u => {
                <div key={u.id} className={classes.userWrapper}>

                </div>
            </div>
        )
    }
}

export default Users;