"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json'
        },
    body: JSON.stringify(data), 
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);
        router.push(data.redirect);
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  return (
    <div className="flex justify-center h-screen relative top-10 overflow-hidden">
      <Image
        src="/images/cover/cover-01.png"
        alt="Logo"
        width={1200}
        height={1200}
        className="rounded-3xl h-[600px] w-[1800px] shadow-2xl shadow-gray-600"
      />

      <div className="absolute bg-opacity-80 rounded-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className=" font-normal text-center p-8">
          <p className="text-white text-4xl">Welcome Admin</p>
          <p className=" text-white text-xl">Login to Access Admin Dashboard</p>

          <div className="w-96 h-96 bg-opacity-80 bg-black text-black flex rounded-2xl mt-10 p-6">
            <form className="m-auto text-black " onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="text-white justify-start flex text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={data.email}
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="w-full px-3 py-2 placeholder-gray-300 border rounded-md shadow-sm appearance-none focus:outline-none focus:ring focus:border-blue-300 text-black"
                />
              </div>
              <div className="mb-4">
                <label className="text-white justify-start flex  text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={data.password}
                  name="password"
                  color="black"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                  className="w-full px-3 py-2 placeholder-gray-300 border rounded-md shadow-sm appearance-none focus:outline-none focus:ring focus:border-blue-300 text-black"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label
                  htmlFor="rememberMe"
                  className="text-white text-sm cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 w-60"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the SignIn component
export default AuthPage;
