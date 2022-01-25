const UPDATE_NEW_NAME_TEXT = 'UPDATE-NEW-NAME-TEXT'
const UPDATE_NEW_LINK_TEXT = 'UPDATE-NEW-LINK-TEXT'
const UPDATE_NEW_AVA_TEXT = 'UPDATE-NEW-AVA-TEXT'
const ADD_PROPERTIES = 'ADD-MESSAGE';
const REMOVE_PROPERTIES = 'REMOVE-MESSAGE';

const initialState = {
        newNameText: '',
        newLinkText: '',
        newAvaText: '',
        friends: [
            {name: 'Алла', link:'/listFriends/alla' ,ava: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3'},
            {name: 'Петька', link:'/listFriends/petya' ,ava: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'},
            {name: 'Вазген', link:'/listFriends/vazgen' ,ava: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'},
            {name: 'Таня', link:'/listFriends/tanya' ,ava: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3'},
            {name: 'Паха', link:'/listFriends/paha' ,ava: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'},
            {name: 'Инга', link:'/listFriends/inga' ,ava: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3'},
        ],

}

const sidebarReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_NAME_TEXT:
            state.newNameText = action.name;
            return state;
        case UPDATE_NEW_LINK_TEXT:
            state.newLinkText = action.link;
            return state;
        case UPDATE_NEW_AVA_TEXT:
            state.newAvaText = action.ava;
            return state;
        case ADD_PROPERTIES:
            let messageItem = {
                name: state.newNameText,
                link: state.newLinkText,
                ava: state.newAvaText,
            };
            messageItem.name && messageItem.link &&
            messageItem.ava && state.friends.unshift(messageItem);

            state.newNameText = '';
            state.newLinkText = '';
            state.newAvaText = '';
            return state;
        case REMOVE_PROPERTIES:
            state.friends.splice(action.properties, 1);
            return state;
        default:
            return state;
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