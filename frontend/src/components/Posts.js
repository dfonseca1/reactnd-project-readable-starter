import React, { Component } from "react";
import Post from "./Post";
import { Link, withRouter } from 'react-router-dom'
// import { Container } from './styles';

class Posts extends Component {
  render() {
    return (
      <div>
        <h3>Post List</h3>
        {Object.keys(this.props.posts).map(id => (
          <li key={id}>
           <Link to={`/post/${this.props.posts[id].id}`} className="tweet">
            <Post post={this.props.posts[id]} />
            </Link>
          </li>
        ))}
      </div>
    );
  }
}

export default Posts;
