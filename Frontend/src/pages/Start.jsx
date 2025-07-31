import React from 'react'
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-6 flex justify-between flex-col w-full">
        <h2 className="text-5xl ml-6 font-bold text-gray-300">Cabby</h2>
        <div className="px-4 py-4 flex flex-col items-center w-full bg-white">
          <h2 className="text-2xl font-bold">Get Started with Cabby</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white font-semibold py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start