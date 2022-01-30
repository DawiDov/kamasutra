import {cloneDeep} from "lodash";

const UPDATE_NEW_NAME_TEXT = 'UPDATE-NEW-NAME-TEXT'
const UPDATE_NEW_LINK_TEXT = 'UPDATE-NEW-LINK-TEXT'
const UPDATE_NEW_AVA_TEXT = 'UPDATE-NEW-AVA-TEXT'
const ADD_PROPERTIES = 'ADD-MESSAGE';
const REMOVE_PROPERTIES = 'REMOVE-MESSAGE';

const initialState = {
        friends: [
            {id: 1, name: 'Алла', link:'/listFriends/alla' ,ava: 'https://clck.ru/aptAu'},
        ],

}

const sidebarReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_NAME_TEXT:
            return {
                ...state,
                newNameText: action.name,
            }
        case UPDATE_NEW_LINK_TEXT:
            return {
                ...state,
                newLinkText: action.link,
            }
        case UPDATE_NEW_AVA_TEXT:
            return {
                ...state,
                newAvaText: action.ava,
            }
        case ADD_PROPERTIES:
            return {
                ...state,
                friends: [{
                    name: state.newNameText,
                    link: state.newLinkText,
                    ava: state.newAvaText,
                }, ...state.friends],
                newNameText: '',
                newLinkText: '',
                newAvaText: '',
            }
        case REMOVE_PROPERTIES:
            let deepState = {
                ...state,
                friends: [...state.friends]
            }
            // deepState.friends.splice(action.properties, 1);
            return deepState;
        default:
            return cloneDeep(state)
    }
}

export let createUpdateNewNameText = (text) => {
    return { type: UPDATE_NEW_NAME_TEXT, name: text
    }
};
export let createUpdateNewLinkText = (text) => {
    return { type: UPDATE_NEW_LINK_TEXT, link: text
    }
};
export let createUpdateNewAvaText = (text) => {
    return { type: UPDATE_NEW_AVA_TEXT, ava: text
    }
};
export let createAddProperties = () => {
    return { type: ADD_PROPERTIES }
};
export let createRemoveProperties = (message) => {
    return { type: REMOVE_PROPERTIES, properties: message }
};

export default sidebarReducer;