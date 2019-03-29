import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// import { Container } from './styles';

class NewPost extends Component {
  state = {
    id: "",
    timestamp: Date.min,
    title: "",
    body: "",
    author: "",
    category: "",
    voteScore: 0,
    toHome: false
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => ({
      [name]: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text, id } = this.state;

    

    console.log("New Post", text);
    this.setState(() => ({
      text: "",
      toHome: id ? false : true
    }));
  };

  render() {
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

    const { text, toHome } = this.state;

    // todo: Redirect to / if submitted
    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3 className="center">Compose new Post</h3>
        <form className="" onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              className="input"
            />
          </div>
          <div>
            <label>Body</label>{" "}
            <textarea
              placeholder="What's happening?"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              className="textarea"
              maxLength={280}
            />
          </div>
          <div>
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
              className="input"
            />
          </div>
          <div>
            <label>Category:</label>
            <select onChange={e => this.handleChange(e)} name="category">
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewPost;
