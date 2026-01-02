import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Homepage from './homepage';
import Login from './Login';
import Profile from './Profile';
import AuthCallback from './AuthCallback';
import MovieNotes from './MovieNotes';

const router = createBrowserRouter([
  {path:"/", element:<Login/>},
  {path: "auth", element:<AuthCallback/>},
  {path:"/homepage", element:<Homepage/>},
  {path:"/login", element:<Login/>},
  {path:"/profile", element:<Profile/>},
  {path:"/movie-notes", element:<MovieNotes/>}
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
