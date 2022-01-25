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
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case ADD_MESSAGE:
            //наверно нужен рефакторинг
            let arrLength = state.messageData.length
            let id = 0;
            if (arrLength == 0) id=1; 
            else id = ++arrLength; //increment last index
            let messageItem = {id: id, message: state.newMessageText};
            state.messageData.unshift(messageItem)       
            state.newMessageText = '';
            return state;
        case REMOVE_MESSAGE:
            state.messageData.splice(action.message, 1);
            return state;
        default:
            return state;   
    }
}

export let createUpdateNewMessageText = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, text: text }
    };
export let createAddMessage = () => {
return { type: ADD_MESSAGE }
    };
export let createRemoveMessage = (message) => {
return { type: REMOVE_MESSAGE, message: message }
    };

export default dialogsReducer;