import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] =  useState("");
  return (
    <div className="max-w-sm bg-white mx-auto p-8 mt-20">
      <h2 className="text-2xl font-semibold pt-5">Please Login</h2>
      <form className="space-y-5 max-w-sm mx-auto pt-8">
        <input
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
          placeholder="email"
          type="text"
          value={email}
          name=""
          id=""
        />
        <input
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
          placeholder="password"
          type="password"
          value={password}
          name=""
          id=""
        />
        {
          message && <p className="text-red">{message}</p>
        }
        <button className="w-full bg-primary mt-5 hover:bg-indigo-500 text-white font-medium py-3 rounded-md">Login</button>
      </form>
      <p className="mt-5 text-center">Dont have an Account ? <Link className="text-red-900 italic" to="/register">register</Link> here.</p>
    </div>
  );
};

export default Login;
