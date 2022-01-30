import React from "react";
import MyPosts from "./MyPosts";
import { createActionRemovePost,
        createActionAddPost,
        createActionUpdateNewPostText
        } from '../../mobx/profile-reducer';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        remove: (post) => {
            dispatch(createActionRemovePost(post))
        },
        addPost: () => {
            dispatch(createActionAddPost())
        },
        onPostChange: (text) => {
            dispatch(createActionUpdateNewPostText(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;