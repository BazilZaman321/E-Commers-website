import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from "../context/ProductContext";
import {  useParams } from 'react-router-dom';

function ProductDetails() {
  const { product } = useContext(productsContext);
  const { id } = useParams();
  const [find, setFind] = useState([]);
 

  useEffect(() => {
    const filter = product.filter((item) => item.id == id);
    setFind(filter);
  }, [posts, id]);


  return (
    <div className="container mx-auto p-4">
      {find.length > 0 ? (
        find.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden max-w-2xl mx-auto mb-6"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{item.name}</h1>
              <p className="text-lg text-red-500 line-through mb-2">
                ₹{item.old_price}
              </p>
              <p className="text-xl font-bold text-gray-900 mb-4">
              ₹{item.new_price} <span className="text-green-600">(Free Shipping)</span>
              </p>
              <p className="text-gray-700 mb-4 font-thin">{item.detailOne}</p>
              <p className="text-red-700 mb-4">rating: {item.rating}</p>
              

             
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Product not found.</p>
      )}
    </div>
  );
}

export default ProductDetails;
