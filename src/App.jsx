
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { useSelector } from 'react-redux';
import LoginModal from './components/auth/LoginModal'; // Make sure path is correct
import AccountMenu from './components/profile/AccountMenu';
import ForgotPasswordModal from './utils/login/ForgotPassword';
import { useDispatch } from 'react-redux';
import React, {  useEffect} from 'react';
import { login } from './redux/slices/authSlice';




const App = () => {
  
   const dispatch = useDispatch();
   const isForgotPasswordOpen = useSelector((state) => state.modal.isForgotPasswordModalOpen);

{isForgotPasswordOpen && <ForgotPasswordModal />}

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      dispatch(login({
        token,
        user: JSON.parse(user), // contains { email, role }
      }));
    }
  }, [dispatch]);
  
  return (
    <>
      <Navbar />

      {
        isForgotPasswordOpen && <ForgotPasswordModal></ForgotPasswordModal>
      }

     
    
     

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element = {<LoginModal></LoginModal>}></Route>
        {/* Add other routes here */}
      </Routes>

     
    </>
  );
};

export default App;