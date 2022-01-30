const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: [
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOWED:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOWED:
            return{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:

            return { ...state, users: [ ...state.users, ...action.users ] }
        default:
            return state
    }
}


export let CAFollowed = (id) => {
    return { type: FOLLOWED, userId: id }
};
export let CAUnfollowed = (id) => {
    return { type: UNFOLLOWED, userId: id }
};
export let CASetUsers = (users) => {
    return { type: SET_USERS, users: users }
};

export default usersReducer;