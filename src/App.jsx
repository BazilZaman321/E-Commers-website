import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
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

// Admin Panel Imports
import Sidebar from "./admin/pages/Sidebar";
import AddProduct from "./admin/AddProduct";
import AdminProducts from "./admin/pages/AdminProducts";
import EditProducts from "./admin/pages/EditProducts";
import Users from "./admin/pages/Users";
import Orders from "./admin/pages/Orders";

function App() {
  return (
    <CartProvider>
      <ProductContext>
        <UserContext>
          <Router>
            <AppContent />
          </Router>
        </UserContext>
      </ProductContext>
    </CartProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const Navigate = useNavigate()

  // Hide Navbar & Footer for all Admin routes
  const isAdminRoute = /^\/(admin|addproduct|adminproducts|editproducts|users|orders)/i.test(location.pathname);

  return (
    <>
      {/* Show Navbar and Footer only for non-admin pages */}
      {!isAdminRoute && <Navbar />}

      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
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
            <Routes>
              {/* Admin Routes */}

              <Route path="/admin" element={<Sidebar />} >
                <Route path="addproduct" element={<AddProduct />} />
                <Route path="adminproducts" element={<AdminProducts />} />
                <Route path="editproducts/:id" element={<EditProducts />} />
                <Route path="users" element={<Users />} />
                <Route index element={<Users />} />
                <Route path="orders" element={<Orders />} />
              </Route>
            </Routes>
        </div>

        {/* Show Footer only for non-admin pages */}
        {!isAdminRoute && <Footer />}
      </div>
    </>
  );
}

export default App;
