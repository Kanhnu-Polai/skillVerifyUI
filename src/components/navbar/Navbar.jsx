import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import SearchBar from '../../utils/search/SearchBar';
import AccountMenu from '../profile/AccountMenu';
import Admin from '../profile/Admin';
import JobPosterMenu from '../profile/JobPosterMenu';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const role = useSelector((state)=>state.auth.user?.role
)

console.log(role)


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
            {
              isAuthenticated && role==='[JOB_POSTER]'?(
                <NavLink to='/create_job'>Create A JOB</NavLink>
              ):null
            }
          </div>

          {isAuthenticated ? (
            <div className="flex justify-center items-center gap-2">
              {role === '[ADMIN]' && <Admin handleLogout={handleLogout} ></Admin> }
              {role === '[JOB_POSTER]' && <JobPosterMenu handleLogout={handleLogout} ></JobPosterMenu>}
              {role === '[JOB_SEEKER]' && <AccountMenu handleLogout={handleLogout} ></AccountMenu>}
            </div>
          ) : (
            <div className="flex justify-center gap-2 mt-2 md:mt-0">
             <NavLink
  to="/login" // or the route you want to go to
  className="bg-blue-600 text-white py-2 px-4 rounded-md text-center w-full block text-sm hover:bg-blue-700 transition"
>
  Login
</NavLink>
              <NavLink
  to="/signup"
  className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 text-center min-w-22 block text-sm transition"
>
  Sign Up
</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;