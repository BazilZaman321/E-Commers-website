import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Footer from "./pages/Footer";
import CartProvider from "./context/CartContext";
import UserContext from "./context/UserContext";
import ProductContext from "./context/ProductContext";


import Dining from "./colloction/Dining";
import Bedroom from "./colloction/Bedroom";
import LivingRoom from "./colloction/LivingRoom";
import Decor from "./colloction/Decor";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";  
import Login from "./pages/Login";
import Home from "./colloction/Home";
import Register from "./pages/Register";

function App() {
  return (
    <CartProvider>  
      <ProductContext>
        <UserContext>
          <Router>
            <Navbar />
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dining" element={<Dining />} />
                  <Route path="/bedroom" element={<Bedroom />} />
                  <Route path="/living-room" element={<LivingRoom />} />
                  <Route path="/decor" element={<Decor />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/payment" element={<Payment />} />  
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </UserContext>
      </ProductContext>
    </CartProvider>
  );
}

export default App;
