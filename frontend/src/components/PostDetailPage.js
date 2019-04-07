import React, { Component } from "react";
import { connect } from "react-redux";
// import { Container } from './styles';

class PostDetailPage extends Component {
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

function mapStateToProps({ posts }, props) {
  const { id } = props.match.params;

  let post = posts.posts.find(post => post.id === id);
  return {
    post
  };
}

export default connect(mapStateToProps)(PostDetailPage);
