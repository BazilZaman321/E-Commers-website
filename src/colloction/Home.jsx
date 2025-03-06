import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../context/ProductContext"; 
import { CartContext } from "../context/CartContext"; 

function Home() {
  const { product } = useContext(productsContext);
  const { addToCart, increaseQuantity, decreaseQuantity, cart } =
    useContext(CartContext);
  const [allProducts, setAllProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("loginUser")); 


  useEffect(() => {
    setAllProducts(product);
  }, [product]);

  return (
    <div className="bg-gray-100 min-h-screen">
      
      <div
        className="relative w-full h-[800px] bg-cover bg-center"
        style={{ backgroundImage: `url('/homepageimage.jpg')` }}

      >
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to Our Store</h1>
        </div>
      </div>

      
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((item) => {
            const cartItem = cart.find((cartItem) => cartItem.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  <p className="text-green-500 font-bold text-lg mt-2">${item.new_price}</p>

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
      </div>
    </div>
  );
}

export default Home;
