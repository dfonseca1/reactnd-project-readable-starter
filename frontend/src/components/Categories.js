import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';

class Categories extends Component {
  
  render() {
    return (
      <nav className="nav">
        <h3>Categories</h3>
        <ul>
          {this.props.categories.map(category => (
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
