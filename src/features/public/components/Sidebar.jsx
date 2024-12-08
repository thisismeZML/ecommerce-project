import React from "react";
import { HiXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useGlobalStore } from "../../../stores/useGlobalStore";

const Sidebar = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useGlobalStore();

  return (
    <div
      className={` md:hidden w-[300px] fixed top-0 bottom-0 right-0 z-50 bg-primary shadow-lg p-4 ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      } duration-200`}
    >
      <div className="flex items-center justify-end">
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="bg-black size-7 text-white flex items-center justify-center rounded-full"
        >
          <HiXMark />
        </button>
      </div>
      <div>
        <ul className="gap-6 flex flex-col p-7">
          <NavLink to="shop">
            <li className="text-sm uppercase">Shop</li>
          </NavLink>
          <NavLink to="contactus">
            <li className="text-sm uppercase">Contact Us</li>
          </NavLink>
          <NavLink to="aboutus">
            <li className="text-sm uppercase">About Us</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
