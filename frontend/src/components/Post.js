import React, { Component } from "react";

// import { Container } from './styles';

class Post extends Component {
  render() {
    let { post } = this.props;
    return (
      <article>
        <div className="post">
          <div className="votes">
            <span>/\</span>|{post.voteScore}|<span>\/</span>
          </div>
          <div className="post-info">
            <h3>Title: {post.title}</h3>
            <span> {post.category}</span>
            <p>
              Submitted {post.timestamp} ago by {post.author}
            </p>
            <p>
              <span>{post.commentCount} comments</span>
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default Post;
