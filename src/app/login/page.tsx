"user client";
import React from "react";
import Link from "next/link";
const Login = () =>{
    


    const handleSubmit = async(e: any)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value


        console.log(email,password );
    };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
        <form>
          <input 
            type="text" 
            className="block w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Email" 
            required 
          />
          <input
            type="password"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-center text-gray-500 mt-4">- OR -</div>

        <Link className="block text-center text-blue-500 hover:underline mt-2"
        href="/login">
            forgot password
        </Link>
      </div>          
    </div>
  );
};


export default Login