import React from 'react'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
      <div className="bg-gray-800 text-white h-auto md:h-screen py-6 md:w-1/5 md:flex md:flex-col">
        <ul className="md:w-full">
          <li className="py-2 px-4 hover:bg-gray-700 text-center text-xl md:text-2xl border-b border-gray-700">
            <Link to='/' >Contact Us</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 text-center text-xl md:text-2xl border-b border-gray-700">
          <Link to='/chart-and-maps' >Chart and Maps</Link>
          </li>
          <li className="py-2 px-4 text-center text-xl md:text-2xl md:border-b md:border-gray-700">
            SideBar
          </li>
        </ul>
      </div>
    );
  };

export default Sidebar