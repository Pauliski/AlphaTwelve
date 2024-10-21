"use client";
import React from "react";
import Image from "next/image";
import logo from "./apha.png";
import Hamburger from "../icons/Hamburger";
import "./navbar.css"

interface NavbarProps {
  toggleSidebar: VoidFunction;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <div className="navbar-wrapper">
      <div className="bg-blue-300 p-2">
        <Image src={logo} width={50} height={50} alt="Picture of the author" />
      </div>
      <div className="hamburger-wrapper" onClick={toggleSidebar}>
        <Hamburger />
      </div>
    </div>
  );
};

export default Navbar;
