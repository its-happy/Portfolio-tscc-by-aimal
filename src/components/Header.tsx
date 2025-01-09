"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Education", href: "/education" },
    { name: "Project", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="bg-blue-800 text-white py-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Mobile Menu Button */}
      <div className="sm:hidden flex justify-between items-center px-6">
        <div className="text-2xl font-bold">AImal Khan</div>
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="text-white bg-red-600 px-4 py-2 rounded-lg text-lg font-medium hover:bg-red-700 transition duration-300"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex justify-end items-center gap-8 mr-8 text-lg font-medium">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="sm:hidden text-center mt-4 space-y-4 bg-blue-700 py-6 rounded-lg mx-6 shadow-md">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={handleLinkClick}>
              <li className="text-xl font-bold text-yellow-300 py-2 hover:bg-yellow-400 hover:text-blue-800 rounded-md transition duration-300">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
