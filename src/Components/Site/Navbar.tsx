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

  //   logoutButton = () => {
  //     return localStorage.getItem("sessionToken") === null ? (
  //       ""
  //     ) : (
  //       <button onClick={this.props.logout}>Logout</button>
  //     );
  //   };

  render() {
    return (
      <div className="bg-red-400 h-20">
        <div>Hello!!!!!</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Blog">Your memories</Link>
            </li>
            <li>
              <Link to="/Guest">Your Guest Book</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-route">
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Blog">
              <Blog />
            </Route>
            <Route exact path="/Guest">
              <Guest />
            </Route>
          </Switch>
        </div>
        {/* {this.logoutButton()} */}
      </div>
    );
  }
}
