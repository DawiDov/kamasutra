import React from "react";
import classes from "./Friends.module.css";


const Friends = (props) => {
    let addFriendListFriend = () => {
        props.addProperties()
    }
    return <div className={classes.friendsWrapper}>
            <div className={classes.enterField}>
                <div className={classes.enterFieldItem}>
                    <textarea
                        value={props.friends.newNameText}
                        placeholder="Friend name"
                        onChange={ (event) => {
                                let name = event.target.value
                                props.onChangeNameField(name)
                            }
                        }/>
                </div>
                <div className={classes.enterFieldItem}>
                    <textarea
                        value={props.friends.newLinkText}
                        placeholder="Friend link - /listFriends/name"
                        onChange={ (event) => {
                            let link = event.target.value
                            props.onChangeLinkField(link)
                        }
                    }/>
                </div>
                <div className={classes.enterFieldItem}>
                    <textarea
                        value={props.friends.newAvaText}
                        placeholder="Friend ava"
                        onChange={ (event) => {
                            let ava = event.target.value
                            props.onChangeAvaField(ava)
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