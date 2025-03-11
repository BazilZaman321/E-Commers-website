// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const user = JSON.parse(localStorage.getItem("loginUser"));
//   console.log(user);
  
//   const logoutUser = () => {
//     localStorage.removeItem("loginUser")
//     alert('Logout is successfully')
//   }

//   return (
//     <nav className="bg-black text-white p-4 flex  justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
//       <div className="text-sm xl:text-xl font-bold">
//         <Link to="/">City Furniture</Link>
//       </div>

//       <ul className="flex gap-10  text-sm xl:text-lg">
//         <li className="hover:text-gray-300 cursor-pointer">
//           <Link to="/dining">Dining</Link>
//         </li>
//         <li className="hover:text-gray-300 cursor-pointer">
//           <Link to="/bedroom">Bedroom</Link>
//         </li>
//         <li className="hover:text-gray-300 cursor-pointer">
//           <Link to="/living-room">Living Room</Link>
//         </li>
//         <li className="hover:text-gray-300 cursor-pointer">
//           <Link to="/decor">Decor</Link>
//         </li>
//       </ul>

//       <div className="flex xl:space-x-4">
//         <Link to="/cart">
//           <button className="bg-yellow-500 px-4 py-2 rounded text-black hover:bg-yellow-600">
//             Cart
//           </button>
//         </Link>
//         {user ? (
//           <button 
//             className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600" 
//             onClick={logoutUser}
//           >
//             Logout
//           </button>
//         ) : (
//           <Link to="/login">
//             <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">
//               Login
//             </button>
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("loginUser"));

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const logoutUser = () => {
    localStorage.removeItem("loginUser");
    alert("Logout is successful");
    closeMenu(); // Close menu on logout
  };

  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg xl:text-xl font-bold logoss">
          <Link to="/" onClick={closeMenu}>City Furniture</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 xl:gap-10 text-sm xl:text-lg">
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart">
            <button className="bg-yellow-500 px-4 py-2 rounded text-black hover:bg-yellow-600">
              Cart
            </button>
          </Link>
          {user ? (
            <button className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600" onClick={logoutUser}>
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

        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 shadow-md">
          <Link to="/dining" className="hover:text-gray-300" onClick={closeMenu}>Dining</Link>
          <Link to="/bedroom" className="hover:text-gray-300" onClick={closeMenu}>Bedroom</Link>
          <Link to="/living-room" className="hover:text-gray-300" onClick={closeMenu}>Living Room</Link>
          <Link to="/decor" className="hover:text-gray-300" onClick={closeMenu}>Decor</Link>

          {/* Cart & Auth Buttons (Mobile) */}
          <Link to="/cart">
            <button className="bg-yellow-500 px-4 py-2 rounded text-black hover:bg-yellow-600 w-32">
              Cart
            </button>
          </Link>
          {user ? (
            <button className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 w-32" onClick={logoutUser}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 w-32">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
