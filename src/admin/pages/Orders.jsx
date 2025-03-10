import React, { useEffect, useState } from 'react';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/order')
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length > 0 ? (
        <ul className="w-full max-w-md space-y-3">
          {orders.map((order) => (
            <li key={order.id} className="border p-4 rounded-lg bg-gray-100 flex items-center space-x-4">
              <img
                  src={order.productImage}
                  alt="Product"
                  className="w-32 h-32 object-cover rounded-md mt-2"
                />
              <div>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Customer Name:</strong> {order.customerName}</p>
                <p><strong>Total Price:</strong> ${order.totalPrice}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

export default Orders;
