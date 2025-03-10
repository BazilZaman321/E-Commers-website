import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-16">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          User Details
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-500">No Users Available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-800">
                  <span className="font-semibold">ID:</span> {item.id}
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold">Name:</span> {item.name}
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold">Email:</span> {item.email}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
