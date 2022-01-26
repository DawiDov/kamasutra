import React from "react";
import { createUpdateNewMessageText, createAddMessage, createRemoveMessage } from '../mobx/dialogs-reducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let removeMessage = (mD) => {
        props.dispatch(createRemoveMessage(mD))
    };
    let onMessageChange = (message) => {
        props.dispatch(createUpdateNewMessageText(message))
    };
    let addMessage = () => {
        props.dispatch(createAddMessage())
    }
    return <Dialogs dialogs={ props.state }
                    removeMessage={ removeMessage }
                    updateNewMessageText={ onMessageChange }
                    onAddMessage={ addMessage }
                />
}
export default DialogsContainer;