import React, { Component } from "react";

// import { Container } from './styles';

class Post extends Component {
    
  render() {
    return (
        <div>
            Post ID: {this.props.id}
        </div>
        )
  }
}

export default Post;
