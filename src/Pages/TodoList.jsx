import React, { useState } from "react";
import { FaBars, FaUser, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function TodoList() {
  const [getIt, upGetIt] = useState("");
  const [getItForCat, upGetItForCat] = useState(["General"]);
  const [mainInPut, UpmainInPut] = useState("");
  const [mainInPuttoSHOW, UpmainInPuttoSHOW] = useState({ General: [] });
  const [activeCategory, setActiveCategory] = useState("General");
  const [showInput, setShowInput] = useState(false);

  const getIdToken = (e) => upGetIt(e.target.value);

  const getForCat = () => {
    if (getIt.trim()) {
      upGetItForCat([...getItForCat, getIt.trim()]);
      UpmainInPuttoSHOW({ ...mainInPuttoSHOW, [getIt.trim()]: [] });
      upGetIt("");
      setShowInput(false); // Hide input after adding the category
    }
  };

  const maiIputOnChange = (e) => UpmainInPut(e.target.value);

  const addTask = () => {
    if (mainInPut.trim()) {
      UpmainInPuttoSHOW({
        ...mainInPuttoSHOW,
        [activeCategory]: [...mainInPuttoSHOW[activeCategory], mainInPut],
      });
      UpmainInPut("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = mainInPuttoSHOW[activeCategory].filter((_, i) => i !== index);
    UpmainInPuttoSHOW({ ...mainInPuttoSHOW, [activeCategory]: updatedTasks });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex mainTodo">
      {/* Sidebar for Categories */}
      <aside className="bg-[#0000000a] text-white h-screen font-bold p-4 w-[250px] ">
        <button onClick={() => setShowSidebar(false)} className="block md:hidden text-white p-4">
          Close
        </button>
        
        {/* Add Category Section at Top */}
        <div className="flex flex-col space-y-2 mb-4">
          <button
            onClick={() => setShowInput(!showInput)}
            className="flex items-center  gap-1 bg-blue-600 text-white px-4 py-2 rounded-full w-fit hover:bg-blue-500"
          >
            <FaPlus /> Add
          </button>

          {showInput && (
            <div className="flex mt-2 text-blue-300 ">
              <input
                onChange={getIdToken}
                value={getIt}
                type="text"
                placeholder="Category name..."
                className="p-1 border border-gray-300 rounded-l-lg w-full"
              />
              <button onClick={getForCat} className="bg-blue-600 text-white p-1 rounded-r-lg hover:bg-blue-500">
                Add
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-2 text-black">
          <h2 className="text-lg font-semibold ">Categories</h2>
          <ul className="space-y-2">
            {getItForCat.map((category, index) => (
              <li
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer flex justify-between hover:bg-gray-700 p-2 rounded hover:text-white ${
                  activeCategory === category ? "bg-gray-700 text-white" : ""
                }`}
              >
                <span>{category}</span>
                <span>({mainInPuttoSHOW[category]?.length || 0})</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Header and Content */}
      <div className="w-full h-fit">
        <div className="w-full h-[100px] flex items-center pr-[10px]">
          <div className="w-[90px] h-[90px] border-[10px] flex flex-col items-center justify-center text-[#00000049] border-[#51cad3] pl-1 text-[17px] font-semibold rounded-full">
            <div className="w-[60px]">Task {mainInPuttoSHOW[activeCategory]?.length || 0}</div>
            <div className="w-[60px]">Done 0</div>
          </div>
          <div className="w-[90%] flex justify-end gap-3 text-white font-semibold">
            <Link className="bg-transparent py-2 px-4 hover:bg-white hover:text-black rounded-2xl" to="/login">
              Sign In
            </Link>
            <Link className="bg-transparent py-2 px-4 hover:bg-white hover:text-black rounded-2xl" to="/regestion">
              Sign Up
            </Link>
          </div>
          <Link className="ml-auto" to="/userprofile">
            <FaUser className="text-[30px] text-white" />
          </Link>
        </div>

        <div className="w-full h-fit flex flex-col items-center">
          {/* Task Input */}
          <div className="w-full max-w-xl flex flex-col mb-4">
            <div className="flex">
              <input
                onChange={maiIputOnChange}
                value={mainInPut}
                type="text"
                placeholder={`Add a task to ${activeCategory}...`}
                className="flex-grow p-2 border border-gray-300 rounded-l-lg"
              />
              <button onClick={addTask} className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500">
                Add Task
              </button>
            </div>
          </div>

          {/* Task List */}
          <div className="w-full h-[310px] max-w-xl space-y-4 overflow-scroll taxkScroll">
            {mainInPuttoSHOW[activeCategory]?.length ? (
              mainInPuttoSHOW[activeCategory].map((task, index) => (
                <div
                  key={index}
                  className="w-full bg-white p-2 rounded-md flex justify-between items-center"
                >
                  <span>{task}</span>
                  <button
                    onClick={() => deleteTask(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No tasks in <span className="text-[#ffa826] font-extrabold">{activeCategory}</span>.
              </p>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-8 text-[#000] text-sm">
            &copy; 2024 Todo List
          </footer>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
