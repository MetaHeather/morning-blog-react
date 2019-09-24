import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <h1>Confetti Blog!</h1>
    </div>
  );
}

//The app function gets exported here and then imported in index.js

export default App;
