import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SideItemContainer from "./components/Sidebar/SideItemContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <div className="app-wrapper">
        <SideItemContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/profile/:userid?" render={() => <ProfileContainer />} />
          <Route path="/dialogs/" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </div>
  );
};

export default App;
