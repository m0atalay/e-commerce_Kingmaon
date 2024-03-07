import React from "react";
import NavbarLeft from "./Navbarİtem/NavbarLeft";
import NavbarRight from "./Navbarİtem/NavbarRight";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-5  ">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
