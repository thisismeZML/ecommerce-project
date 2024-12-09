import React from "react";
import { FiUser } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Determine whether the current route is "/login" or "/register"
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <div className="py-[1.5rem] bg-primary shadow-md">
      <div className="container">
        <nav className="relative flex items-center justify-between">
          {/* Left Side */}
          <div>
            <Link
              to="/"
              className="text-3xl font-bold font-serif tracking-wider"
            >
              RAYY
            </Link>
          </div>

          {/* Right Side */}
          <div>
            {!isLoginPage && (
              <NavLink to="/login" className="flex items-center gap-4">
                <FiUser className="w-[22px] h-[22px]" />
                <span>Login</span>
              </NavLink>
            )}

            {!isRegisterPage && (
              <NavLink
                to="/register"
                className="flex items-center gap-4 ml-6"
              >
                <FiUser className="w-[22px] h-[22px]" />
                <span>Register</span>
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
