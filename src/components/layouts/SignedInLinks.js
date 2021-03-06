import React from "react";
import { NavLink } from "react-router-dom";
const SignedInLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/createproject">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/">AM</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
