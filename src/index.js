import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './components/mobx/redux-store';
import { Provider } from "react-redux";


export let renderEntireTree = () => {
    ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App state={ store.getState() } dispatch={ store.dispatch } />
        </Provider>
        </BrowserRouter>, document.getElementById('root'))
}

renderEntireTree();
reportWebVitals();
 