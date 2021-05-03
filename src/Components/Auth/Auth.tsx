import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";

type acceptedProps = {
  token: (token: string | null) => void;
};

type valueTypes = {
  login: boolean;
  setLogin: boolean;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default class Auth extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      login: true,
      setLogin: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  authTernary = () => {
    return this.state.login ? (
      <Login token={this.props.token} />
    ) : (
      <Register token={this.props.token} />
    );
  };

  loginToggle = (event: any) => {
    event.preventDefault();
    this.setState({
      login: !this.state.login,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="flex h-screen flex-col items-center">
        <div className="bg-gray">
          {this.authTernary()}
          <Link
            to=""
            className="no-underline hover:text-blue-400 text-blue-900"
            onClick={this.loginToggle}
          >
            Create an account!
          </Link>
          {/* <button onClick={this.loginToggle}>Toggle</button> */}
        </div>
      </div>
    );
  }
}
