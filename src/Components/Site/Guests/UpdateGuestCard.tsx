import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import APIURL from "../../../helpers/environment";

type acceptedProps = {
  token: any;
  guestToUpdate: any;
  updateOff: any;
  open: boolean;
  fetchGuests: any;
};

type valueTypes = {
  modal: boolean;
  name: string;
  side: string;
  relation: string;
  theirSpouse: string;
  theirKids: string;
};

export default class UpdateBlogCard extends Component<
  acceptedProps,
  valueTypes
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      modal: true,
      name: "",
      side: "",
      relation: "",
      theirSpouse: "",
      theirKids: "",
    };
    console.log(this.props);
  }

  updateGuest = async (e: any) => {
    e.preventDefault();
    console.log("please work");
    try {
      const response = await fetch(
        `${APIURL}/guest/${this.props.guestToUpdate.id}`,
        {
          method: "PUT",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.token,
          }),
          body: JSON.stringify({
            name: this.state.name,
            side: this.state.side,
            relation: this.state.relation,
            theirSpouse: this.state.theirSpouse,
            theirKids: this.state.theirKids,
          }),
        }
      );
      const data = await response.json();
      this.props.fetchGuests();
      this.props.updateOff();
    } catch (err) {
      console.log(err);
    }
  };

  toggle = () => {
    this.setState({ modal: false });
    console.log("hello");
    this.props.updateOff();
  };

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalBody>
          <form onSubmit={this.updateGuest}>
            <div className="bg-indigo-200 bg-opacity-50 max-w-2xl mx-auto p-5 md:p-12 rounded-lg shadow-2xl  my-6 justify-center">
              <div>
                <h1 className="font-semibold-serif underline text-2xl text-indigo-800 mb-8 text-center">
                  Update Your Guest
                </h1>
                <label>
                  <input
                    type="text"
                    value={this.state.name}
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent mb-2"
                    placeholder="Name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label>
                  <input
                    type="text"
                    value={this.state.side}
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent mb-2"
                    placeholder="Side of Family"
                    onChange={(e) => this.setState({ side: e.target.value })}
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label>
                  <input
                    type="text"
                    value={this.state.relation}
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent mb-2"
                    placeholder="Relation"
                    onChange={(e) =>
                      this.setState({ relation: e.target.value })
                    }
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label>
                  <input
                    type="text"
                    value={this.state.theirSpouse}
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent mb-2"
                    placeholder="Spouse"
                    onChange={(e) =>
                      this.setState({ theirSpouse: e.target.value })
                    }
                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label>
                  <input
                    type="text"
                    value={this.state.theirKids}
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent mb-2"
                    placeholder="Kiddos"
                    onChange={(e) =>
                      this.setState({ theirKids: e.target.value })
                    }
                  />
                </label>
                <div className="justify-center space-x-5 ml-20 mt-4">
                  <Button
                    className="py-2 px-4  bg-indigo-400 hover:bg-indigo-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                    type="submit"
                  >
                    Update Guest
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
            {/* <Button color="primary" type="submit">
              Update
            </Button>
            <Button color="secondary" onClick={this.toggle}>
            Cancel
          </Button> */}
          </form>
        </ModalBody>
      </Modal>
    );
  }
}
