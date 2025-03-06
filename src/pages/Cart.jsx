import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-green-500 font-bold">${item.new_price}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-l hover:bg-red-600"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-200">{item.quantity}</span>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-r hover:bg-blue-600"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="text-center mt-6">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
              onClick={() => navigate("/payment")}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
