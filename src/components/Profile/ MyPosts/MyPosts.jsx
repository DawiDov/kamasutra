import React from "react";  
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {

    let remove = (post) => {
        props.remove(post)
    }
    let Post = props.profile.posts.map(p => {
        return <div className={classes.item}>
                <div className={classes.avatar}>
                    <img src="https://clck.ru/ap9Bs" alt="ava" />
                </div>
                <span>{`${p.name}: `}</span>
                <span>{p.message}</span>
                <div className={classes.like}>
                    <img src="https://clck.ru/ap9Ck" alt="like" />
                    <span>{p.like}</span>
                    <div onClick={ () => {remove(p.id)}}  className={classes.buttonRemove}>
                        <img src="https://clck.ru/ap9CE" alt="remove" />
                    </div>
                </div>
        </div>
        }
    )
    let onAddBPost = () => {
        props.addPost()
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.onPostChange(text)
    }
    return <div className={classes.myPosts}>
                <div>
                    <span>My posts</span>
                    <div className={classes.styletextarrea}>
                        <textarea 
                            onChange={ onPostChange }
                            value={props.profile.newPostText}
                            placeholder="Сюда писать текст поста..." />
                    </div>
                    <div className={classes.addPostButton}>
                        <button onClick={ onAddBPost }>add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    { Post }
                </div>
            </div>
}
export default MyPosts;