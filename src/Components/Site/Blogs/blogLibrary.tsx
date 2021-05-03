import React, { Component } from "react";
import Blog from "./Blog";
import CreateBlog from "./createBlog";

type acceptedProps = {
  token: any;
  // fetchBlogs: any;
};

interface blogEntry {
  myBlogs: [];
  // myFlights: Array<number>
}

class blogLibrary extends Component<acceptedProps, blogEntry> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      myBlogs: [],
    };
  }

  fetchBlogs = async () => {
    try {
      const response = await fetch(`http://localhost:3000/blog/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.token,
        },
      });
      const data = await response.json();
      this.setState({ myBlogs: data.blogs });
      console.log(data);
      console.log(this.state.myBlogs);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchBlogs();
  }

  render() {
    return (
      <div>
        {/* <CreateBlog token={this.props.token} fetchBlogs={this.fetchBlogs} /> */}
        <h2 className="text-center my-2">Memory Library:</h2>
        <Blog
          token={this.props.token}
          myBlogs={this.state.myBlogs}
          fetchBlogs={this.fetchBlogs}
        />
      </div>
    );
  }
}

export default blogLibrary;
