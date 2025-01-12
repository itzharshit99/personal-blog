import React from "react";
import Home from "../pages/Home";
import { NavLink } from "react-router-dom";
const navList = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about-us" },
  { name: "privacy policy", path: "/privacy-policy" },
  { name: "contact", path: "/contact" },
];
const Navbar = () => {
  return (
    <header className="bg-white py-6 border">
      <nav className="container mx-auto flex justify-between px-5">
        <a href="/">
          <img src="/logo.svg" alt="" />
        </a>
        <ul className="sm:flex hidden items-center gap-8">
          {navList.map((list, index) => (
            <li>
              <NavLink
                to={`${list.path}`}
                className={({ isActive}) =>
                  [
                    isActive ? "active" : ""
                  ]
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
