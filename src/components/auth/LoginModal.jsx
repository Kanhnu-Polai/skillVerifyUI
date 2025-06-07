import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeLoginModal } from '../../redux/slices/modalSlice';
import { login } from '../../redux/slices/authSlice'; // Import the login action
import LoginService from './loginService';
import { FaSpinner } from 'react-icons/fa';

function LoginModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userData = await LoginService.login(email, password);
      localStorage.setItem('token', userData.token);
      localStorage.setItem('user', JSON.stringify({
        userId: userData.userId, // Include userId
        email: userData.email,
        role: userData.role,
      }));
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      // Dispatch login action to Redux
      dispatch(login({
        token: userData.token,
        user: {
          userId: userData.userId,
          email: userData.email,
          role: userData.role,
        },
      }));
    console.log('Login successful! Token:', userData.token);

      dispatch(closeLoginModal());
      navigate('/');
    } catch (err) {
      setError(err.message); // Use the specific error message from LoginService
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-transparent bg-opacity-30 backdrop-blur-sm">
      <div className="bg-green-500 w-[400px] p-6 rounded-md flex flex-col justify-center items-center space-y-5">
        <div className="w-full flex justify-end text-xl font-bold">
          <button
            className="hover:text-red-600 cursor-pointer"
            onClick={() => dispatch(closeLoginModal())}
            aria-label="Close login modal"
          >
            X
          </button>
        </div>
        <div className="text-4xl text-white font-bold antialiased tracking-wide border-b-2 border-white pb-2 mb-4">
          Login
        </div>
        <form
          onSubmit={handleForm}
          className="flex flex-col justify-center items-center space-y-4 w-full"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border p-2 rounded-md bg-slate-50 w-full"
            required
            aria-label="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border p-2 rounded-md bg-slate-50 w-full"
            required
            aria-label="Password"
          />
          <div className="flex justify-between w-full text-sm text-white">
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
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="p-3 w-full rounded-md bg-blue-500 cursor-pointer hover:bg-green-800 hover:text-white flex items-center justify-center space-x-2"
            aria-label={loading ? 'Signing in, please wait' : 'Sign in'}
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
        {error && (
          <div className="text-red-600 font-semibold mt-2">{error}</div>
        )}
      </div>
    </div>
  );
}

export default LoginModal;