import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

import { AppContext } from "../utils/AppContext";

const NavBar = () => {
  const context = useContext(AppContext);
  const { user, setShowLogin, logout, credits } = context;

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-42" />
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6  py-1.5 sm:py-3 rounded-lg hover:scale-105 transition-all duration-700"
              onClick={() => navigate("/buy")}
            >
              <img src={assets.credit_star} alt="" className="w-5" />
              <p className="text-xm sm:text-sm font-medium text-gray-600">
                Credits Left : {credits}
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">
              Hello, {user.name}
            </p>

            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-10 drop-shadow"
              />
              <div className="absolute hidden group-hover:block  top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-1 bg-white rounded-md border text-sm">
                  <li
                    onClick={logout}
                    className="cursor-pointer py-1 px-2 pr-10"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <p
              onClick={() => {
                navigate("/buy");
              }}
              className="cursor-pointer "
            >
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className=" bg-zinc-800 text-white px-4 py-2 rounded-lg md:px-10"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
