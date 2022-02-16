import { cloneDeep } from "lodash";
import { indexOf } from "lodash";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const REMOVE_POST = "REMOVE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
  profile: null,
  newPostText: " ",
  posts: [
    { id: 1, name: "Artur", like: 25, message: "Привед Медвед" },
    { id: 2, name: "Artur", like: 12, message: "Врот мне ноги" },
    { id: 3, name: "Artur", like: 2, message: "Удаффф" },
    { id: 4, name: "Artur", like: 10, message: "УпячГа" },
    { id: 5, name: "Artur", like: 13, message: "Креведко" },
    { id: 6, name: "Artur", like: 19, message: "Кто тут папа?" },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let arrLength = state.posts.length;
      let id = 0;
      if (arrLength == 0) id = 1;
      else id = ++arrLength; //increment last index
      return {
        ...state,
        posts: [
          {
            id: id,
            name: "Artur",
            message: state.newPostText,
            like: Math.floor(Math.random() * 111), //generator random likes
          },
          ...state.posts,
        ],
        newPostText: " ",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };
    case REMOVE_POST:
      let deepState = {
        ...state,
        posts: [...state.posts],
      };
      let index = indexOf(state.posts, action.post);
      //сравниваем со старым стейтом иначе не найдет индекс
      deepState.posts.splice(index, 1);
      return deepState;
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return cloneDeep(state);
  }
};

export let createActionAddPost = () => {
  return { type: ADD_POST };
};
export let createActionUpdateNewPostText = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, text: text };
};
export let createActionRemovePost = (post) => {
  return { type: REMOVE_POST, post };
};
export let setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export default profileReducer;
