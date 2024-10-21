"use client";
import Image from "next/image";

import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import SingleCard from "./components/singlecard/SingleCard";
import AllCard from "./components/allcard/AllCard";

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
        <div className="mt-12 flex-1 p-4">
          <AllCard />
        </div>
      </main>
    </div>
  );
}
