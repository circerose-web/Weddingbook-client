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
      <div className="register">
        <section className="mt-10 max-w-4xl p-6 mx-auto bg-blue-300 rounded-md shadow-md dark:bg-gray-800">
          <form className="space-y-5" onSubmit={this.handleSubmit}>
            <h4>Register</h4>
            <div className="relative">
              <div>
                <input
                  type="text"
                  id="name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="firstName"
                  placeholder="First Name"
                  // value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  id="password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="lastName"
                  placeholder="Last Name"
                  // value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mt-4">
                <input
                  type="email"
                  id="email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="email"
                  placeholder="Email"
                  // value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="mt-4">
                <input
                  type="password"
                  id="password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="password"
                  placeholder="Password"
                  // value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}
