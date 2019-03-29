import React, { Component } from "react";
import "../App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import NewPost from "./NewPost";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={Dashboard} />
          <Route path="/category/:name" component={CategoryPage} />
          <Route path="/new" component={NewPost} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
