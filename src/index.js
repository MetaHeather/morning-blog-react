import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//**1:ReactDom is setting up the virtual dom, we have 2 doms now, the shallow copy and the actual dom in the browser
//The virtual dom spins up first then mounts it to the actual dom, when changes happen the diffing algorithm looks at 
//the changes and finds the most efficinet way to make those changes in the actual dom.
//This is saying render the app component to this mounting point, this is grabbing the root id from index.html
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
