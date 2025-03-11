import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details when component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  // Handle Add to Cart
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex max-w-4xl w-full">
        {/* Product Image */}
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded"
          />
        </div>

        {/* Product Details */}
        <div className="w-1/2 pl-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description || "No description available."}</p>
          <p className="text-green-500 font-bold text-lg mt-2">
            ${product.new_price}
          </p>

          {/* Add to Cart Button */}
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={addToCart}
          >
            Add to Cart
          </button>

          {/* Close Button */}
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            onClick={() => navigate(-1)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
