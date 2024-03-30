import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Login from "../Login";
import { signOut, auth } from "../firebase";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return !user ? (
    <Login />
  ) : user.email !== "admin@gmail.com" ? (
    <div className="font-dmsans">
      <div className="flex flex-col justify-center items-center w-screen py-10 space-y-5">
        <img
          className="object-contain w-28 h-28 cursor-pointer"
          src={logo}
          alt="logo"
        />
        <h1 className="font-bold">YOUR ACCOUNT FOR EVERYTHING profile</h1>
        <h1 className="font-bold">Welcome to your account</h1>
        <form className="flex flex-col justify-center items-center space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="disabled:opacity-75 disabled:bg-gray-300 placeholder:text-gray-800 px-5 py-2 outline-none border border-gray-800 w-72"
            disabled
            value={user.name}
          ></input>
          <input
            type="email"
            placeholder="Email address"
            className="disabled:opacity-75 disabled:bg-gray-300 placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
            disabled
            value={user.email}
          />
          <div className="flex justify-center items-center ">
            <button
              className="w-72 bg-black text-white py-2"
              type="submit"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="font-dmsans">
      <div className="flex flex-col justify-center items-center w-screen py-10 space-y-5">
        <img
          className="object-contain w-28 h-28 cursor-pointer"
          src={logo}
          alt="logo"
        />
        <h1 className="font-bold">YOUR ACCOUNT FOR EVERYTHING</h1>
        <h1 className="font-bold">Welcome to your account</h1>
        <form className="flex flex-col justify-center items-center space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="disabled:opacity-75 disabled:bg-gray-300 placeholder:text-gray-800 px-5 py-2 outline-none border border-gray-800 w-72"
            disabled
            value={user.name}
          ></input>
          <input
            type="email"
            placeholder="Email address"
            className="disabled:opacity-75 disabled:bg-gray-300 placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
            disabled
            value={user.email}
          />
          <div className="flex justify-center items-center ">
            <button
              className="w-72 bg-black text-white py-2"
              type="submit"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button>
          </div>
        </form>
        <button className="w-72 bg-black text-white py-2">
          <NavLink to="/admin" className={"navbar-link"}>
            Admin Page
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Profile;