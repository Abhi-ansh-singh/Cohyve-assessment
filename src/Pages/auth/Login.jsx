import React from "react";
import Profile from "../../assets/profile-pic.png"; 

const Login = () => {
  return (
    <div
    className="flex h-screen w-full items-center justify-center"
  >
    <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div className="text-white">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center">
          <img
            src={Profile}
            width="100"
            alt="LOG0"
          />
          <h1 className="mb-2 text-2xl">LOG IN</h1>
          <span className="text-gray-300">Enter Login Details</span>
        </div>
        {/* Login Form */}
        <form>
          <div className="mb-4 text-lg">
            <input
              className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="email"
              placeholder="id@email.com"
            />
          </div>

          <div className="mb-4 text-lg">
            <input
              className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="password"
              name="password"
              placeholder="*********"
            />
          </div>
          <div className="mt-8 flex justify-center text-lg text-black">
            <button
              type="submit"
              className="rounded-3xl bg-Black bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;
