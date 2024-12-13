import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { useGlobalStore } from "../../../stores/useGlobalStore";
import reactUseCookie, { removeCookie } from "react-use-cookie";
import { useUserStore } from "../../../stores/useUserStore";
import { useLoginStore } from "../../../stores/useLoginStore";
import Avatar from "react-avatar";
import { CiUser } from "react-icons/ci";
import { IoPowerOutline } from "react-icons/io5";
import useSWR from "swr";

const Navbar = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useGlobalStore();
  const [isClick, setIsClick] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Local state for cart count

  const [user] = reactUseCookie("user");
  const { userInfo, setUser } = useUserStore();
  const { isLogin, setIsLogin } = useLoginStore();

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: cart, isValidating: cartLoading } = useSWR(
    userInfo ? `https://fakestoreapi.com/carts/${userInfo.id}` : null,
    fetcher,
    { revalidateOnFocus: true }
  );

  // Update cart count when cart data changes
  useEffect(() => {
    setCartCount(cart?.products?.length || 0);
  }, [cart]);

  useEffect(() => {
    if (user) {
      setUser(JSON.parse(user));
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user, setUser, setIsLogin]);

  const handleLogout = () => {
    setUser(null);
    removeCookie("user");
    removeCookie("token");
    setIsLogin(false);
  };

  return (
    <div className="py-[1.5rem] bg-primary shadow-md">
      <div className="container">
        <nav className="relative flex items-center justify-between">
          {/* Left Side */}
          <ul className="items-center gap-4 flex-1 hidden md:flex">
            <NavLink
              to="contactus"
              className={({ isActive }) => (isActive ? "text-accent" : "")}
            >
              <li className="text-sm uppercase">Contact Us</li>
            </NavLink>
            <NavLink
              to="aboutus"
              className={({ isActive }) => (isActive ? "text-accent" : "")}
            >
              <li className="text-sm uppercase">About Us</li>
            </NavLink>
            <NavLink
              to="shop"
              className={({ isActive }) => (isActive ? "text-accent" : "")}
            >
              <li className="text-sm uppercase">Shop</li>
            </NavLink>
          </ul>

          {/* Middle Side */}
          <div className="static md:absolute md:left-1/2 transform md:-translate-x-1/2">
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
              <span className="absolute top-[-10px] right-[-10px] w-[16px] h-[16px] bg-black text-white flex items-center justify-center rounded-full text-[10px]">
                {cartCount}
              </span>
            </NavLink>
            {isLogin ? (
              <div
                onClick={() => setIsClick(!isClick)}
                className="cursor-pointer relative"
              >
                <div className="flex items-center gap-2">
                  <Avatar
                    name={userInfo?.name?.firstname || "Guest"}
                    size="25"
                    round={true}
                  />
                  <span className="capitalize">
                    {userInfo?.name?.firstname || "Guest"}
                  </span>
                  <IoIosArrowDown />
                </div>
                {isClick && (
                  <div className="absolute top-[40px] right-0 z-50 w-[200px] shadow-xl bg-white flex flex-col">
                    <Link to="/profile">
                      <button className="w-full text-left px-4 py-4 hover:bg-gray-200 border-b border-secondary flex items-center gap-3">
                        <CiUser className="w-[22px] h-[22px]" />
                        <span>User Profile</span>
                      </button>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-4 hover:bg-gray-200 border-b border-secondary flex items-center gap-3"
                    >
                      <IoPowerOutline className="w-[22px] h-[22px]" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login">
                <FiUser className="w-[22px] h-[22px]" />
              </NavLink>
            )}
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

