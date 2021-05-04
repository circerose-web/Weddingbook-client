import React, { Component } from "react";
import Couple2 from "../../../Assets/couple2.png";

type acceptedProps = {
  token: any;
  myGuests: any;
  fetchGuests: Function;
};

export class GuestView extends Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
    console.log(this.props);
  }

  deleteGuest = async (id: number) => {
    await fetch(`http://localhost:3000/guest/${id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    });
    return this.props.fetchGuests();
  };

  componentDidUpdate = () => {};

  render() {
    return (
      <div>
        <div className="flex justify-center flex-wrap">
          {this.props.myGuests?.length > 0 ? (
            <>
              {this.props.myGuests?.map((guest: any, index: any) => {
                console.log(guest);
                return (
                  <div
                    className="mx-8 my-12 w-72 rounded-1xl bg-white border shadow-md overflow-hidden"
                    key={guest.id}
                  >
                    <p className="mt-5 text-lg text-gray-800 text-center mb-3">
                      <h1 className="font-semibold">Name:</h1>
                      {guest.name}
                    </p>
                    <p className="text-md text-center mb-5">
                      <h1 className="font-semibold">Side:</h1> {guest.side}
                    </p>
                    <p className="text-md text-center mb-5">
                      <h1 className="font-semibold">Relation to:</h1>{" "}
                      {guest.relation}
                    </p>
                    <p className="text-md text-center mb-5">
                      <h1 className="font-semibold">Spouse:</h1>
                      {guest.theirSpouse}
                    </p>
                    <p className="text-md text-center mb-5">
                      <h1 className="font-semibold">Children:</h1>{" "}
                      {guest.theirKids}
                    </p>
                    <div className="mb-2">
                      <div className="flex flex-wrap space-x-6 justify-center">
                        <button
                          type="button"
                          className="py-2 px-4  bg-indigo-400 hover:bg-indigo-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="py-2 px-4  bg-indigo-400 hover:bg-indigo-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                          onClick={() => this.deleteGuest(guest.id)}
                        >
                          Delete
                        </button>
                        {/* <button
                        className="focus:outline-none focus:ring-1 focus:ring-pink-300 bg-pink-500 hover:bg-pink-300 py-1 px-4 mx-1 mt-4 rounded-full shadow-md text-pink-200 font-sans"
                        onClick={() => this.deleteGuest(guest.id)}
                      >
                        Delete
                      </button> */}
                      </div>
                    </div>
                    <br />
                  </div>
                );
              })}
            </>
          ) : (
            <h3 className="mt-3 text-xl font-semibold text-blue-900">
              You haven't added any guests yet!
            </h3>
          )}
        </div>
        <img src={Couple2} alt="couple" className="w-72 mx-auto" />
      </div>
    );
  }
}

export default GuestView;
