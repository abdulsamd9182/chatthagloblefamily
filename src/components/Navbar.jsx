// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-sm px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2 mx-auto md:mx-0">
          <img
            src="/image/logo.jpg"
            alt="Chattha Global Family Logo"
            className="w-14 h-14 object-cover rounded-full"
          />
          <span className="text-xl font-bold text-white">
            Chattha Global Family
          </span>
        </div>
        <nav className="w-full md:w-auto mt-4 md:mt-0 flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-4 md:gap-6 text-center">
          <a href="#members" className="hover:text-[#e5ca61] font-bold">Members</a>
          <a href="#objectives" className="hover:text-[#e5ca61] font-bold">Objectives</a>
          <a href="#determination" className="hover:text-[#e5ca61] font-bold">Determination</a>
          <a href="#contact" className="hover:text-[#e5ca61] font-bold">Contact</a>
        </nav>
      </div>
    </header>
  );
}
