import React, { Component } from "react";
import CreateBlog from "./createBlog";
// import blogCard from "./blogCard";

type acceptedProps = {
  token: any;
};

interface blogEntry {
  myBlogs: [];
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
      const response = await fetch(`http://localhost:3000/blog/mine`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.token,
        },
      });
      const data = await response.json();
      this.setState({ myBlogs: data });
      console.log(this.state.myBlogs);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    console.log(this.props.token);
    this.fetchBlogs();
  }

  render() {
    return (
      <div>
        <CreateBlog token={this.props.token} fetchBlogs={this.fetchBlogs} />
        <h2 className="text-center my-2">
          Let's take a look at your memories!
        </h2>
        {/* <blogCard
          token={this.props.token}
          myBlogs={this.state.myBlogs}
          fetchBlogs={this.fetchBlogs}
        /> */}
      </div>
    );
  }
}

export default blogLibrary;
