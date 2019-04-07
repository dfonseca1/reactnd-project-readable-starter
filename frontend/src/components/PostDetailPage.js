import React, { Component } from "react";
import { connect } from "react-redux";
// import { Container } from './styles';

class PostDetailPage extends Component {
  render() {
    let { post } = this.props.post;
  console.log("PostDetailPage.Render.Post", post);

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
  console.log("PostDetailPage.MapStateToProps.Posts", posts);
  let post = posts.posts.filter(post => post.id === id);
  console.log("PostDetailPage.MapStateToProps.Post", post);
  console.log("PostDetailPage.MapStateToProps.Params", props.match.params);
  console.log("PostDetailPage.MapStateToProps.Id", id);
  return {
    post
  };
}

export default connect(mapStateToProps)(PostDetailPage);
