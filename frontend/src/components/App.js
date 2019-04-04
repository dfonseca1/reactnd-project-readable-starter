import React, { Component } from "react";
import "../App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import NewPost from "./NewPost";
import PostDetailPage from "./PostDetailPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={Dashboard} />
          <Route path="/category/:name" component={CategoryPage} />
          <Route path="/new" component={NewPost} />
          <Route path="/post/:id" component={PostDetailPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
