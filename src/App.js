import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'

function App() {
  return (
    //Nav is inside the div bc react works from inside out, everything needs to 
    //be wrapped in some way  If it is outside you will get an error 
    <div className="App container">
      <Nav/>
      <h1>Confetti Blog!</h1>
      <Footer/>
    </div>
  );
}

//The app function gets exported here and then imported in index.js

export default App;
