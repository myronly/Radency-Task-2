import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to={"Radency-Task-2/active"} className={({ isActive }) => (isActive ? "active" : "")}>
          Active
        </NavLink>
        <NavLink to={"Radency-Task-2/archive"} className={({ isActive }) => (isActive ? "active" : "")}>
          Archive
        </NavLink>
        <NavLink to={"Radency-Task-2/status"} className={({ isActive }) => (isActive ? "active" : "")}>
          Status
        </NavLink>
      </nav>
    </header>
  );
};
