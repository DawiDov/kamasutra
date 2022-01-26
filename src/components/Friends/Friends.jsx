import React from "react";
import classes from "./Friends.module.css";
import { createUpdateNewNameText, createUpdateNewLinkText, createUpdateNewAvaText, createAddProperties } from '../mobx/sidebar-reducer'


const Friends = (props) => {

    let addFriendListFriend = () => {
        props.dispatch(createAddProperties())
    }


    return <div className={classes.friendsWrapper}>
            <div className={classes.enterField}>
                <div className={classes.enterFieldItem}>
                    <textarea
                        value={props.state.newNameText}
                        placeholder="Friend name"
                        onChange={ (event) => {
                                let name = event.target.value
                                props.dispatch(createUpdateNewNameText(name))
                            }
                        }/>
                </div>
                <div className={classes.enterFieldItem}>
                    <textarea
                        value={props.state.newLinkText}
                        placeholder="Friend link - /listFriends/name"
                        onChange={ (event) => {
                            let link = event.target.value
                            props.dispatch(createUpdateNewLinkText(link))
                        }
                    }/>
                </div>
                <div className={classes.enterFieldItem}>
                    <textarea
                        value={props.state.newAvaText}
                        placeholder="Friend ava"
                        onChange={ (event) => {
                            let ava = event.target.value
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