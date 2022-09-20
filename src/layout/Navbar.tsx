import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to={"/"}>Active</NavLink>
        <NavLink to={"/archive"}>Archive</NavLink>
        <NavLink to={"/status"}>Status</NavLink>
      </nav>
    </header>
  );
};
