import React, {Component} from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import BlogForm from './BlogForm';

class App extends Component {
  state = {
    isShowing: false,
    posts: [
      {
        title: "My first confetti blog post",
        content: "I love confetti, I USE IT EVERYWHERE!",
        user: "hne111"
      },
      {
        title: "We all love pandas",
        content: "Pandas are the bears that every other bear wishes they could be",
        user: "lolPanda"
      }
    ]
  }
  handleShowForm = event => {
    this.setState({
      isShowing: this.state.isShowing
    })
  }
  render() {
    //We can compose components here and then pull them out later
    //Todo: extract these to seperate comonents
    const title = <h1>Confetti Blog!</h1>
    const composedPosts = this.state.posts.map((item, index) => {
      return(
        //key will go in the uppermost element
        <li key={index} className='post' >
          <h3 className="postTitles">{item.title}</h3>
          <p>{item.content}</p>
          <h6>{item.user}</h6>
        </li>
      )
    })
    return (
    //Nav is inside the div bc react works from inside out, everything needs to 
    //be wrapped in some way  If it is outside you will get an error 
    <div className="App container">
      <Nav content="NAV"/>
      {this.state.isShowing ? (
         <BlogForm handleToggle={this.handleShowForm} />
       ) : (
          <button onClick={this.handleShowForm}>Add Post</button>
      )}
      <ul>{composedPosts}</ul>
      <Footer/>
    </div>
    ); 
  }
}

//The app function gets exported here and then imported in index.js

export default App;
