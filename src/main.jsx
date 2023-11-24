import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1250px] mx-auto'>
    <React.StrictMode>
      <HelmetProvider>
      <AuthProvider>
    <RouterProvider router = {router}></RouterProvider>
    <Toaster />
    </AuthProvider>
      </HelmetProvider>
    
  </React.StrictMode>,
  </div>
)
