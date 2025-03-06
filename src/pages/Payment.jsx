import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Payment() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    setTimeout(() => {
      alert("Payment Successful! 🎉");
      clearCart(); 
      navigate("/"); 
    }, 1500);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Complete Your Payment</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Add items before payment.</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>

          
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="Google Pay"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Google Pay</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="PhonePe"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>PhonePe</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="Paytm"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Paytm</span>
            </label>
          </div>

         
          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Payment;
