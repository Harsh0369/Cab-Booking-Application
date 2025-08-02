import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("logged in");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      <div>
        <form>
          <h2 className="text-4xl mb-5 font-bold text-gray-700">Cabby</h2>
          <h3 className="font-semibold text-xl mb-2">What's Your Email</h3>
          <input
            className="border bg-[#eeeeee] w-full text-lg placeholder:text-base border-gray-300 p-2 rounded-md mb-4"
            required
            type="text"
            value={email}
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="font-semibold text-xl mb-2">Enter Password</h3>
          <input
            className="border bg-[#eeeeee] w-full text-lg placeholder:text-base border-gray-300 p-2 rounded-md mb-4"
            required
            type="password"
            value={password}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-black text-white font-semibold py-3 rounded-lg mt-2 mb-3"
            type="submit"
            onClick={(e) => submitHandler(e)}
          >
            Login
          </button>
        </form>
        <p className='w-full text-center'>New User? <a href="/signup" className="text-blue-500">Create an account</a></p>
      </div>
      <div>
        <Link
          to={"/captainlogin"}
          className="w-full bg-[#10b461] flex flex-col items-center text-white font-semibold py-3 rounded-lg mt-2"
          
        >
          Signup as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin