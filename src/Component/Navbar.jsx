import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black h-15 text-white flex items-center justify-between px-2 shadow-[0_0_1rem_rgb(225,225,225,0.3)]">
      <h1 className="font-bold text-xl text-shadow-2xs">Web-App</h1>
      <ul className="hidden sm:flex space-x-3">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
      </ul>
      <button className="hidden sm:block text-sm font-bold rounded bg-blue-600 p-2 hover:bg-blue-700 cursor-pointer">
        Login/SignUp
      </button>

      <div className="sm:hidden">
        <button className="text-4xl">&#8801;</button>
      </div>
    </div>
  );
};

export default Navbar;
