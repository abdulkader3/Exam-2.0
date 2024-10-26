import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <aside className='bg-[#0000000a] text-white h-screen font-bold '>
        <button onClick={() => setShowSidebar(false)} className="block md:hidden text-white p-4">
          Close
        </button>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Categories</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between hover:bg-gray-700 p-2 rounded">
              <span>General</span>
              <span>(10)</span>
            </li>
            <li className="flex justify-between hover:bg-gray-700 p-2 rounded">
              <span>Work</span>
              <span>(5)</span>
            </li>
            <li className="flex justify-between hover:bg-gray-700 p-2 rounded">
              <span>Personal</span>
              <span>(8)</span>
            </li>
          </ul>
        
        </div>
      </aside>
      
    </>
  )
}

export default Navbar
