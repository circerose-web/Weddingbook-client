import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import CreateBlog from "./Blogs/createBlog";
import BlogLibrary from "./Blogs/blogLibrary";
import Guest from "./Guests/Guest";
import GuestList from "./Guests/GuestList";
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
          <ul className="list-none flex items-center mr-6 space-x-3 text-white pl-6">
            <li className="px-4 py-2  text-base rounded-full text-white  bg-indigo-500 shadow-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2  text-base rounded-full text-white  bg-indigo-500 shadow-lg">
              <Link to="/createBlog">Create a memory</Link>
            </li>
            <li className="px-4 py-2  text-base rounded-full text-white  bg-indigo-500 shadow-lg">
              <Link to="/Blog">View your memories</Link>
            </li>
            <li className="px-4 py-2  text-base rounded-full text-white  bg-indigo-500 shadow-lg">
              <Link to="/Guest">Create a Guest</Link>
            </li>
            <li className="px-4 py-2  text-base rounded-full text-white  bg-indigo-500 shadow-lg">
              <Link to="/GuestList">View Your Guests</Link>
            </li>
          </ul>
          <ul className="list-none flex items-center mr-6 space-x-3 text-white">
            <li className="px-4 py-2  text-base rounded-full text-white  bg-indigo-500 shadow-lg">
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
            <Route exact path="/createBlog">
              <CreateBlog token={this.props.token} />
            </Route>
            <Route exact path="/Blog">
              <BlogLibrary token={this.props.token} />
            </Route>
            <Route exact path="/Guest">
              <Guest token={this.props.token} />
            </Route>
            <Route exact path="/GuestList">
              <GuestList token={this.props.token} />
            </Route>
          </Switch>
        </div>
        {/* {this.logoutButton()} */}
      </div>
    );
  }
}
