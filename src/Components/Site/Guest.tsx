import React, { Component } from "react";

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
        <h2 className="text-center">Create a Guest</h2>
        <div className="bg-white bg-opacity-50 max-w-2xl mx-auto p-5 md:p-12 my-10 rounded-lg shadow-2xl w-1/2">
          <form className="space-y-3" onSubmit={this.newGuest}>
            <div className="flex flex-col text-center">
              <label>
                <input
                  type="text"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
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
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  placeholder="Kiddos"
                  onChange={(e) => this.setState({ theirKids: e.target.value })}
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

export default Guest;
