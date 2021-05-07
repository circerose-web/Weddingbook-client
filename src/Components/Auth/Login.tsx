import React, { Component } from "react";

type acceptedProps = {
  token: (token: string | null) => void;
  // user: BaseUser
};

interface LoginState {
  email: string;
  password: string;
  // size: number
  // minLength: number
}

export default class Login extends Component<acceptedProps, LoginState> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.token(data.sessionToken), console.log(data);
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);
  };
  render() {
    return (
      <div className="login">
        <section className="mt-10 max-w-4xl p-6 mx-auto bg-indigo-200 bg-opacity-90 rounded-md shadow-md dark:bg-gray-800">
          <form className="space-y-5" onSubmit={this.handleSubmit}>
            <div className=" relative ">
              <label className="text-gray-700 text-xl font-semibold">
                Email
              </label>
              <input
                type="text"
                id="email"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="email"
                placeholder="Your Email"
                // value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className=" relative">
              <label className="text-gray-700 text-xl font-semibold">
                Password
                <input
                  type="password"
                  id="password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="password"
                  placeholder="Password"
                  // value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <button
              type="submit"
              className="py-2 px-4  bg-red-400 hover:bg-red-500 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}
