import React from "react";
import MyPosts from "./MyPosts";
import { createActionRemovePost, createActionAddPost, createActionUpdateNewPostText } from '../../mobx/profile-reducer';

const MyPostsContainer = (props) => {

    let remove = (post) => {
        props.dispatch(createActionRemovePost(post))
    }
    let addPost = () => {
        props.dispatch(createActionAddPost())
    }
    let onPostChange = (text) => {
        props.dispatch(createActionUpdateNewPostText(text))
    }

    return <MyPosts profilePosts={ props.state } onRemovePost={ remove } addPost={ addPost } updateNewPostText={ onPostChange } />
 }
export default MyPostsContainer;