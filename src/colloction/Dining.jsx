import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext"; 

function Dining() {
  const { product } = useContext(productsContext);
  const { addToCart, increaseQuantity, decreaseQuantity, cart } =
    useContext(CartContext); 

  const [dining, setDining] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const user = JSON.parse(localStorage.getItem("loginUser")); 


  useEffect(() => {
    if (product.length > 0) {
      const filter = product.filter((item) => item.category === "dining");
      setDining(filter);
    }
  }, [product]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Dining Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dining.map((item) => {
          const cartItem = cart.find((cartItem) => cartItem.id === item.id);

          return (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setSelectedProduct(item)}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <p className="text-green-500 font-bold text-lg mt-2">
                  ${item.new_price}
                </p>

                {cartItem ? (
                  <div className="flex items-center justify-between mt-4">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-l hover:bg-red-600"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-200">{cartItem.quantity}</span>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-r hover:bg-blue-600"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => { user ? addToCart(item) : alert("please login") }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex max-w-4xl w-full">
            <div className="w-1/2">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto rounded"
              />
            </div>

            <div className="w-1/2 pl-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
              <p className="text-green-500 font-bold text-lg mt-2">
                ${selectedProduct.new_price}
              </p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => addToCart(selectedProduct)}
              >
                Add to Cart
              </button>

              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dining;
