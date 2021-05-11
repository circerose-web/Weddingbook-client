import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import APIURL from "../../../helpers/environment";

type acceptedProps = {
  token: string;
  blogToUpdate: any;
  updateOff: any;
  open: boolean;
  fetchBlogs: Function;
};

type valueTypes = {
  modal: boolean;
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
      modal: true,
      title: "",
      date: "",
      activity: "",
      description: "",
      thoughts: "",
    };
    console.log(this.props);
  }

  updateBlog = (id: number) => {
    fetch(`${APIURL}/blog/${this.props.blogToUpdate.id}`, {
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
        this.props.fetchBlogs();
      });
  };

  toggle = () => {
    this.setState({ modal: false });
    this.props.updateOff();
  };

  render() {
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        // className="space-y-3"
      >
        {/* <ModalHeader toggle={this.toggle}> Update Your Memory </ModalHeader> */}
        <ModalBody>
          <div className="bg-indigo-200 bg-opacity-50 max-w-2xl mx-auto p-5 md:p-12 rounded-lg shadow-2xl w-1/2 my-6">
            <div className="flex flex-col text-center">
              <h1 className="font-semibold-serif underline text-2xl text-indigo-800 mb-10">
                Update Your Memory
              </h1>
              <label>
                <input
                  type="text"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent mb-2"
                  placeholder="Title"
                  onChange={(e) => this.setState({ title: e.target.value })}
                  defaultValue={""}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  type="date"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent mb-2"
                  placeholder="Date"
                  onChange={(e) => this.setState({ date: e.target.value })}
                  defaultValue={""}
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label>
                <input
                  type="text"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent mb-2"
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
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent mb-2"
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
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent mb-2"
                  placeholder="Some thoughts"
                  onChange={(e) => this.setState({ thoughts: e.target.value })}
                  // onChange={this.handleFields}
                  defaultValue={""}
                />
              </label>
              <div className="justify-center space-x-5 ml-10 mt-4">
                <Button
                  className="py-2 px-4  bg-indigo-400 hover:bg-indigo-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                  onClick={(id: any) => {
                    this.updateBlog(id);
                    this.toggle();
                  }}
                >
                  Update Blog
                </Button>
                <Button
                  className="py-2 px-4  bg-indigo-400 hover:bg-indigo-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                  onClick={this.toggle}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}
