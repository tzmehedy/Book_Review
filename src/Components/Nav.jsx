import {NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              ></ul>
            </div>
            <a className="btn btn-ghost font-bold text-xl">Book Vibe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  gap-4">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] rounded-lg font-bold p-3 text-xl bg-slate-100"
                    : "font-bold p-3 text-xl"
                }
              >
                Home
              </NavLink>

              <NavLink
                to={"/listedBooks"}
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] rounded-lg font-bold p-3 text-xl bg-slate-100"
                    : "font-bold p-3 text-xl"
                }
              >
                Listed Books
              </NavLink>

              <NavLink
                to={"/pagesToRead"}
                className={({ isActive }) =>
                  isActive
                    ? "border border-[#23BE0A] rounded-lg font-bold p-3 text-xl bg-slate-100"
                    : "font-bold p-3 text-xl"
                }
              >
                Pages to Read
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <button className="bg-[#23BE0A] p-3 rounded-lg font-bold">
              Sign In
            </button>
            <button className="bg-[#59C6D2] p-3 rounded-lg font-bold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
};

export default Nav;