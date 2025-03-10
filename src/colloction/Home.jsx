// import React, { useContext, useEffect, useState } from "react";
// import { productsContext } from "../context/ProductContext"; 
// import { CartContext } from "../context/CartContext"; 

// function Home() {
//   const { product } = useContext(productsContext);
//   const { addToCart, increaseQuantity, decreaseQuantity, cart } =
//     useContext(CartContext);
//   const [allProducts, setAllProducts] = useState([]);
//   const user = JSON.parse(localStorage.getItem("loginUser")); 


//   useEffect(() => {
//     setAllProducts(product);
//   }, [product]);

//   return (
//     <div className="bg-gray-100 min-h-screen">
      
//       <div
//         className="relative w-full h-[800px] bg-cover bg-center"
//         style={{ backgroundImage: `url('https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}

//       >
//         <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-white text-4xl font-bold">Welcome to Our Store</h1>
//         </div>
//       </div>

      
//       <div className="p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {allProducts.map((item) => {
//             const cartItem = cart.find((cartItem) => cartItem.id === item.id);

//             return (
//               <div
//                 key={item.id}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p className="text-gray-600 text-sm mt-1">{item.description}</p>
//                   <p className="text-green-500 font-bold text-lg mt-2">${item.new_price}</p>

//                   {cartItem ? (
//                     <div className="flex items-center justify-between mt-4">
//                       <button
//                         className="bg-red-500 text-white px-3 py-1 rounded-l hover:bg-red-600"
//                         onClick={() => decreaseQuantity(item.id)}
//                       >
//                         -
//                       </button>
//                       <span className="px-4 py-1 bg-gray-200">{cartItem.quantity}</span>
//                       <button
//                         className="bg-blue-500 text-white px-3 py-1 rounded-r hover:bg-blue-600"
//                         onClick={() => increaseQuantity(item.id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   ) : (
//                     <button
//                       className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//                       onClick={() => { user ? addToCart(item) : alert("please login") }}
//                       >
//                       Add to Cart
//                     </button>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../context/ProductContext"; 
import { CartContext } from "../context/CartContext"; 
import { Link } from "react-router-dom";

function Home() {
  const { product } = useContext(productsContext);
  const { addToCart, increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);
  const [allProducts, setAllProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("loginUser")); 

  useEffect(() => {
    setAllProducts(product);
  }, [product]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[600px] lg:h-[800px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            zIndex: -1
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-md">
              Welcome to Our Store
            </h1>
            <p className="text-xl sm:text-2xl max-w-2xl mx-auto drop-shadow">
              Discover amazing products and enjoy exclusive deals
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our latest collection of high-quality products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allProducts.map((item) => {
            const cartItem = cart.find((cartItem) => cartItem.id === item.id);

            return (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/product/${item.id}`} className="block">
                  <div className="aspect-w-4 aspect-h-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </Link>
                
                <div className="p-4">
                  <Link to={`/product/${item.id}`} className="block">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-green-600 font-bold text-xl">${item.new_price}</div>
                    {user && cartItem && (
                      <div className="flex items-center border rounded">
                        <button 
                          className="px-3 py-1 text-red-500 hover:bg-red-100 transition"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="px-4 py-1 bg-gray-100">{cartItem.quantity}</span>
                        <button 
                          className="px-3 py-1 text-green-500 hover:bg-green-100 transition"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <button
                    className={`w-full py-2 rounded transition-colors ${
                      user 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                    onClick={() => user ? addToCart(item) : alert("Please login")}
                    disabled={!user}
                  >
                    {user ? "Add to Cart" : "Login to Add"}
                  </button>
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