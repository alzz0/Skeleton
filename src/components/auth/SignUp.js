import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
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
            id="firstName"
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            id="lastName"
            onChange={this.handleChange}
            placeholder="Last name"
          />
          <input
            type="email"
            id="email"
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            onChange={this.handleChange}
            placeholder="password"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
