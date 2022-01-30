import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header  from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import SideItemContainer from './components/Sidebar/SideItemContainer';
import MyPostsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className='app'>
                    <Header/>
                <div className='app-wrapper'>
                    <SideItemContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/profile"
                                   element={ <Profile/> }/>
                            <Route path="/dialogs"
                                   element={ <DialogsContainer/> }/>
                            <Route path="/friends"
                                   element={ <MyPostsContainer/> }/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        )
    }

export default App;

