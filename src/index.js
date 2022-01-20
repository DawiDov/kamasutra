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
        dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
    document.getElementById('root'))
};

renderEntireTree(store._state);
store.dispatch({type:'SUBSCRIBE' ,observer: renderEntireTree});

reportWebVitals();
 