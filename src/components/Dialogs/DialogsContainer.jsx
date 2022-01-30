import React from "react";
import { createUpdateNewMessageText, createAddMessage, createRemoveMessage } from '../mobx/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        removeMessage: (id) => {
            dispatch(createRemoveMessage(id))
        },
        messageChange: (message) => {
            dispatch(createUpdateNewMessageText(message))
        },
        addMessage: () => {
            dispatch(createAddMessage())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;