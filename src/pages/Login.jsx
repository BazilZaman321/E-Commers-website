import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(UsersContext)
  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = user.find((item) =>
      item.email === email && item.password === password
    )
    if(!users){
      alert("try again")
      navigate('/register')
    }
    alert('login sucessfully')
    localStorage.setItem('loginUser',JSON.stringify(users))
    navigate('/')
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <input type="email" placeholder="Email" className="w-full p-2 border mb-3"
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" placeholder="Password" className="w-full p-2 border mb-3"
          value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>

        <p className="text-center mt-2">
          Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/register")}>Register</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
