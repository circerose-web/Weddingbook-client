import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Blog from "./Blog";
import Guest from "./Guest";
import Home from "./Home";
// import { render } from 'react-dom'

type acceptedProps = {
  token: any;
  logout: any;
};

export default class Navbar extends Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {};
  }

  logoutButton = () => {
    return localStorage.getItem("sessionToken") === null ? (
      ""
    ) : (
      <Link to="/">
        <button onClick={this.props.logout}>Logout</button>
      </Link>
    );
  };

  render() {
    return (
      <div>
        <nav className="bg-blue-200 h-20 bg-opacity-50 max-width  flex items justify-between">
          <ul className="list-none flex items-center mr-6 space-x-3 text-white">
            <li className="bg-blue-400 bg-opacity-50 bg-center rounded-md w-16 h-10 pt-2 shadow-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="bg-blue-400 bg-opacity-50 bg-center rounded-md w-32 h-10 pt-2 shadow-lg">
              <Link to="/Blog">Your memories</Link>
            </li>
            <li className="bg-blue-400 bg-opacity-50 bg-center rounded-md w-32 h-10 pt-2 shadow-lg">
              <Link to="/Guest">Your Guest Book</Link>
            </li>
          </ul>
          <ul className="list-none flex items-center mr-6 space-x-3 text-white">
            <li className="bg-blue-400 bg-opacity-50 bg-center rounded-md w-32 h-10 pt-2 shadow-lg ">
              <Link to="/">
                <button onClick={this.props.logout}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-route">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Blog">
              <Blog token={this.props.token} />
            </Route>
            <Route exact path="/Guest">
              <Guest token={this.props.token} />
            </Route>
          </Switch>
        </div>
        {/* {this.logoutButton()} */}
      </div>
    );
  }
}
