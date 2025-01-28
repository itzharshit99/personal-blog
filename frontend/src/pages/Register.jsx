import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      setMessage("All fields are required!");
    } else {
      setMessage("");
      console.log({ email, username, password });
      // Add further registration logic here
    }
  };

  return (
    <div className="max-w-sm bg-white mx-auto p-8 mt-20">
      <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
      <form className="space-y-5 max-w-sm mx-auto pt-8" onSubmit={handleSubmit}>
        <input
          className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {message && <p className="text-red-500">{message}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 mt-5 hover:bg-blue-600 text-white font-medium py-3 rounded-md"
        >
          Register
        </button>
      </form>
      <p className="mt-5 text-center">
        Already have an Account?{' '}
        <Link className="text-blue-600 italic" to="/login">
          Login
        </Link>{' '}
        here.
      </p>
    </div>
  );
};

export default Register;
