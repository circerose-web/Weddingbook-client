import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";

type acceptedProps = {
  token: any;
};

type valueTypes = {
  login: boolean;
  setLogin: boolean;
  //   firstName: string;
  //   lastName: string;
  email: string;
  password: string;
};

export default class Auth extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      login: true,
      setLogin: false,
      //   firstName: "",
      //   lastName: "",
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
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="flex h-screen flex-col items-center">
        <div className="bg-gray">
          {this.authTernary()}
          <button onClick={this.loginToggle}>Toggle</button>
        </div>
      </div>
    );
  }
}
