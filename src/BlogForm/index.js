import React, {Component} from 'react';
import './BlogForm.css'
import PropTypes from 'prop-types'

class BlogForm extends Component {
    state = {
        //you'll want the state property to match the name of the form
        title: '',
        content: '',
        user: '',
    }
    handleOnChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render () {
        return (

            <form className="blog-form">
                <h1>{this.state.title}</h1>
                <input 
                    type='text' 
                    name='title' 
                    onChange ={this.handleOnChange} 
                    value={this.state.title}
                />
                <input 
                    type='text' 
                    name='content' 
                    onChange={this.handleOnChange} 
                    value={this.state.content}
                />
                <input 
                    type='text' 
                    name='user' 
                    onChange={this.handleOnChange} 
                    value={this.state.user}
                />
                <button onClick={this.props.handleToggle}>Close</button>
            </form>
        )
    }
}

export default BlogForm;
BlogForm.propTypes = {
    handleToggle : PropTypes.func

}
