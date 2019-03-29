import React, { Component } from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import Categories from "./Categories";

// import { Container } from './styles';

export default class Dashboard extends Component {
  state = {
    categories: [
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
    ]
  };

  render() {
    return (
      <div>
        <div>
          <Categories />
        </div>

        <div>
          <Link to="/new">New Post</Link>
        </div>

        <div>
          <Posts />
        </div>
      </div>
    );
  }
}
