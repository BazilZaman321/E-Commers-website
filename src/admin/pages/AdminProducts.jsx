import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { productsContext } from "../../context/ProductContext";

function AdminProducts() {
  const { product } = useContext(productsContext);
  const [posts, setPosts] = useState([]);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products"); 
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
// delete product
  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      alert("Product deleted successfully");
      setPosts(posts.filter((item) => item.id !== id)); 
    } catch (error) {
      alert("An error occurred while deleting the product.");
    }
  };

  return (
    <div className="p-6 w-full">
      <div className="flex justify-end mt-4 mb-4">
        <Link to="/admin/AddProduct">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all">
            Add Product
          </button>
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-600 text-center">Loading products...</p>
      ) : posts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.new_price}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-12 h-12 object-cover rounded-md shadow-sm"
                    />
                  </td>

                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <span
                        onClick={() => deleteData(item.id)}
                        className="text-red-500 cursor-pointer hover:text-red-700"
                      >
                        <MdDelete size={20} />
                      </span>
                      <Link
                        to={`/admin/EditProducts/${item.id}`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit size={20} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No products available</p>
      )}
    </div>
  );
}

export default AdminProducts;
