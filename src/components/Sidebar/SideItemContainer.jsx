import React from "react";
import SideItem from "./SideItem";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        users: state.usersData.users
    }
}

const SideItemContainer = connect(mapStateToProps)(SideItem);
export default SideItemContainer;