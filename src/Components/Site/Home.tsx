import React, { Component } from "react";
import "../styles/Home.css";
import Wedding from "../../Assets/wedding1.jpg";
import HomePic from "../../Assets/home.png";
// import BlogLibrary from "./Blogs/blogLibrary";

type acceptedProps = {
  token: any;
};
export default class Home extends Component<acceptedProps, {}> {
  render() {
    return (
      <div>
        <img src={HomePic} alt="home pic" />
      </div>
      //   <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
      //     <div className="text-black">
      //       <h1 className="text-2xl font-semibold">Welcome your wedding book!</h1>
      //       <div>
      //         <h3 className="text-xl pl-2 pt-20 font-semibold">
      //           This app isn't your average planner. It is a place for you and our
      //           spouse to look back on for years to come.
      //         </h3>
      //         <h3 className="text-xl pl-10 pt-20 font-semibold">
      //           The planning process goes by so quickly you may not have time to
      //           take it all in.
      //         </h3>
      //         <h4 className="text-lg pl-20 pt-20 font-semibold">
      //           Keep this as a snapshot of every little detail leading up to your
      //           big day.
      //         </h4>
      //       </div>
      //     </div>
      //     <div className="flex items-center justify-center w-full h-96 md:w-1/2">
      //       <img
      //         className="object-cover w-full h-full max-w-2xl rounded-md"
      //         src={Wedding}
      //         alt="wedding"
      //       />
      //     </div>
      // </div>
    );
  }
}
