const SET_FRIENDS_IN_STATE = "SET-FRIENDS-IN-STATE";
const REMOVE_FROM_FRIEND_LIST = "REMOVE-FROM-FRIEND-LIST";
const ADD_TO_FRIEND_LIST = "ADDTO-FRIEND-LIST";

const initialState = {
  friends: [
    {
      name: "vademar23",
      id: 22308,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: null,
      followed: true,
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS_IN_STATE:
      return {
        ...state,
        friends: action.friends,
      };
    default:
      return state;

    case REMOVE_FROM_FRIEND_LIST:
      return {
        ...state,
        friends: state.friends.map((u) => {
          if (u.id === action.friendId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
  }
};
export let setFriendsInStateAC = (items) => {
  return { type: SET_FRIENDS_IN_STATE, friends: items };
};
export let setRemoveFromFriendListAC = (friendId) => {
  return { type: REMOVE_FROM_FRIEND_LIST, friendId };
};

export default sidebarReducer;
