import React from "react";
import classes from "./Friends.module.css";
import { createUpdateNewNameText, createUpdateNewLinkText, createUpdateNewAvaText, createAddProperties, createRemoveProperties } from '../mobx/sidebar-reducer'


const Friends = (props) => {

    let newPropElementName = React.createRef();
    let newPropElementLink = React.createRef();
    let newPropElementAva = React.createRef();

    let addFriendListFriend = () => {
        props.dispatch(createAddProperties())
    }


    return <div className={classes.friendsWrapper}>
            <div className={classes.enterField}>
                <div className={classes.enterFieldItem}>
                    <textarea
                        value={props.state.newNameText}
                        placeholder="Friend name"
                        ref={ newPropElementName }
                        onChange={ () => {
                                let name = newPropElementName.current.value
                                props.dispatch(createUpdateNewNameText(name))
                            }
                        }/>
                </div>
                <div className={classes.enterFieldItem}>
                    <textarea
                        value={props.state.newLinkText}
                        placeholder="Friend link - /listFriends/name"
                        ref={ newPropElementLink }
                        onChange={ () => {
                            let link = newPropElementLink.current.value
                            props.dispatch(createUpdateNewLinkText(link))
                        }
                    }/>
                </div>
                <div className={classes.enterFieldItem}>
                    <textarea
                        value={props.state.newAvaText}
                        placeholder="Friend ava"
                        ref={ newPropElementAva }
                        onChange={ () => {
                            let ava = newPropElementAva.current.value
                            props.dispatch(createUpdateNewAvaText(ava))
                        }
                    }/>
                </div>
            </div>
            <div className={classes.buttonField}>
                <button onClick={ addFriendListFriend }>Enter</button>
            </div>
    </div>
}

export default Friends;