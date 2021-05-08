import React, { Component } from "react";

type acceptedProps = {
  token: any;
  updateGuest: [];
  handleSubmit2: any;
};

type valueTypes = {
  updateGuest: [];
  name: string;
  side: string;
  relation: string;
  theirSpouse: string;
  theirKids: string;
};

export default class UpdateGuestCard extends Component<
  acceptedProps,
  valueTypes
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      updateGuest: [],
      name: "",
      side: "",
      relation: "",
      theirSpouse: "",
      theirKids: "",
    };
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div className="bg-indigo-200 bg-opacity-50 max-w-2xl mx-auto p-5 md:p-12 my-4 rounded-lg shadow-2xl w-1/2">
          <form className="space-y-3" onChange={this.props.handleSubmit2}>
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
