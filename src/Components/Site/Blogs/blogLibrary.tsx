import React, { Component } from "react";
import Blog from "./Blog";
import CreateBlog from "./createBlog";
import YourMemories from "../../../Assets/your-memories.png";

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
        <div className="flex justify-center my-4">
          <img src={YourMemories} alt="your-memories" className="h-40 w-auto" />
        </div>
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
