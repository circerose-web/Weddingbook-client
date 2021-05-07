import React, { Component } from "react";
import { guestEntry } from "../Guests/Guest";
import { Modal } from "antd";
import Guest from "../Guests/Guest";

interface acceptedProps {
  token: any;
  fetchGuest: () => void;
  updateGuest: any;
  open: boolean;
  updateOff: () => void;
}

interface UpdateGuestEntryState extends guestEntry {
  isModalVisible: boolean;
}

export class UpdateGuest extends Component<
  acceptedProps,
  UpdateGuestEntryState
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      isModalVisible: true,
      name: "",
      side: "",
      relation: "",
      theirSpouse: "",
      theirKids: "",
    };
    console.log(this.props.token);
    console.log("hello");
  }
  UpdateBlogPost = async (id: any) => {
    // e.preventDefault()
    console.log("random");
    try {
      const response = await fetch(
        `http://localhost:3000/blog/${this.props.updateGuest.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: this.state.name,
            side: this.state.side,
            relation: this.state.relation,
            theirSpouse: this.state.theirSpouse,
            theirKids: this.state.theirKids,
          }),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.token,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      console.log(id);
      this.props.updateOff();
      // this.setState({ flights: data })
      this.props.fetchGuests(); // calling flight library again after updating new flight
    } catch (err) {
      console.log(err);
    }
  };
  // UpdateBlogPost = async (id: any) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3000/blog/${this.props.updateBlog.id}`,
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           title: this.state.title,
  //           date: this.state.date,
  //           activity: this.state.activity,
  //           description: this.state.description,
  //           thoughts: this.state.thoughts,
  //         }),
  //         headers: new Headers({
  //           "Content-Type": "application/json",
  //           Authorization: this.props.token,
  //         }),
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     this.props.updateOff();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    //prettier-ignore
    this.setState(({ [name]: value } as unknown) as Pick<guestEntry,keyof guestEntry>)
    console.log(value);
  };
  handleOk = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(e);
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.props.updateOff();
  };
  render() {
    return (
      <div>
        <Modal
          title="Update Flight Information"
          visible={true}
          // onOk={this.handleOk}
          onCancel={this.handleCancel}
          // footer={null}
          footer={[
            <button
              key="back"
              onClick={this.handleCancel}
              className="block mx-auto focus:outline-none focus:ring-2 focus:border-purple-500 bg-red-500 hover:bg-red-300 py-1 px-4 mt-4 rounded-full shadow-md text-red-200 font-sans"
            >
              Cancel
            </button>,
            <button
              type="submit"
              className="block mx-auto focus:outline-none focus:ring-2 focus:border-purple-500 bg-red-500 hover:bg-red-300 py-1 px-4 mt-4 rounded-full shadow-md text-red-200 font-sans"
            >
              Submit
            </button>,
          ]}
        >
          <h1>HELLO</h1>
        </Modal>
        {/* <div>
          <Modal
            title="Update Flight Information"
            visible={true}
            // onOk={this.handleOk}
            onCancel={this.handleCancel}
            // footer={null}
            footer={[
              <button
                key="back"
                onClick={this.handleCancel}
                className="block mx-auto focus:outline-none focus:ring-2 focus:border-purple-500 bg-red-500 hover:bg-red-300 py-1 px-4 mt-4 rounded-full shadow-md text-red-200 font-sans"
              >
                Cancel
              </button>,
              <button
                type="submit"
                className="block mx-auto focus:outline-none focus:ring-2 focus:border-purple-500 bg-red-500 hover:bg-red-300 py-1 px-4 mt-4 rounded-full shadow-md text-red-200 font-sans"
              >
                Submit
              </button>,
            ]}
          >
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                {
                  this.UpdateBlogPost(e);
                }
                // {this.props.fetchFlights()}
              }}
            >
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
                    type="text"
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
            </form>
          </Modal>
        </div> */}
      </div>
    );
  }
}

export default UpdateBlog;
