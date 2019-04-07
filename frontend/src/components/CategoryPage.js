import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { getPostsByCategory } from "../actions/posts";

class CategoryPage extends Component {
  componentDidMount() {
    let { name } = this.props.match.params;
    this.props.dispatch(getPostsByCategory(name));
  }

  render() {
    return (
      <div>
        <h3>Posts by Category</h3>
        <div>{this.props.posts && <Posts posts={this.props.posts} />}</div>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return posts;
}

export default connect(mapStateToProps)(CategoryPage);
