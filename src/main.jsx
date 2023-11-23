import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1250px] mx-auto'>
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router = {router}></RouterProvider>
    <Toaster />
    </AuthProvider>
  </React.StrictMode>,
  </div>
)
