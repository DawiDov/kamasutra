import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./ MyPosts/MyPosts";


const Profile = (props) => {
    return <div className={classes.content}>
    <div className={classes.image}>
        <img src='http://dgdesign.ru/uploads/posts/2018-11/1543390519_shapka-sayta-priroda-1622317.jpg' />
    </div>
    <div className={classes.name}>Artur</div>
    <div className={classes.avatar}>
        <img src="https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=31c49726c022c1d41ee9b9b6b7254b46" alt="ava" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque obcaecati voluptatum optio temporibus officia odit sit! Sint, excepturi? Aliquam harum sit amet officiis culpa praesentium totam fugiat sapiente expedita?</p>
    </div>
        <MyPosts state={props.state} 
              addPost={ props.addPost }
              updateNewPostText={ props.updateNewPostText }
              removePost={ props.removePost }/>
    </div>
}       
export default Profile;