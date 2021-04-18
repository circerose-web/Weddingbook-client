import React, { Component } from "react";

type acceptedProps = {
  token: any;
};

type valueTypes = {
  email: string;
  password: string;
};

export default class Login extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.token(data.sessionToken);
        console.log(data);
      });
  };

  render() {
    return (
      <div className="login">
        <form className="space-y-5" onSubmit={this.handleSubmit}>
          <h4>Login</h4>
          <div>
            {/* <label>Email</label> */}
            <input
              className="w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500"
              required
              type="email"
              placeholder="Email"
              // size= '30'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <input
              className="w-full border-2 border-white p-2 rounded outline-none focus:border-purple-500"
              required
              type="password"
              placeholder="Password"
              // minLength='8'
              value={this.state.password}
              name="password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
