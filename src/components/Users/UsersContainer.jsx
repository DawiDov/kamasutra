import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {CAFollowed, CASetUsers, CAUnfollowed} from "../mobx/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addAsFriends: (userId) => {
            dispatch(CAFollowed(userId))
        },
        removeFromFriends: (userId) => {
            dispatch(CAUnfollowed(userId))
        },
        setUsers: (users) => {
            dispatch(CASetUsers(users))
        }
    }
}


const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;