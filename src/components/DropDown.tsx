"use client";
import { Avatar, Button } from "@nextui-org/react";
import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className={isOpen ? "outline-2 outline-green-400":"outline-2 outline-green-300"} onClick={toggleDropdown}/>
      {isOpen && (
        <div className={`absolute left-0 z-10 w-48 py-1 mt-2 origin-top-right rounded-lg shadow-lg transition-all duration-200 bg-white dark:bg-gray-800 ${isOpen ? `opacity-1` : `opacity-0`}`}>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            New File
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Copy Link
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Edit File
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg text-red-500 hover:bg-red-100 dark:text-white dark:hover:bg-red-700">
            Delete File
          </a>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
