import React from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import Navbar from '../Navbar';

function TodoList() {
  return (
    <div className="bg-gray-100 min-h-screen flex mainTodo ">
      <Navbar/>
      {/* Header */}
      <div className="w-full h-fit">
      <div className="w-full h-[100px] flex items-center pr-[10px]">
        <div className="w-[90px] h-[90px] border-[10px] flex flex-col items-center justify-center text-[#00000049] border-[#51cad3] pl-1 text-[17px] font-semibold rounded-full">
          <div className="w-[60px]">Task 0</div>
          <div className="w-[60px]">Done 0</div>
        </div>
        <FaUser className='text-[30px] text-white ml-auto' />
      </div>

     <div className="w-full h-fit flex flex-col items-center ">
     <header className="w-full max-w-xl flex items-center justify-between mb-8   ">
        <h1 className=" text-2xl md:text-4xl font-bold text-blue-600 text-center w-full">
          To-Do List
        </h1>
        <div className="relative">
          <button className="px-10 py-2"> <FaBars className='text-white text-[25px] ' /> </button>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
            <button className="block w-full text-left px-4 py-2 hover:bg-blue-100">
              <span className='text-[#ffa826] font-bold'>General</span> <span className="text-blue-600">(0)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Category Add Section */}
      <div className="w-full max-w-xl mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Add Category
        </button>
        <div className="flex mt-2">
          <input
            type="text"
            placeholder="Enter category name..."
            className="p-2 border border-gray-300 rounded-l-lg w-3/4"
          />
          <button className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500">
            Add
          </button>
        </div>
      </div>

      {/* Task Input */}
      <div className="w-full max-w-xl flex flex-col mb-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Add a task to General..."
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
          />
          <button className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500">
            Add Task
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="w-full h-[310px] max-w-xl space-y-4 overflow-scroll taxkScroll">
        <p className="text-gray-500 text-center">No tasks in <span className='text-[#ffa826] font-extrabold'>General</span>.</p>
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
