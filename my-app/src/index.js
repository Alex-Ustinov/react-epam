import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";

import {store} from "./epam/redux/redux-store"
import App from "./epam/App"
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


//ReactDOM.render(<BrowserRouter store={store}><Provider store={store}> <Apps /></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
