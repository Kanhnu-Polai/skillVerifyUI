import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { openLoginModal } from '../../redux/slices/modalSlice';
import SearchBar from '../../utils/search/SearchBar';
import AccountMenu from '../profile/AccountMenu';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="bg-white p-4 sticky top-0 z-[999] w-screen shadow-md">
      <div className="flex flex-col gap-4 sm:flex-col md:flex-row md:justify-between md:items-center">
        <div className="text-center md:text-left">
          <NavLink to="/">
            <span className="text-3xl font-bold tracking-widest text-blue-600">
              SkillVerify
            </span>
          </NavLink>
        </div>

        <div className="w-full md:w-auto flex justify-center">
          <SearchBar />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2 text-center">
          <div className="flex justify-center gap-4 text-gray-700">
            <NavLink to="/jobs" className="hover:text-blue-600 font-medium">Jobs</NavLink>
            <NavLink to="/trending" className="hover:text-blue-600 font-medium">Trending</NavLink>
          </div>

          {isAuthenticated ? (
            <div className="flex justify-center items-center gap-2">
              <AccountMenu handleLogout={handleLogout} />
            </div>
          ) : (
            <div className="flex justify-center gap-2 mt-2 md:mt-0">
              <button
                className="px-4 py-2 border rounded text-sm hover:bg-gray-100"
                onClick={() => dispatch(openLoginModal())}
              >
                Login
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;