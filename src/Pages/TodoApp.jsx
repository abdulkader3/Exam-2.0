import React, { useState } from "react";
import {
  FaBars,
  FaUser,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function TodoApp() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } flex`}
    >
      <main className="flex-grow p-4 md:p-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl md:text-4xl font-bold">To-Do List</h1>
          <div className="flex items-center">
            <button
              className="text-xl p-2 md:hidden"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaBars />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <FaUser className="ml-4 text-2xl" />
          </div>
        </header>

        {/* User Profile Section */}
        <section className={`flex flex-col items-center justify-center mt-12 ${
        darkMode ? "bg-[#302f2fe4] text-white" : "bg-gray-100 text-black"
      } p-6  rounded-lg shadow-lg max-w-md mx-auto`}>
          <div className=" w-[100px] h-[100px] rounded-full overflow-hidden ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBVSgk5pyue3qoN6eOZ2oZZeWNCVjYKcrvA&s" alt="" />
          </div>
          <h2 className="text-2xl font-semibold">SHANTO</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Frontend Developer</p>
          <p className="text-gray-500 dark:text-gray-400">San Francisco, CA</p>
          <div className="flex mt-4 space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
              Edit Profile
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
              Log Out
            </button>
          </div>
        </section>
        
        {/* Task Input & List sections here */}
        
      </main>
    </div>
  );
}

export default TodoApp;
