import React, { Component } from "react";
import CreateGuest from "../../../Assets/create-guest.png";

type acceptedProps = {
  token: any;
};

interface guestEntry {
  name: string;
  side: string;
  relation: string;
  theirSpouse: string;
  theirKids: string;
}

class Guest extends Component<acceptedProps, guestEntry> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      name: "",
      side: "",
      relation: "",
      theirSpouse: "",
      theirKids: "",
    };
    console.log(this.props.token);
  }
  newGuest = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/guest/", {
      method: "POST",
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
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="flex justify-center">
          <img
            src={CreateGuest}
            alt="create guest graphic"
            className="h-60 w-auto my-6"
          />
        </div>
        <div className="bg-indigo-200 bg-opacity-50 max-w-2xl mx-auto p-5 md:p-12 my-4 rounded-lg shadow-2xl w-1/2">
          <form className="space-y-3" onSubmit={this.newGuest}>
            <div className="flex flex-col text-center">
              <label>
                <input
                  type="text"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  placeholder="Name"
                  onChange={(e) => this.setState({ name: e.target.value })}
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
                  placeholder="Side of Family"
                  onChange={(e) => this.setState({ side: e.target.value })}
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
                  placeholder="Relation"
                  onChange={(e) => this.setState({ relation: e.target.value })}
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
                  placeholder="Spouse"
                  onChange={(e) =>
                    this.setState({ theirSpouse: e.target.value })
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
                  placeholder="Kiddos"
                  onChange={(e) => this.setState({ theirKids: e.target.value })}
                  // onChange={this.handleFields}
                  defaultValue={""}
                />
              </label>
            </div>
            <button
              type="submit"
              className="py-2 px-4  bg-indigo-400 hover:bg-indigo-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Guest;
