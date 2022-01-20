import React from "react";  
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
    let remove = (post) => {
        props.dispatch({ type: 'REMOVE-POST', post: post })
        props.removePost(post)
    }

    let Post = props.state.posts.map(p => {
        
        return <div className={classes.item}>
                <div className={classes.avatar}>
                    <img src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024" alt="ava" />
                </div>
                <span>{`${p.name}: `}</span>
                <span>{p.message}</span>
                <div className={classes.like}>
                    <img src="https://freeiconshop.com/wp-content/uploads/edd/like-outline.png" alt="like" />
                    <span>{p.like}</span>
                    <div onClick={ () => {remove(p)}}  className={classes.buttonRemove}>
                        <img src="https://c0.klipartz.com/pngpicture/84/324/gratis-png-iconos-de-la-computadora-cruzan-eliminar-boton-escritorio-mapa-del-tesoro-thumbnail.png" alt="remove" />
                    </div>
                </div>
        </div>
        }
    )
    
    let newPostElement = React.createRef();

    let addButtonPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', text: text})
    }
   

    return <div className={classes.myPosts}>
                <div>
                    <span>My posts</span>
                    <div className={classes.styletextarrea}>
                        <textarea 
                            onChange={ onPostChange } ref={ newPostElement } 
                            value={props.state.newPostText} 
                            placeholder="Сюда писать текст поста..." />
                    </div>
                    <div className={classes.addPostButton}>
                        <button onClick={ addButtonPost }>add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    { Post }
                </div>
            </div>
    
}
export default MyPosts;