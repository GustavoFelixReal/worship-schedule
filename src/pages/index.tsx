import React from 'react';
import { IoProvider } from '@src/hooks/useIo';

import Header from '@src/components/layout/Header';
import Home from './home';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export default function Application() {
  return (
    <IoProvider>
      <Header />

      <Home /> 

      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </IoProvider>
  );
}