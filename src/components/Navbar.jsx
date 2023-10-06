import { NavLink } from "react-router-dom";

const gradientColor =
  "bg-gradient-to-r from-blue-600 to-violet-500 text-transparent bg-clip-text";

const gradientColorOnHover =
  "hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-500 hover:text-transparent hover:bg-clip-text";

export const Navbar = () => {
  return (
    <nav className="px-4 py-3 flex justify-between shadow-md rounded-b-md">
      <h1 className={`${gradientColor}`}>
        <NavLink to="/">Snap Fit - Fitness Tracker</NavLink>
      </h1>

      <ul className="flex items-center gap-4 font-semibold">
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="/exercises">Exercises</NavLink>
        </li>
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="foods">Foods</NavLink>
        </li>
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="/goals">Goals</NavLink>
        </li>
      </ul>
    </nav>
  );
};
