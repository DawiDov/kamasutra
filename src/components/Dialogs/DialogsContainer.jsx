import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { createUpdateNewMessageText, createAddMessage, createRemoveMessage } from '../mobx/dialogs-reducer'

const Dialogs = (props) => {


    let dialogItem = props.state.userData.map(uI => {

            return  <div className={classes.item}>
                <NavLink key={uI.id} to={"/dialogs/" + uI.id} >{uI.name}</NavLink>
            </div>
        }
    )

    let removeMessage = (mD) => {
        props.dispatch(createRemoveMessage(mD))
    };

    let messageItem = props.state.messageData.map(mD => {
            return <div className={classes.message}>
                <div key={mD.id} className={classes.message}>{mD.message}</div>
                <div onClick={() => {removeMessage(mD)}} className={classes.removeMessage}>
                    <img src="https://c0.klipartz.com/pngpicture/84/324/gratis-png-iconos-de-la-computadora-cruzan-eliminar-boton-escritorio-mapa-del-tesoro-thumbnail.png" alt="remove" />
                </div>
            </div>
        }
    )
    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.dispatch(createUpdateNewMessageText(message))
    };
    let addMessage = () => {
        props.dispatch(createAddMessage())
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogItem }
            </div>
            <div className={classes.messages}>
                { messageItem }
            </div>
            <div>
                <div className={classes.styletextarrea}>
                    <textarea
                        onChange={ onMessageChange } ref={ newMessageElement }
                        value={ props.state.newMessageText }
                        placeholder="Сюда писать текст сообшения..." />
                </div>
                <div onClick={ addMessage }><button>Send</button></div>
            </div>
        </div>
    )
}
export default Dialogs;