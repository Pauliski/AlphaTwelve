"use client";
import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import Hamburger from "../icons/Hamburger";
import HomeIcon from "../icons/HomeIcon";
import EventIcon from "../icons/EventIcon";
import SpeakersIcon from "../icons/SpeakersIcon";
import ReportIcon from "../icons/ReportIcon";
import NotificationIcon from "../icons/NotificationIcon";
import MessageIcon from "../icons/MessageIcon";
import SettingsIcon from "../icons/SettingsIcon";
import CollapseIcon from "../icons/CollapseIcon";
import "./sidebar.css";
import PersonIcon from "../icons/PersonIcon";
import Image from "next/image";
import logo from "./apha.png";

interface SidebarProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const Sidebar = ({ isOpen, toggleIsOpen }: SidebarProps) => {
  const [isScreenLarge, setIsScreenLarge] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      console.log('resizing');
      
      setIsScreenLarge(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* <div
        className="flex h-12 p-4 justify-between items-center  absolute left-0 right-0 w-svw"
        onClick={handleCollapse}
      >
        <div className="bg-blue-300">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>

        <Hamburger />
      </div> */}
      <div
        className={clsx("wrapper", {
          "w-12": !isOpen,
          "w-52": isOpen,
          "wrapper-sm": isOpen && !isScreenLarge,
        })}
      >
        <div className="mb-4 flex justify-start items-center cursor-pointer">
          <HomeIcon />
          <p
            className={clsx(!isOpen ? "hidden" : "text-sm ml-4 text-[#334155]")}
          >
            Home
          </p>
        </div>
        <div className="mb-4 flex justify-start items-center cursor-pointer">
          <EventIcon />
          <p
            className={clsx(!isOpen ? "hidden" : "text-sm ml-4 text-[#334155]")}
          >
            Events
          </p>
        </div>
        <div className="mb-4 flex justify-start items-center cursor-pointer">
          <SpeakersIcon />
          <p
            className={clsx(!isOpen ? "hidden" : "text-sm ml-4 text-[#334155]")}
          >
            Speakers
          </p>
        </div>
        <div className="mb-4 flex justify-start items-center cursor-pointer">
          <ReportIcon />
          <p
            className={clsx(!isOpen ? "hidden" : "text-sm ml-4 text-[#334155]")}
          >
            Reports
          </p>
        </div>
        <div className="mb-4 flex justify-start items-center cursor-pointer">
          <NotificationIcon />
          <p
            className={clsx(!isOpen ? "hidden" : "text-sm ml-4 text-[#334155]")}
          >
            Notifications
          </p>
        </div>
        <div className="mb-4 flex justify-start items-center cursor-pointer">
          <MessageIcon />
          <p
            className={clsx(!isOpen ? "hidden" : "text-sm ml-4 text-[#334155]")}
          >
            Messages
          </p>
        </div>
        <div className="mb-4 flex justify-start items-center cursor-pointer">
          <SettingsIcon />
          <p
            className={clsx(!isOpen ? "hidden" : "text-sm ml-4 text-[#334155]")}
          >
            Settings
          </p>
        </div>
        <div
          className="mb-4 flex justify-start items-center cursor-pointer"
          onClick={toggleIsOpen}
        >
          <span>
            <CollapseIcon />
          </span>

          <p
            className={clsx(!isOpen ? "hidden" : "text-sm ml-4 text-[#334155]")}
          >
            Collapse
          </p>
        </div>
        <div className="mb-4 flex justify-start items-stretch cursor-pointer text-sm">
          <div>
            <label className="relative">
              <input type="checkbox" className="check" />
              <span className="toggler"></span>
            </label>
          </div>

          <p
            className={clsx(!isOpen ? "hidden" : "text-sm ml-4 text-[#334155]")}
          >
            Dark mode
          </p>
        </div>
        <div className="flex items-center">
          <PersonIcon />

          <div
            className={clsx(
              !isOpen ? "hidden" : "text-sm ml-4 text-[#334155] user"
            )}
          >
            <h3 className="username">Rudra Devi</h3>
            <p className="email">rudra.devi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
