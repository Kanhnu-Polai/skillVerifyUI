import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { useSelector } from 'react-redux';
import LoginModal from './components/auth/LoginModal'; // Make sure path is correct
import AccountMenu from './components/profile/AccountMenu';


const App = () => {
  const isLoginModalOpen = useSelector((state) => state.modal.isLoginModalOpen);
  
  return (
    <>
      <Navbar />

     
      {isLoginModalOpen && <LoginModal />}
     

      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* Add other routes here */}
      </Routes>

     
    </>
  );
};

export default App;