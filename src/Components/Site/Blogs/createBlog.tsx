import React, { Component } from "react";
import "../../styles/Blog.css";
import CreateBlog from "../../../Assets/create-memory.png";

type acceptedProps = {
  token: string;
  fetchBlogs: any;
};

export interface blogEntry {
  title: string;
  date: string;
  activity: string;
  description: string;
  thoughts: string;
}

class Blog extends Component<acceptedProps, blogEntry> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      title: "",
      date: "",
      activity: "",
      description: "",
      thoughts: "",
    };
    console.log(this.props.token);
  }
  newBlog = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/blog/`, {
        method: "POST",
        body: JSON.stringify({
          title: this.state.title,
          date: this.state.date,
          activity: this.state.activity,
          description: this.state.description,
          thoughts: this.state.thoughts,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.token,
        }),
      });
      const data = await response.json();
      console.log(data);
      this.props.fetchBlogs();
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <div className="flex justify-center">
          <img
            src={CreateBlog}
            alt="create blog graphic"
            className="h-56 w-auto my-6"
          />
        </div>
        <div className="bg-indigo-200 bg-opacity-50 max-w-2xl mx-auto p-5 md:p-12 rounded-lg shadow-2xl w-1/2 my-6">
          <form className="space-y-3" onSubmit={this.newBlog}>
            <div className="flex flex-col text-center">
              <label>
                <input
                  type="text"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  placeholder="Title"
                  onChange={(e) => this.setState({ title: e.target.value })}
                  // onChange={this.handleFields}
                  defaultValue={""}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  type="date"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  placeholder="Date"
                  onChange={(e) => this.setState({ date: e.target.value })}
                  // onChange={this.handleFields}
                  defaultValue={""}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  type="text"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  placeholder="Activity"
                  onChange={(e) => this.setState({ activity: e.target.value })}
                  // onChange={this.handleFields}
                  defaultValue={""}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  type="text"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  placeholder="Description"
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                  // onChange={this.handleFields}
                  defaultValue={""}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <textarea
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  placeholder="Some thoughts"
                  onChange={(e) => this.setState({ thoughts: e.target.value })}
                  // onChange={this.handleFields}
                  defaultValue={""}
                />
              </label>
            </div>
            <div className="justify-center">
              <button
                type="submit"
                className="py-2 px-4  bg-indigo-400 hover:bg-indigo-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
              >
                Submit
              </button>
            </div>
            {/* <button
              type="submit"
              className="block mx-auto focus:outline-none focus:ring-2 focus:border-blue-200 bg-blue-700 hover:bg-blue-800 py-1 px-4 mt-4 rounded-full shadow-md text-gray-200 font-sans"
            >
              Submit
            </button> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Blog;
