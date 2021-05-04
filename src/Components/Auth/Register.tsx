import React, { Component } from "react";

type acceptedProps = {
  token: (token: string | null) => void;
  // user: BaseUser
};

interface RegisterState {
  // [key: string]: string
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default class Register extends Component<acceptedProps, RegisterState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetch("http://localhost:3000/user/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.token(data.sessionToken);
        console.log(data);
      });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value } as Pick<
      RegisterState,
      keyof RegisterState
    >);
  };

  render() {
    return (
      <div className="bg-indigo-200 bg-opacity-90 p-5 md:p-12 rounded-lg shadow-2xl my-6 w-96">
        <form className="space-y-3" onSubmit={this.handleSubmit}>
          <div className="flex justify-center">
            <h1 className="font-semibold text-blue-900 text-2xl">Register</h1>
          </div>
          <div className="flex text-center">
            <label>
              <input
                type="text"
                className="flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent w-72"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="flex">
            <label>
              <input
                type="text"
                className="flex-1 appearance-none border border-gray-300 w-72 py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                placeholder="Last Name"
                // value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="flex">
            <label>
              <input
                type="email"
                className="flex-1 appearance-none border border-gray-300 w-72 py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                placeholder="Email"
                // value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="flex">
            <label>
              <input
                type="text"
                className="flex-1 appearance-none border border-gray-300 w-72  py-2 px-4 bg-white text-gray-700 placeholder-gray-500 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                placeholder="Password"
                // value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button
            type="submit"
            className="my-4 py-2 px-4  bg-red-400 hover:bg-red-500 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
