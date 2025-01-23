import React, { useState } from "react";
import Home from "../pages/Home";
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import avatarImg from "../assets/commentor.png"
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";
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
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();
  const handleLogout = async ()=>{
    try {
      await logoutUser().unwrap();
      dispatch(logout());

    } catch (error) {
      
    }
  }

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
          {
            user && user.role === "user" ? (
              <li className="flex items-center gap-3">
                <img src={avatarImg} alt="" className="size-8" />
                <button onClick={handleLogout} className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm">Logout</button>
              </li>

            ) : (
              <NavLink to="/login">Login</NavLink>

            )
          }
          {
            user && user.role === "admin" && (
              <li className="flex items-center gap-3">
                <img src={avatarImg} alt="" className="size-8" />
                <Link to="/dashboard" ><button className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm">Dashboard</button></Link>
              </li>

            )
          }
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
