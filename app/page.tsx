"use client"
import Image from "next/image";

import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <Navbar toggleSidebar={toggleSidebar} />
      <main className="flex relative">
        <Sidebar isOpen={isSidebarOpen} toggleIsOpen={toggleSidebar} />
        <div className="bg-blue-600 h-lvh w-96"></div>
      </main>
    </div>
  );
}
