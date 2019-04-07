import React, { Component } from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import Categories from "./Categories";
import { connect } from "react-redux";

// import { Container } from './styles';

const categories = [
  {
    name: "react",
    path: "react"
  },
  {
    name: "redux",
    path: "redux"
  },
  {
    name: "udacity",
    path: "udacity"
  }
];

class Dashboard extends Component {
  render() {
    console.log("Dashboard.Props", this.props);

    return (
      <div>
        <div>
          <Categories categories={categories} />
        </div>

        <div>
          <Link to="/new">New Post</Link>
        </div>

        <div>{this.props.posts && <Posts posts={this.props.posts} />}</div>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  // console.log("Dashboard.mapStateToProps.state", state)

  // let {posts} = state;
  console.log("Dashboard.mapStateToProps.posts", posts);

  // const postsByVoteScore = !posts.length > 0 ? [] :  posts.sort(
  //   (a, b,) => posts[b].voteScore - posts[a].voteScore
  // );
  // return { posts: postsByVoteScore };
  const postsByVoteScore =
    posts.length > 0
      ? posts.sort((a, b) => posts[b].voteScore - posts[a].voteScore)
      : posts;

  console.log("Dashboard.mapStateToProps.postsByVoteScore", postsByVoteScore);

  return postsByVoteScore;
}

export default connect(mapStateToProps)(Dashboard);
