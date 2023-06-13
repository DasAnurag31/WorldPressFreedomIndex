import React, { useState } from "react";
import globe from "../assets/globe.svg";
import { Link } from "react-router-dom";
import shareIcon from "../assets/shareIcon.svg";
import Share from "./Share";

const NavBar = () => {
  const toggle = () => {
    setdisplay(true);
  };

  const [display, setdisplay] = useState(false);
  return (
    <div className="z-30 relative">
      <div className="flex flex-col md:flex-row items-center justify-evenly backgroundA py-1">
        <h1 className=" text-white text-center font-bold py-1 md:py-4 text-md md:text-4xl">
          World Press Freedom Index - 2022
        </h1>
        <ul className="text-white text-center font-bold flex gap-4 items-center py-1">
          <button>
            <Link to="/list">List</Link>
          </button>
          <button>
            <Link to="/">Map</Link>
          </button>
          <div className="" onMouseOver={toggle}>
            <img
              className="w-5 h-5"
              src={shareIcon}
              alt="Share this On Socials"
            />
            {display && <Share setdisplay={setdisplay} />}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;