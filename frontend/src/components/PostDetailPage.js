import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { getCommentsByPost, addCommentForPost } from "../actions/comments";
import { v4 } from "uuid";

class PostDetailPage extends Component {
  state = {
    comment: ""
  };

  componentDidMount() {
    const { post } = this.props;
    this.props.dispatch(getCommentsByPost(post));
  }

  sortByVoteScore(comments) {
    return comments.sort((a, b) => b.voteScore - a.voteScore);
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => ({
      [name]: value
    }));
  };

  handleNewCommentSubmit = (e) => {
    e.preventDefault();
    console.log("PostDetailPage.HandleNewComment.props", this.props);

    const { post } = this.props;
    const newComment = {
      id: v4(),
      timestamp: Date.now(),
      body: this.state.comment,
      author: post.author,
      parentId: post.id
    };

     this.props.dispatch(addCommentForPost(newComment))
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
            <div>
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
            <div>
              <form onSubmit={this.handleNewCommentSubmit}>
                <span>New Comment:</span>
                <input
                  type="text"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleChange}
                />
                <button>Comment!</button>
              </form>
            </div>
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
