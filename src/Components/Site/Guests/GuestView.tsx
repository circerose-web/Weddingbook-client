import React, { Component } from "react";
import Couple2 from "../../../Assets/couple2.png";

type acceptedProps = {
  token: any;
  myGuests: any;
  fetchGuests: any;
  editUpdateGuest: any;
  updateOn: any;
};

type valueTypes = {
  myGuests: [];
  name: string;
  side: string;
  relation: string;
  theirSpouse: string;
  theirKids: string;
};
export class GuestView extends Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      myGuests: [],
      name: "",
      side: "",
      relation: "",
      theirSpouse: "",
      theirKids: "",
    };
    console.log(this.props);
  }
  componentDidMount() {
    this.props.fetchGuests();
  }

  updateGuest = (id: number) => {
    fetch(`http://localhost:3000/guest/${id}`, {
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
    })
      .then((res) => res.json())
      .then(() => {
        this.props.fetchGuests();
      });
  };

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
        <div id="test" className="flex justify-center flex-wrap">
          {this.props.myGuests?.length > 0 ? (
            <form>
              {this.props.myGuests?.map((guest: any, index: any) => {
                console.log(guest);
                return (
                  <div
                    className="mx-8 my-12 w-72 rounded-1xl bg-white border shadow-md overflow-hidden"
                    key={guest.id}
                  >
                    <div className="mt-5 text-lg text-gray-800 text-center mb-3">
                      <h1 className="font-semibold">Name:</h1>
                      {guest.name}
                    </div>
                    <div className="text-md text-center mb-5">
                      <h1 className="font-semibold">Side:</h1> {guest.side}
                    </div>
                    <div className="text-md text-center mb-5">
                      <h1 className="font-semibold">Relation to:</h1>{" "}
                      {guest.relation}
                    </div>
                    <div className="text-md text-center mb-5">
                      <h1 className="font-semibold">Spouse:</h1>
                      {guest.theirSpouse}
                    </div>
                    <div className="text-md text-center mb-5">
                      <h1 className="font-semibold">Children:</h1>{" "}
                      {guest.theirKids}
                    </div>
                    <div className="mb-2">
                      <div className="flex flex-wrap space-x-6 justify-center">
                        <button
                          type="button"
                          className="py-2 px-4  bg-indigo-400 hover:bg-indigo-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                          onClick={() => {
                            this.props.editUpdateGuest(guest);
                            this.props.updateOn();
                          }}
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
                      </div>
                    </div>
                    <br />
                  </div>
                );
              })}
            </form>
          ) : (
            <h3 className="mt-3 text-xl font-semibold text-blue-900">
              You haven't added any guests yet!
            </h3>
          )}
        </div>
        {/* <img src={Couple2} alt="couple" className="w-72 mx-auto" /> */}
      </div>
    );
  }
}

export default GuestView;
