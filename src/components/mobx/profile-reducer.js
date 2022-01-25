const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const REMOVE_POST = 'REMOVE-POST';

const initialState = {
    newPostText: " ",
    posts: [
        {name: 'Artur', like: 25, message: 'Привед Медвед'},
        {name: 'Artur', like: 12, message: 'Врот мне ноги'},
        {name: 'Artur', like: 2, message: 'Удаффф'},
        {name: 'Artur', like: 10, message: 'УпячГа'},
        {name: 'Artur', like: 13, message: 'Креведко'},
        {name: 'Artur', like: 19, message: 'Кто тут папа?'},
    ],
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let stateItem = {
                name: 'Artur' , like: '25', message: state.newPostText } 
            state.posts.unshift(stateItem)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case REMOVE_POST:
            let index = state.posts.indexOf(action.post)
            state.posts.splice(index, 1)
            return state;
        default:
            return state;
    }
}


export let createActionAddPost = () => {
    return { type: ADD_POST }
  }; 
export let createActionUpdateNewPostText = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, text: text }
  }; 
export let createActionRemovePost = (post) => {
    return { type: REMOVE_POST, post: post }
  }; 

export default profileReducer;