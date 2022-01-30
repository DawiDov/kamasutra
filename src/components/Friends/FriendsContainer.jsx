import React from "react";
import Friends from "./Friends";
import { createUpdateNewNameText,
        createUpdateNewLinkText,
        createUpdateNewAvaText,
        createAddProperties } from '../mobx/sidebar-reducer'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.friends
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addProperties: () => {
            dispatch(createAddProperties())
        },
        onChangeNameField: (name) => {
            dispatch(createUpdateNewNameText(name))
        },
        onChangeLinkField: (link) => {
            dispatch(createUpdateNewLinkText(link))
        },
        onChangeAvaField: (ava) => {
            dispatch(createUpdateNewAvaText(ava))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default MyPostsContainer;