import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Planner</h1>
        <SignedInLinks />
      <SignedOutLinks/>
      </Link>
    </div>
  );
};

export default Navbar;
