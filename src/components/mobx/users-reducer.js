const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRES = "TOGGLE-IS-FOLLOWING-IN-PROGRES";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgres: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED:
      return {
        ...state,
        users: [
          ...state.users.map((u) => {
            if (u.id === action.userId) {
              return { ...u, followed: true };
            }
            return u;
          }),
        ],
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case UNFOLLOWED:
      return {
        ...state,
        users: [
          ...state.users.map((u) => {
            if (u.id === action.userId) {
              return { ...u, followed: false };
            }
            return u;
          }),
        ],
      };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case TOGGLE_IS_FOLLOWING_IN_PROGRES:
      return {
        ...state,
        followingInProgres: action.isFetching
          ? [...state.followingInProgres, action.userId]
          : state.followingInProgres.filter((id) => id !== action.userId),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export let CAFollowed = (id) => {
  return { type: FOLLOWED, userId: id };
};
export let CAUnfollowed = (id) => {
  return { type: UNFOLLOWED, userId: id };
};
export let CASetUsers = (users) => {
  return { type: SET_USERS, users: users };
};
export let CASetCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, currentPage: page };
};
export let CASetTotalUsersCount = (totalCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount: totalCount };
};
export let CASetIsFetchingCount = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export let CAToggleIsFollowingInProgres = (userId, isFetching) => {
  return { type: TOGGLE_IS_FOLLOWING_IN_PROGRES, userId, isFetching };
};

export default usersReducer;
