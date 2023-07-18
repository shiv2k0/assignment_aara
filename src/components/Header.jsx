import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-white bg-blue-600 h-16 flex justify-between items-center p-8 ">
      <div className="font-bold">
        <Link to={"/"}>myBlog.com</Link>
      </div>
      <div>
        <ul className="flex gap-5 text-sm font-semibold ">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "border-b-2 font-bold py-1" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blogs"}
              className={({ isActive }) =>
                isActive ? "border-b-2 font-bold py-1" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "border-b-2 font-bold py-1" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "border-b-2 font-bold py-1" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
