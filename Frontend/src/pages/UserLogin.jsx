import React from 'react'

const UserLogin = () => {
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
            placeholder="email@example.com"
          />
          <h3 className="font-semibold text-xl mb-2">Enter Password</h3>
          <input
            className="border bg-[#eeeeee] w-full text-lg placeholder:text-base border-gray-300 p-2 rounded-md mb-4"
            required
            type="password"
            placeholder="********"
          />
          <button
            className="w-full bg-black text-white font-semibold py-3 rounded-lg mt-2 mb-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div>
        <button
          className="w-full bg-[#10b461] text-white font-semibold py-3 rounded-lg mt-2"
          
        >
          Signup as Captain
        </button>
      </div>
    </div>
  );
}

export default UserLogin