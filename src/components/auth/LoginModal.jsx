import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  openForgotPasswordModal } from "../../redux/slices/modalSlice";
import { login } from "../../redux/slices/authSlice";
import LoginService from "./loginService";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import Slogan from "../../utils/login/Slogan";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function LoginModal() {
  const authState = useSelector((state) => state.auth);
  console.log("Auth state:", authState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log("login is:", login);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userData = await LoginService.login(email, password);
      
      localStorage.setItem("token", userData.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: userData.email,
          role: userData.role,
        })
      );
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      console.log("Login payload being dispatched:");
      console.log(
        "fhfhfh",
        dispatch(
          login({
            token: userData.token,
            user: {
              email: userData.email,
              role: userData.role,
            },
          })
        )
      );
      console.log("Login successful! Token:", userData.token);

     
      navigate("/");
    } catch (err) {
      setError(err.message); // Use the specific error message from LoginService
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center   bg-opacity-30  bg-[rgb(11,23,40)] border-3 space-x-10">
      <Slogan></Slogan>
      <div className="bg-[#081f309b] w-[460px] p-6 rounded-md flex flex-col justify-center items-center space-y-5 border border-slate-400">
        
        <div className="text-4xl text-white font-bold antialiased tracking-wide border-b-2 border-white pb-2 mb-4">
          Login
        </div>
        <form
          onSubmit={handleForm}
          className="flex flex-col justify-center items-center space-y-4 w-full"
        >
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
              <button
  type="button"
  onClick={() => dispatch(openForgotPasswordModal())}
  className="text-gray-50 cursor-pointer hover:underline text-sm bg-transparent border-none p-0 m-0 focus:outline-none"
>
  Forgot Password?
</button>
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
          </div>

          <div className="flex justify-between w-96 text-sm text-white">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="form-checkbox"
                aria-label="Remember me"
              />
              <span>Remember Me</span>
            </label>
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
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
        <div className="flex items-center w-96 my-6">
  <div className="flex-grow h-[1px] bg-gray-400" />
  <span className="mx-4 text-gray-300 text-sm">or</span>
  <div className="flex-grow h-[1px] bg-gray-400" />
</div>

<button className="p-2 w-96 rounded-md bg-gray-800 cursor-pointer hover:bg-black  flex items-center justify-center space-x-2">

            <FcGoogle className="text-2xl"></FcGoogle>
            <span className="text-sm text-slate-100">Sign in with Google</span>
          </button>

          <button className="p-2 w-96 rounded-md bg-gray-800 cursor-pointer hover:bg-black  flex items-center justify-center space-x-2">

            <FaApple  className="text-2xl text-slate-400"></FaApple >
            <span className="text-sm text-slate-100">Sign in with Apple</span>
          </button>
        {error && (
          <div className="text-red-600 font-semibold mt-2">{error}</div>
        )}
      </div>
    </div>

    
  );

  
}

export default LoginModal;
