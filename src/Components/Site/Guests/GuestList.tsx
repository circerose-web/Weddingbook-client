import React, { Component } from "react";
import GuestView from "./GuestView";
import GuestListPic from "../../../Assets/guest-list.png";
import UpdateGuestCard from "../Guests/UpdateGuestCard";

type acceptedProps = {
  token: any;
  updateGuest: Function;
};

interface guestEntry {
  myGuests: [];
  guestToUpdate: any;
  updateActive: boolean;
  open: boolean;
}

class GuestList extends Component<acceptedProps, guestEntry> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      myGuests: [],
      guestToUpdate: "",
      updateActive: false,
      open: true,
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
      // console.log(this.state.myGuests);
      return data;
    } catch (err) {
      console.log();
    }
  };

  componentDidMount() {
    this.fetchGuests();
  }
  editUpdateGuest = (guest: any) => {
    this.setState({ guestToUpdate: guest });
  };

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({ updateActive: false });
  };

  render() {
    return (
      <div>
        <div className="flex justify-center my-4">
          <img src={GuestListPic} alt="guest-list" className="h-40 w-auto" />
        </div>

        <GuestView
          token={this.props.token}
          myGuests={this.state.myGuests}
          fetchGuests={this.fetchGuests}
          editUpdateGuest={this.editUpdateGuest}
          updateOn={this.updateOn}
        />
        {this.state.updateActive ? (
          <UpdateGuestCard
            token={this.props.token}
            fetchGuests={this.fetchGuests}
            guestToUpdate={this.state.guestToUpdate}
            updateOff={this.updateOff}
            open={this.state.open}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default GuestList;
