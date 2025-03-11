import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch("http://localhost:3000/users") 
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      const user = users.find((item) => item.email === email && item.password === password);

      if(user.isBlocked===true){
        alert("Something went wrong.....")
        return
      }

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setErrorMessage(null); 

        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setErrorMessage("Invalid email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>

        <p className="text-center mt-2">
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
