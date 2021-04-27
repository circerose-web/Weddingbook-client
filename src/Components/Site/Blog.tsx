import React, { Component } from "react";

type acceptedProps = {
  token: any;
};

interface blogEntry {
  title: string;
  date: number;
  activity: string;
  description: string;
  thoughts: string;
}

class Blog extends Component<acceptedProps, blogEntry> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      title: "",
      date: 0,
      activity: "",
      description: "",
      thoughts: "",
    };
  }
  newBlog = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/blog/", {
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
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h2 className="text-center">Creating a Memory</h2>
        <div className="bg-white bg-opacity-50 max-w-2xl mx-auto p-5 md:p-12 my-10 rounded-lg shadow-2xl w-1/2">
          <form className="space-y-3" onSubmit={this.newBlog}>
            <div className="flex flex-col text-center">
              <label>
                <input
                  type="text"
                  className="w-full border-2 border-transparent p-2 rounded focus:outline-none focus:border-blue-400"
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
                  type="text"
                  className="w-full border-2 border-transparent p-2 rounded outline-none focus:border-blue-400"
                  placeholder="Date"
                  onChange={(e) =>
                    this.setState({ date: parseInt(e.target.value) })
                  }
                  // onChange={this.handleFields}
                  defaultValue={""}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  type="text"
                  className="w-full border-2 border-transparent p-2 rounded focus:outline-none focus:border-blue-400"
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
                  className="w-full border-2 border-transparent p-2 rounded focus:outline-none focus:border-blue-400"
                  placeholder="Description"
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
                  className="w-full border-2  border-transparent p-2 rounded focus:outline-none focus:border-blue-400"
                  placeholder="Some thoughts"
                  onChange={(e) => this.setState({ thoughts: e.target.value })}
                  // onChange={this.handleFields}
                  defaultValue={""}
                />
              </label>
            </div>
            <button
              type="submit"
              className="block mx-auto focus:outline-none focus:ring-2 focus:border-blue-200 bg-blue-700 hover:bg-blue-800 py-1 px-4 mt-4 rounded-full shadow-md text-gray-200 font-sans"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Blog;
