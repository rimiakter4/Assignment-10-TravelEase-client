import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
  import { ToastContainer } from 'react-toastify';
import { RouterProvider } from "react-router/dom";

import AuthProvider from './Context/AuthProvider.jsx';
import router from './Router/Router.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>       <RouterProvider router={router} />     </AuthProvider> 
<ToastContainer/>
  </StrictMode>,
)
