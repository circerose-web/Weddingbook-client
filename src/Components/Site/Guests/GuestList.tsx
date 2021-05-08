import React, { Component } from "react";
import GuestView from "./GuestView";
import GuestListPic from "../../../Assets/guest-list.png";
import UpdateGuestCard from "../Guests/UpdateGuestCard";

type acceptedProps = {
  token: any;
  updateGuest: [];
  handleSubmit2: any;
  // fetchBlogs: any;
};

interface guestEntry {
  myGuests: [];
}

class GuestList extends Component<acceptedProps, guestEntry> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      myGuests: [],
    };
  }

  fetchGuests = async () => {
    try {
      const response = await fetch(`http://localhost:3000/guest/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.token,
        },
      });
      const data = await response.json();
      this.setState({ myGuests: data.guests });
      console.log(this.state.myGuests);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchGuests();
  }

  render() {
    return (
      <div>
        {/* <CreateBlog token={this.props.token} fetchBlogs={this.fetchBlogs} /> */}
        <div className="flex justify-center my-4">
          <img src={GuestListPic} alt="guest-list" className="h-40 w-auto" />
        </div>

        <UpdateGuestCard
          token={this.props.token}
          updateGuest={this.props.updateGuest}
          handleSubmit2={this.props.handleSubmit2}
        />

        <GuestView
          token={this.props.token}
          myGuests={this.state.myGuests}
          fetchGuests={this.fetchGuests}
        />
      </div>
    );
  }
}

export default GuestList;
