import React, { Component } from "react";
import Blog from "../Site/Blog";

type acceptedProps = {
  token: any;
};

interface BlogsState {
  myBlogs: [];
}

class blogCard extends Component<acceptedProps, BlogsState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      myBlogs: [],
    };
  }
  fetchmyBlogs = () => {
    fetch(`http://localhpst:3000/blog/mine`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  render() {
    return <div></div>;
  }
}
