import React, { Component } from "react";
import Post from "./Post";
// import { Container } from './styles';

class Posts extends Component {
  render() {
    return (
      <div>
        <h3>Post List</h3>
        {/*         
        {this.props.posts.map(post => (
          <li key={post.id}>
            <Post id={post.id} />
          </li>
        ))} */}
        {Object.keys(this.props.posts).map(id => (
          <li key={id}>
            <Post id={id} />
          </li>
        ))}
      </div>
    );
  }
}

export default Posts;
