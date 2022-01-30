import {cloneDeep} from "lodash";
import {indexOf} from "lodash";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const REMOVE_POST = 'REMOVE-POST';

const initialState = {
    newPostText: " ",
    posts: [
        {id: 1, name: 'Artur', like: 25, message: 'Привед Медвед'},
        {id: 2, name: 'Artur', like: 12, message: 'Врот мне ноги'},
        {id: 3, name: 'Artur', like: 2, message: 'Удаффф'},
        {id: 4, name: 'Artur', like: 10, message: 'УпячГа'},
        {id: 5, name: 'Artur', like: 13, message: 'Креведко'},
        {id: 6, name: 'Artur', like: 19, message: 'Кто тут папа?'},
    ],
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [ , ...state.posts],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case REMOVE_POST:
            let deepState = {
                ...state,
                posts: [...state.posts]
            }
            let index = indexOf(state.posts, action.post) //сравниваем со старым стейтом иначе не найдет индекс
            deepState.posts.splice(index, 1)
            return deepState;
        default:
            return cloneDeep(state)
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