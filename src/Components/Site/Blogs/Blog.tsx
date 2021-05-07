import React, { Component } from "react";
import "../../styles/Blog.css";
import Couple from "../../../Assets/couple1.png";

type acceptedProps = {
  token: any;
  myBlogs: any;
  fetchBlogs: Function;
};

type valueTypes = {
  title: string;
  date: string;
  activity: string;
  description: string;
  thoughts: string;
};

export class Blog extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      title: "",
      date: "",
      activity: "",
      description: "",
      thoughts: "",
    };
  }
  componentDidMount() {
    (id: any) => this.handleSubmit(id);
  }

  handleSubmit = (id: number) => {
    console.log(this.props.token);
    if (true) {
      fetch(`http://localhost:3000/blog/${id}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token,
        }),
      });
    }
  };

  updateBlog = (id: number) => {
    fetch(`http://localhost:3000/blog/${id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
      body: JSON.stringify({
        title: this.state.title,
        date: this.state.date,
        activity: this.state.activity,
        description: this.state.description,
        thoughts: this.state.thoughts,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.handleSubmit();
      });
  };

  deleteBlog = async (id: number) => {
    await fetch(`http://localhost:3000/blog/${id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    });
    return this.props.fetchBlogs();
  };

  componentDidUpdate = () => {};

  render() {
    return (
      <div>
        <div className="flex justify-center flex-wrap">
          {this.props.myBlogs?.length > 0 ? (
            <>
              {this.props.myBlogs.map((blog: any, index: any) => {
                console.log(blog);
                return (
                  <div
                    // className="m-4 p-4 max-w-sm border rounded shadow-lg bg-gray-50"
                    className="mx-8 my-12 w-72 rounded-1xl bg-white border shadow-md overflow-hidden"
                    key={blog.id}
                  >
                    <div className="mt-5 text-lg text-gray-800 text-center mb-3">
                      <h1 className="font-semibold">Title:</h1>
                      {blog.title}
                    </div>
                    <div className="mt-5 text-lg text-gray-800 text-center mb-3">
                      <h1 className="font-semibold">Date:</h1>
                      {blog.date}
                    </div>
                    <div className="text-md text-center mb-5">
                      <h1 className="font-semibold">Activity:</h1>
                      {blog.activity}
                    </div>
                    <div className="text-md text-center mb-5">
                      <h1 className="font-semibold">Description:</h1>
                      {blog.description}
                    </div>
                    <div className="text-md text-center mb-5">
                      <h1 className="font-semibold">Thoughts:</h1>
                      {blog.thoughts}
                    </div>
                    <div className="mb-2">
                      <div className="flex flex-wrap space-x-6">
                        <button
                          type="button"
                          className="ml-6 py-2 px-4  bg-indigo-400 hover:bg-indigo-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                          onClick={() => this.deleteBlog(blog.id)}
                        >
                          Delete
                        </button>

                        <button
                          type="button"
                          className="py-2 px-4  bg-indigo-400 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-pink-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                          onClick={() => this.updateBlog(blog.id)}
                        >
                          Update
                        </button>
                      </div>
                      {/* )} */}
                    </div>
                    <br />
                  </div>
                );
              })}
            </>
          ) : (
            <h3 className="mt-3 text-xl font-semibold text-blue-900">
              You haven't created any memories yet, let's create one!
            </h3>
          )}
          <div></div>
        </div>
        <img src={Couple} alt="couple" className="w-72 mx-auto" />
      </div>
    );
  }
}

export default Blog;
