import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const navigate = useNavigate()

  const logoutUser = ()=>{
    localStorage.clear();
    navigate('/')
  }

  return (
    <div className="flex ">
      <div className={`bg-gray-900 text-white h-screen fixed w-[20%] transition-all flex flex-col justify-between`}>

        <div className="text-lg xl:text-xl font-bold logoss ">
                City Furniture
              </div>
      
        <ul className="mt-4 space-y-2">
          <li>
            <Link to="/admin/users" className="block px-4 py-2 hover:bg-gray-700">Users</Link>
          </li>
          <li>
            <Link to="/admin/adminproducts" className="block px-4 py-2 hover:bg-gray-700">Products</Link>
          </li>
          <li>
            <Link to="/admin/orders" className="block px-4 py-2 hover:bg-gray-700">Orders</Link>
          </li>
        </ul>
        <div className="bg-red-400 w-full h-10 flex justify-center items-center cursor-pointer" onClick={logoutUser}>
          Log Out
        </div>
      </div>
      <div className="w-[80%] ml-[20%]">
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
