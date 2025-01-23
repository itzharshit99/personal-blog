import React, { useState } from "react";
import Home from "../pages/Home";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
const navList = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about-us" },
  { name: "privacy policy", path: "/privacy-policy" },
  { name: "contact", path: "/contact" },
];
const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => setisMenuOpen(!isMenuOpen);
  const { user } = useSelector((state) => state.auth);
  console.log(
    "Auth State:",
    useSelector((state) => state.auth)
  );

  return (
    <header className="bg-white py-6 border">
      <nav className="container mx-auto flex justify-between px-5">
        <a href="/">
          <img src="/logo.svg" alt="" />
        </a>
        <ul className="sm:flex hidden items-center gap-8">
          {navList.map((list, index) => (
            <li key={index}>
              <NavLink
                to={`${list.path}`}
                className={({ isActive }) => [isActive ? "active" : ""]}
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <IoClose className="size-6" />
            ) : (
              <IoMenuSharp className="size-6" />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
          {navList.map((list, index) => (
            <li className="mt-5 px-4" key={index}>
              <NavLink
                onClick={() => setisMenuOpen(false)}
                to={`${list.path}`}
                className={({ isActive }) => [isActive ? "active" : ""]}
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          <li className="px-4 mt-5">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
