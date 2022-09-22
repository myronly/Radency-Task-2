import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to={"/active"} className={({ isActive }) => (isActive ? "active" : "")}>
          Active
        </NavLink>
        <NavLink to={"/archive"} className={({ isActive }) => (isActive ? "active" : "")}>
          Archive
        </NavLink>
        <NavLink to={"/status"} className={({ isActive }) => (isActive ? "active" : "")}>
          Status
        </NavLink>
      </nav>
    </header>
  );
};
