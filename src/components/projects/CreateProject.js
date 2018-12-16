import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            id="title"
            onChange={this.handleChange}
          />

          <textarea
            type="text"
            placeholder="content"
            id="content"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateProject;
