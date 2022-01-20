import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {

    let dialogItem = props.state.userData.map(uI => {
        return  <div className={classes.item}>
                    <NavLink key={uI.id} to={"/dialogs/" + uI.id} >{uI.name}</NavLink>
                </div>
        }
    )
    let messageItem = props.state.messageData.map(mD => {
        return <div>    
                <div key={mD.id} className={classes.message}>{mD.message}</div>
            </div>
        }
    )
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogItem }
            </div>
            <div className={classes.messages}>    
                { messageItem }
            </div>
        </div>    
        )
} 
export default Dialogs;