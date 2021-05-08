import React, { Component } from "react";
import Blog from "./Blog";
import CreateBlog from "./createBlog";
import YourMemories from "../../../Assets/your-memories.png";
import UpdateBlogCard from "../Blogs/UpdateBlogCard";

type acceptedProps = {
  token: any;
  handleSubmit2: [];
  updateBlog: [];
};

interface blogEntry {
  myBlogs: [];
  blogToUpdate: any;
  updateActive: boolean;
}

class blogLibrary extends Component<acceptedProps, blogEntry> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      myBlogs: [],
      blogToUpdate: "",
      updateActive: false,
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

  editUpdateBlog = (blog: any) => {
    this.setState({ blogToUpdate: blog });
  };

  render() {
    return (
      <div>
        <div className="flex justify-center my-4">
          <img src={YourMemories} alt="your-memories" className="h-40 w-auto" />
        </div>
        {/* <UpdateBlogCard
          token={this.props.token}
          updateBlog={this.props.updateBlog}
          handleSubmit2={this.props.handleSubmit2}
        /> */}
        <Blog
          token={this.props.token}
          myBlogs={this.state.myBlogs}
          fetchBlogs={this.fetchBlogs}
          editUpdateBlog={this.editUpdateBlog}
          updateActive={this.state.updateActive}
        />
        {this.state.updateActive ? (
          <UpdateBlogCard
            token={this.props.token}
            updateBlog={this.props.updateBlog}
            handleSubmit2={this.props.handleSubmit2}
            blogToUpdate={this.state.blogToUpdate}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default blogLibrary;
