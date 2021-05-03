import React, { Component } from "react";
import logo from "./logo.svg";
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Site/Navbar";
import Blog from "./Components/Site/Blogs/createBlog";
import Guest from "./Components/Site/Guests/Guest";
import Home from "./Components/Site/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

type valueTypes = {
  token: any;
};

class App extends Component<{}, valueTypes> {
  constructor(props: valueTypes) {
    super(props);
    this.state = {
      token: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("sessionToken")) {
      this.setState({
        token: localStorage.getItem("sessionToken"),
      });
    }
  }

  updateToken = (newToken: any) => {
    localStorage.setItem("sessionToken", newToken);
    this.setState({ token: newToken });
    console.log("is this updating the token", this.state.token);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ token: "" });
    console.log("token cleared");
  };

  protectedViews = () => {
    return this.state.token === localStorage.getItem("sessionToken") ? (
      <Router>
        <Navbar logout={this.clearToken} token={this.state.token} />
      </Router>
    ) : (
      <Auth token={this.updateToken} />
    );
  };

  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <Navbar logout={this.clearToken} token={this.updateToken} />
      //     <Auth token={this.updateToken} />
      //     {/* <Route path="/" exact component={Auth} /> */}
      //     <Route exact path="/Blog" component={Blog} />
      //     <Route exact path="/Guest" component={Guest} />
      //   </div>
      // </Router>
      <div className="App">{this.protectedViews()}</div>
    );
  }
}

export default App;
