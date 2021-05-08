import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { blogEntry } from "./createBlog";

type acceptedProps = {
  token: any;
  updateBlog: [];
  handleSubmit2: any;
  blogToUpdate: any;
};

type valueTypes = {
  modal: boolean;
  updateBlog: [];
  title: string;
  date: string;
  activity: string;
  description: string;
  thoughts: string;
};

export default class UpdateBlogCard extends Component<
  acceptedProps,
  valueTypes
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      modal: false,
      updateBlog: [],
      title: "",
      date: "",
      activity: "",
      description: "",
      thoughts: "",
    };
    console.log(this.props);
  }

  updateBlog = (id: number) => {
    fetch(`http://localhost:3000/blog/${this.props.blogToUpdate.id}`, {
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
      .then((id: number) => {
        this.props.handleSubmit2();
      });
  };

  toggle = () => {
    this.setState({ modal: true });
  };

  render() {
    return (
      <div>
        <div className="bg-indigo-200 bg-opacity-50 max-w-2xl mx-auto p-5 md:p-12 rounded-lg shadow-2xl w-1/2 my-6">
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="space-y-3"
            onChange={this.props.handleSubmit2}
          >
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
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
                    onChange={(e) =>
                      this.setState({ activity: e.target.value })
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
                    onChange={(e) =>
                      this.setState({ thoughts: e.target.value })
                    }
                    // onChange={this.handleFields}
                    defaultValue={""}
                  />
                </label>
              </div>
              <div className="justify-center">
                <Button color="primary" onClick={this.toggle}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </div>
              {/* <button
              type="submit"
              className="block mx-auto focus:outline-none focus:ring-2 focus:border-blue-200 bg-blue-700 hover:bg-blue-800 py-1 px-4 mt-4 rounded-full shadow-md text-gray-200 font-sans"
            >
              Submit
            </button> */}
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
