import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProduct() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    category: '',
    image: '',
    new_price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleData = async (e) => {
    e.preventDefault(); 

    try {
      const res = await axios.post('http://localhost:3000/products', {
        name: product.name,
        category: product.category,
        image: product.image,
        new_price: product.new_price,
      });
        alert('Product added successfully');
        navigate("/admin/AdminProducts");
     
      
      
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred while adding the product.');
    }



    
  };


  return (
     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-lg font-semibold text-center mb-6">Add New Product</h2>
      <form onSubmit={handleData} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">ID:</label>
          <input
            
            name="id"
            value={product.id}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">New Price:</label>
          <input
            
            name="new_price"
            value={product.new_price}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;