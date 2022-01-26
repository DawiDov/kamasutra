import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    let dialogItem = props.dialogs.userData.map(uI => {
        return  <div className={classes.item}>
                    <NavLink key={uI.id} to={"/dialogs/" + uI.id} >{uI.name}</NavLink>
                </div>
        }
    )
    let onRemoveMessage = (mD) => {
        props.removeMessage(mD)
    };
    let messageItem = props.dialogs.messageData.map(mD => {
        return <div className={classes.message}>
                <div key={mD.id} className={classes.message}>{mD.message}</div>
                <div onClick={() => {onRemoveMessage(mD)}} className={classes.removeMessage}>
                    <img src="https://c0.klipartz.com/pngpicture/84/324/gratis-png-iconos-de-la-computadora-cruzan-eliminar-boton-escritorio-mapa-del-tesoro-thumbnail.png" alt="remove" />
                </div>
            </div>
        }
    )
    let onMessageChange = (event) => {
        let message = event.target.value;
        props.updateNewMessageText(message)
    };
    let addMessage = () => {
        props.onAddMessage()
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
                            onChange={ onMessageChange }
                            value={ props.dialogs.newMessageText }
                            placeholder="Сюда писать текст сообшения..." />
                            </div>
                <div onClick={ addMessage }><button>Send</button></div>
            </div>
        </div>    
        )
} 
export default Dialogs;