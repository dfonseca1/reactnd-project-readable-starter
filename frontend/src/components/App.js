import React, { Component, Fragment } from "react";
import "../App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import NewPost from "./NewPost";
import PostDetailPage from "./PostDetailPage";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log("Props.Loading", this.props.loading);
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <LoadingBar />
            {this.props.loading === true ? null : (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/category/:name" component={CategoryPage} />
                <Route path="/new" component={NewPost} />
                <Route path="/post/:id" component={PostDetailPage} />
              </div>
            )}
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
