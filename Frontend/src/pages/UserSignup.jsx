import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
   const submitHandler = (e) => {
     console.log(e);
     e.preventDefault();
     console.log("logged in");
     setEmail("");
     setPassword("");
   };
   return (
     <div className="p-6 h-screen flex flex-col justify-between">
       <div>
         <form>
           <h2 className="text-4xl mb-5 font-bold text-gray-700">Cabby</h2>
           <h3 className="font-semibold text-xl mb-2">What's Your Name</h3>
           <div className="flex gap-4 mb-4">
             <input
               className="border bg-[#eeeeee] w-1/2 text-lg placeholder:text-base border-gray-300 p-2 rounded-md"
               required
               type="text"
               value={firstName}
               placeholder="First Name"
               onChange={(e)=>setFirstName(e.target.value)}
             />
             <input
               className="border bg-[#eeeeee] w-1/2 text-lg placeholder:text-base border-gray-300 p-2 rounded-md"
               required
               type="text"
               value={lastName}
               placeholder="Last Name"
               onChange={(e)=>setLastName(e.target.value)}
             />
           </div>
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
             Signup
           </button>
         </form>
         <p className="w-full text-center">
           Already have an account?{" "}
           <a href="/captainsignup" className="text-blue-500">
             Login here
           </a>
         </p>
       </div>
       <div>
         <Link
           to={"/login"}
           className="w-full bg-[#10b461] flex flex-col items-center text-white font-semibold py-3 rounded-lg mt-2"
         >
           Login as Captain
         </Link>
       </div>
     </div>
   );
}

export default UserSignup