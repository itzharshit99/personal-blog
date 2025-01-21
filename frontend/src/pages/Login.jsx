import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loginUser,{isLoading:loginLoading}] = useLoginUserMutation()
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await loginUser(data).unwrap();
      const {token,user} = response;
      alert("Login Successfully")
      navigate("/")
      
    } catch (error) {
      setMessage("Please provide a valid email and password")
    }
  };
  return (
    <div className="max-w-sm bg-white mx-auto p-8 mt-20">
      <h2 className="text-2xl font-semibold pt-5">Please Login</h2>
      <form onSubmit={handleLogin} className="space-y-5 max-w-sm mx-auto pt-8">
        <input
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
          placeholder="email"
          type="text"
          value={email}
          required
          name=""
          id=""
          onChange={(e)=> setEmail(e.target.value)}
        />
        <input
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
          placeholder="password"
          type="password"
          value={password}
          required
          name=""
          id=""
          onChange={(e)=> setPassword(e.target.value)}
        />
        {message && <p className="text-red">{message}</p>}
        <button disabled={loginLoading} className="w-full bg-primary mt-5 hover:bg-indigo-500 text-white font-medium py-3 rounded-md">
          Login
        </button>
      </form>
      <p className="mt-5 text-center">
        Dont have an Account ?{" "}
        <Link className="text-red-900 italic" to="/register">
          register
        </Link>{" "}
        here.
      </p>
    </div>
  );
};

export default Login;
