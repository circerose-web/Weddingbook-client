import React, { Component } from "react";

type acceptedProps = {
  token: any;
  myBlogs: any;
  fetchBlogs: Function;
};

export class blogCard extends Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
  }

  deleteBlog = async (id: number) => {
    await fetch(`http://localhost:3000/blog/${id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    });
    return this.props.fetchBlogs();
    // .then(() => {this.props.fetchFlights()}) // updating flight list after one is deleted
  };

  componentDidUpdate = () => {
    // console.log(this.props.myFlights)
  };

  render() {
    return (
      <div>
        <div className="flex justify-center flex-wrap">
          {this.props.myBlogs.length > 0 ? (
            <>
              {this.props.myBlogs.map((blog: any) => {
                return (
                  <div
                    // className="m-4 p-4 max-w-sm border rounded shadow-lg bg-gray-50"
                    className="mx-8 my-12 w-72 rounded-1xl bg-white border shadow-md overflow-hidden"
                    key={blog.id}
                  >
                    <p className="mt-5 text-2xl text-gray-800 text-center mb-3 font-serif">
                      {blog.date}
                    </p>
                    <p className="text-md text-center font-serif mb-5">
                      {blog.activity}
                    </p>
                    <p className="text-md text-center font-serif mb-5">
                      {blog.description}
                    </p>
                    <p className="text-md text-center font-serif mb-5">
                      {blog.thoughts}
                    </p>
                    <div className="mb-2">
                      <button
                        className="focus:outline-none focus:ring-1 focus:ring-pink-300 bg-pink-500 hover:bg-pink-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-pink-200 font-sans"
                        onClick={() => this.deleteBlog(blog.id)}
                      >
                        Delete
                      </button>
                      {/* )} */}
                    </div>
                    <br />
                  </div>
                );
              })}
            </>
          ) : (
            <h3 className="mt-3">
              You haven't created any memories yet, let's create one!
            </h3>
          )}
        </div>
      </div>
    );
  }
}

export default blogCard;
