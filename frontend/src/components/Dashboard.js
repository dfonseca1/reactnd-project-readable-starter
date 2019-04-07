import React, { Component } from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import Categories from "./Categories";
import { connect } from "react-redux";

// import { Container } from './styles';

const posts = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1467166872634,
    title: "Udacity is the best place to learn React",
    body: "Everyone says so after all.",
    author: "thingtwo",
    category: "react",
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1468479767190,
    title: "Learn Redux in 10 minutes!",
    body: "Just kidding. It takes more than 10 minutes to learn technology.",
    author: "thingone",
    category: "redux",
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
};

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
    let postsFromApi = this.props.posts;
    console.log("Post From APi", postsFromApi);

    return (
      <div>
        <div>
          <Categories categories={categories} />
        </div>

        <div>
          <Link to="/new">New Post</Link>
        </div>

        <div>
          <Posts posts={this.props.posts} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({posts}){
  return posts;
}

export default connect(mapStateToProps)(Dashboard);
