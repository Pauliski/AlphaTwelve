"use client";
import Image from "next/image";

import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import SingleCard from "./components/singlecard/SingleCard";
import AllCard from "./components/allcard/AllCard";
import Barchart from "./components/chart/Barchart";
import ImageSlider from "./components/image-slider/ImageSlider";



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
          <h1 className="font-medium text-lg lg:mt-8 mb-4">Event Registrations per month</h1>
          <div className="flex relative mt-4">
            <div className="flex-1 w-1/2">
              <Barchart />
            </div>
            <div className="flex-1 w-1/2 ml-4">
              <ImageSlider />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
