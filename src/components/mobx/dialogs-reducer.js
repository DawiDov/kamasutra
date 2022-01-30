import {cloneDeep} from "lodash";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE';
const REMOVE_MESSAGE = 'REMOVE-MESSAGE';

const initialState = {
    newMessageText: " ",
    userData:[
        {id:1, name: "Увася"},
        {id:2, name: "Петя"},
        {id:3, name: "Миха"},
        {id:4, name: "Паха"},
        {id:5, name: "Ира"},
        {id:6, name: "Таня"},
    ],
    messageData: [
        {id: 1, message: "Yo"},
        {id: 2, message: "Hi"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "norm =)"},
        {id: 5, message: "zaebys"},
        {id: 6, message: "horosho"},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    let deepState = {}
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        case ADD_MESSAGE:
            //наверно нужен рефакторинг
            deepState = {
                ...state,
                messageData: [...state.messageData]
            }
            let arrLength = deepState.messageData.length
            let id = 0;
            if (arrLength == 0) id=1; 
            else id = ++arrLength; //increment last index
            let messageItem = {id: id, message: deepState.newMessageText};
            deepState.messageData.unshift(messageItem)
            deepState.newMessageText = '';
            return deepState;
        case REMOVE_MESSAGE:
            return {
                ...state,
                messageData: state.messageData.map(mS => {
                    if (mS.id === action.messageId) {
                        let idx = state.messageData.indexOf(mS)
                        state.messageData.splice(idx, 1);
                        return [...state.messageData]
                        }
                    return mS;
                })
            }
        default:
            return cloneDeep(state)
    }
}

export let createUpdateNewMessageText = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, text: text }
    };
export let createAddMessage = () => {
return { type: ADD_MESSAGE }
    };
export let createRemoveMessage = (id) => {
return { type: REMOVE_MESSAGE, messageId: id }
    };

export default dialogsReducer;