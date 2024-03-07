import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";

const NavbarRight = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Search"
        />
        <CiSearch size={25} />
      </div>
      <FaHeart size={28} />
      <div className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-w rounded-full w-5 h-5 flex items-center justify-center text-cyan-50">
          3
        </div>
        <BsFillBasket3Fill size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
