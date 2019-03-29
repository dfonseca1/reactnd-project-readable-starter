import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';

class Categories extends Component {
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
      <nav className="nav">
        <h3>Categories</h3>
        <ul>
          {this.state.categories.map(category => (
            <li key={category.name}>
              <Link to={`/category/${category.path}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Categories;
