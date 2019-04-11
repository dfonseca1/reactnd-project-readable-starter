import React, { Component } from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import Categories from "./Categories";
import { connect } from "react-redux";

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
  state = {
    sortBy: "voteScore"
  };
  handleChangeSortBy = e => {
    const value = e.target.value;

    this.setState(() => ({
      sortBy: value
    }));
  };

  sortBySelectedMethod(posts) {
    switch (this.state.sortBy) {
      case "voteScore":
        return posts.sort((a, b) => b.voteScore - a.voteScore);
      case "creationDate":
        return posts.sort((a, b) => b.timestamp - a.timestamp);
      default:
        return posts;
    }
  }

  render() {
    console.log("Dashboard.Props", this.props);

    const sortedPosts =
      this.props.posts !== undefined && this.props.posts.length > 1
        ? this.sortBySelectedMethod(this.props.posts)
        : this.props.posts;
    return (
      <div>
        <div>
          <Categories categories={categories} />
        </div>

        <div>
          <Link to="/new">New Post</Link>
        </div>
        <div>
          <span>Sort by:</span>
          <select onChange={e => this.handleChangeSortBy(e)} name="sortby">
            <option value="voteScore" defaultValue>
              Vote Score
            </option>
            <option value="creationDate">Creation Date</option>
          </select>
        </div>

        <div>{sortedPosts && <Posts posts={sortedPosts} />}</div>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return posts;
}

export default connect(mapStateToProps)(Dashboard);
