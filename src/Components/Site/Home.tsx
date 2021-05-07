import React, { Component } from "react";
import "../styles/Home.css";
import Wedding from "../../Assets/wedding1.jpg";
import HomePic from "../../Assets/home.png";
import { Link } from "react-router-dom";
import GuestListPic from "../../Assets/guestlist.png";
import WeddingBookPic from "../../Assets/weddingbook.png";
// import BlogLibrary from "./Blogs/blogLibrary";

type acceptedProps = {
  token: any;
};
export default class Home extends Component<acceptedProps, {}> {
  render() {
    return (
      <div>
        <div>
          <img src={HomePic} alt="home pic" className="w-4/5" />
          <div className="flex items justify-center">
            <ul className="list-none flex items-center mr-6 space-x-3 justify-between">
              <div className="flex flex-col">
                <li className="px-6 pt-4 w-48 h-16 rounded-full text-white  bg-indigo-500 shadow-lg ml-80 text-xl font-semibold">
                  <Link to="/Blog">Wedding Book!</Link>
                </li>
                <li>
                  <img
                    src={WeddingBookPic}
                    alt="guest list"
                    className="ml-72 w-2/5"
                  />
                </li>
              </div>
              <div>
                <li className="px-6  w-48 mt-4  h-12 rounded-full text-white  bg-indigo-500 shadow-lg ml-80 text-xl pt-2 font-semibold">
                  <Link to="/GuestList"> Your Guest List!</Link>
                </li>
                <li>
                  <img
                    src={GuestListPic}
                    alt="guest list"
                    className="ml-72 w-2/5"
                  />
                </li>
              </div>
              {/* <div>
              <li className="px-4  w-48 h-12 text-base rounded-full text-white  bg-indigo-500 shadow-lg">
                <Link to="/Blog">View your memories</Link>
              </li>
              <li className="px-4 w-48 mt-4  h-12 text-base rounded-full text-white  bg-indigo-500 shadow-lg ">
                <Link to="/GuestList">View Your Guests</Link>
              </li>
            </div> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
