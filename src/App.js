import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header  from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';


const App = (props) => {
    return (
        <div className='app'>
                    <Header />
                <div className='app-wrapper'>
                        <Sidebar state={props.state.sidebar}/>
                    <Nav state={props.state.nav}/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/profile" element={<Profile state={ props.state.profile } dispatch={ props.dispatch }/>} />
                            <Route path="/dialogs" element={<Dialogs state={props.state.dialogs}/>} />
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