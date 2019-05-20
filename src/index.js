import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuContainer from "./MenuContainer";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <MenuContainer/>,
    document.getElementById("container")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
