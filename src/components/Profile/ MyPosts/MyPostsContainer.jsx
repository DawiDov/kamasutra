import MyPosts from "./MyPosts";
import {
  createActionRemovePost,
  createActionAddPost,
  createActionUpdateNewPostText,
} from "../../mobx/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    remove: (post) => {
      dispatch(createActionRemovePost(post));
    },
    addPost: () => {
      dispatch(createActionAddPost());
    },
    onPostChange: (text) => {
      dispatch(createActionUpdateNewPostText(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
