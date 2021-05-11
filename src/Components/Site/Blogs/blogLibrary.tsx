import React, { Component } from "react";
import Blog from "./Blog";
import CreateBlog from "./createBlog";
import YourMemories from "../../../Assets/your-memories.png";
import UpdateBlogCard from "../Blogs/UpdateBlogCard";
import APIURL from "../../../helpers/environment";

type acceptedProps = {
  token: any;
  updateBlog: Function;
};

interface blogEntry {
  myBlogs: [];
  blogToUpdate: any;
  updateActive: boolean;
  open: boolean;
}

class blogLibrary extends Component<acceptedProps, blogEntry> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      myBlogs: [],
      blogToUpdate: "",
      updateActive: false,
      open: true,
    };
  }

  fetchBlogs = async () => {
    try {
      const response = await fetch(`${APIURL}/blog/`, {
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

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({ updateActive: false });
  };

  render() {
    return (
      <div>
        <div className="flex justify-center my-4">
          <img src={YourMemories} alt="your-memories" className="h-40 w-auto" />
        </div>

        <CreateBlog token={this.props.token} fetchBlogs={this.fetchBlogs} />
        <Blog
          token={this.props.token}
          myBlogs={this.state.myBlogs}
          fetchBlogs={this.fetchBlogs}
          editUpdateBlog={this.editUpdateBlog}
          updateOn={this.updateOn}
        />
        {this.state.updateActive ? (
          <UpdateBlogCard
            token={this.props.token}
            fetchBlogs={this.fetchBlogs}
            blogToUpdate={this.state.blogToUpdate}
            updateOff={this.updateOff}
            open={this.state.open}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default blogLibrary;
