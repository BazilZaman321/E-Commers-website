import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
    
      <div className={`bg-grey text-white ${isSidebarOpen ? "w-48" : "w-16"} h-full fixed transition-all flex flex-col justify-between`}>
        <div>
          
          <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <h1 className={`text-lg font-bold ${!isSidebarOpen && "hidden"}`}>Admin</h1>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white">
              {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/users" className="block px-4 py-2 hover:bg-gray-700">Users</Link>
            </li>
            <li>
              <Link to="/adminproducts" className="block px-4 py-2 hover:bg-gray-700">Products</Link>
            </li>
            <li>
              <Link to="/orders" className="block px-4 py-2 hover:bg-gray-700">Orders</Link>
            </li>
          </ul>
        </div>

        <div className="p-4">
          <button onClick={handleLogout} className="w-full px-4 py-2 bg-red-600 hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>

      <div className={`transition-all ${isSidebarOpen ? "ml-48" : "ml-16"} flex-1 p-6`}>
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;
