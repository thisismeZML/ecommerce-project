import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { useGlobalStore } from "../../../stores/useGlobalStore";

const Navbar = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useGlobalStore();
  return (
    <div className="py-[1.5rem] bg-primary shadow-md">
      <div className="container">
        <nav className="relative flex items-center justify-between">
          {/* Left Side */}
          <ul className="items-center gap-4 flex-1 hidden md:flex">
            <NavLink to="contactus" className={({ isActive }) => isActive ? "text-accent" : ""}>
              <li className="text-sm uppercase">Contact Us</li>
            </NavLink>
            <NavLink to="aboutus" className={({ isActive }) => isActive ? "text-accent" : ""}>
              <li className="text-sm uppercase">About Us</li>
            </NavLink>
            <NavLink to="shop" className={({ isActive }) => isActive ? "text-accent" : ""}>
              <li className="text-sm uppercase">Shop</li>
            </NavLink>
          </ul>

          {/* Middle Side */}
          <div className=" static md:absolute md:left-1/2 transform md:-translate-x-1/2">
            <Link
              to="/"
              className="text-3xl font-bold font-serif tracking-wider"
            >
              RAYY
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6 flex-1 justify-end">
            <NavLink to="cart" className="relative">
              <AiOutlineShopping className="w-6 h-6" />
              <span className=" absolute top-[-10px] right-[-10px] w-[16px] h-[16px] bg-black text-white flex items-center justify-center rounded-full text-[10px]">
                0
              </span>
            </NavLink>
            <NavLink to="/login">
              <FiUser className="w-[22px] h-[22px]" />
            </NavLink>
            <button onClick={() => setIsDrawerOpen(true)} className="md:hidden">
              <HiOutlineMenu className="w-[22px] h-[22px]" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
