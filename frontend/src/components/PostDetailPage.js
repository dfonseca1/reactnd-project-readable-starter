import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { getCommentsByPost } from "../actions/comments";

class PostDetailPage extends Component {
  componentDidMount() {
    const { post } = this.props;
    this.props.dispatch(getCommentsByPost(post));
  }

  sortByVoteScore(comments) {
    return comments.sort((a, b) => b.voteScore - a.voteScore);
  }

  render() {
    let { post, comments } = this.props;
    console.log("PostDetailPage.Props", this.props);
    console.log("PostDetailPage.Render.Comments", comments);

    const sortedComments = this.sortByVoteScore(comments);

    return (
      <article>
        <div className="post">
          <div className="votes">
            <span>/\</span>|{post.voteScore}|<span>\/</span>
          </div>
          <div className="post-info">
            <h3>Title: {post.title}</h3>
            <span>Category:{post.category}</span>
            <p>
              Submitted {formatDate(post.timestamp)} by {post.author}
            </p>
            <span>Body:</span>
            <p>{post.body}</p>
            <p>
              <span>{post.commentCount} comments</span>
            </p>
            <h3>Comments</h3>
            {sortedComments.length > 0 &&
              sortedComments.map(comment => (
                <li key={comment.id}>
                  <p>{comment.body}</p>
                  <p>creation date:{comment.timestamp}</p>
                  <p>author:{comment.author}</p>
                  <p>vote score:{comment.voteScore}</p>
                </li>
              ))}
          </div>
        </div>
      </article>
    );
  }
}

function mapStateToProps(state, props) {
  const { id } = props.match.params;

  let post =
    state.posts.posts !== undefined
      ? state.posts.posts.find(post => post.id === id)
      : {};
  let commentsByPost =
    state.comments.comments !== undefined ? state.comments.comments : [];
  return {
    post,
    comments: commentsByPost
  };
}

export default connect(mapStateToProps)(PostDetailPage);
