import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './components/mobx/state';


export let renderEntireTree = (state) => { 
    ReactDOM.render(
    <BrowserRouter>
        <App state={state} 
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        removePost={store.removePost.bind(store)}
        />
        </BrowserRouter>,
    document.getElementById('root'))
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

reportWebVitals();
 