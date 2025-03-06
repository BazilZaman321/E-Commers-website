import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("loginUser"));
  console.log(user);
  
  const logoutUser = () => {
    localStorage.removeItem("loginUser")
    alert('Logout is successfully')
  }

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="text-xl font-bold">
        <Link to="/">City Furniture</Link>
      </div>

      <ul className="flex space-x-6">
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/dining">Dining</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/bedroom">Bedroom</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/living-room">Living Room</Link>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <Link to="/decor">Decor</Link>
        </li>
      </ul>

      <div className="flex space-x-4">
        <Link to="/cart">
          <button className="bg-yellow-500 px-4 py-2 rounded text-black hover:bg-yellow-600">
            Cart
          </button>
        </Link>
        {user ? (
          <button 
            className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600" 
            onClick={logoutUser}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
