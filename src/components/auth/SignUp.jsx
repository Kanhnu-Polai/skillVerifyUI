import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupService from "./SignupService";
import { FaSpinner } from "react-icons/fa";
import Slogan from "../../utils/login/Slogan";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error,setError] = useState('')

  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Signing you up...");

    try {
      const userData = await SignupService.signup(name, email, password, role);
      console.log(userData)
      toast.success("Signup successful! Please login.", { id: toastId });
      navigate("/login");
    } catch (err) {
      const message = err.response?.data?.message || "Signup failed!";
      setError(message)
      toast.error(message, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center   bg-opacity-30  bg-[rgb(11,23,40)] border-3 space-x-10">
      <Slogan></Slogan>
      <div className="bg-[#081f309b] w-[460px] p-6 rounded-md flex flex-col justify-center items-center space-y-3 mt-10 border border-slate-400">
        
        <div className="text-4xl text-white font-bold antialiased tracking-wide border-b-2 border-white pb-2 mb-4">
       Sign Up
        </div>
        <form
          onSubmit={handleForm}
          className="flex flex-col justify-center items-center space-y-4 w-full"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-50 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" Ex : Kanhnu Polai"
              className="border-1 p-2 rounded-md  bg-gray-900 w-full border-gray-300 focus:border-blue-500 focus:outline-none min-w-60 lg:min-w-96 placeholder-gray-400 text-white"
              required
              aria-label="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-50 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="border-1 p-2 rounded-md  bg-gray-900 w-full border-gray-300 focus:border-blue-500 focus:outline-none min-w-60 lg:min-w-96 placeholder-gray-400 text-white"
              required
              aria-label="Email"
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-gray-50 mb-1">
                Password
              </label>
              
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="border-1 p-2 rounded-md w-full border-gray-300 focus:border-blue-500 focus:outline-none min-w-60 lg:min-w-96 text-white bg-gray-900 flex placeholder-gray-400 "
              required
              aria-label="Password"
            />

            <div className="w-full mt-3">
            <label className="block text-sm font-medium text-gray-50 mb-1">Role</label>
            <select
              value={role}
              
              onChange={(e) => setRole(e.target.value)}
              className="border-1 p-2 rounded-md w-full border-gray-300 focus:border-blue-500 focus:outline-none min-w-60 lg:min-w-96 text-white bg-gray-900 flex placeholder-gray-400 "
              required
            >
              <option value="">Select Role</option>
              <option value="JOB_SEEKER">Job Seeker</option>
              <option value="JOB_POSTER">Job Poster</option>
            </select>
          </div>
          </div>

          
          <button
            type="submit"
            disabled={loading}
            className="p-2 w-96 rounded-md bg-white cursor-pointer hover:bg-slate-200  flex items-center justify-center space-x-2"
            aria-label={loading ? "Signing in, please wait" : "Sign in"}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin text-white" />
                <span>Signing In...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        <div>
          <p className="text-white text-sm">
           Already have a account? <a href="/login">Sign In</a>
          </p>
        </div>
        <div className="flex items-center w-96 my-6">
  <div className="flex-grow h-[1px] bg-gray-400" />
  <span className="mx-4 text-gray-300 text-sm">or</span>
  <div className="flex-grow h-[1px] bg-gray-400" />
</div>

<button className="p-2 w-96 rounded-md bg-gray-800 cursor-pointer hover:bg-black  flex items-center justify-center space-x-2">

            <FcGoogle className="text-2xl"></FcGoogle>
            <span className="text-sm text-slate-100">Sign Up with Google</span>
          </button>

          <button className="p-2 w-96 rounded-md bg-gray-800 cursor-pointer hover:bg-black  flex items-center justify-center space-x-2">

            <FaApple  className="text-2xl text-slate-400"></FaApple >
            <span className="text-sm text-slate-100">Sign Up with Apple</span>
          </button>
        {error && (
          <div className="text-red-600 font-semibold mt-2">{error}</div>
        )}
      </div>
    </div>

    
  );

  
}

export default Signup;