import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Homepage from './homepage';
import Login from './Login';
import MovieDetails from './components/homepage/MovieDetails';

const router = createBrowserRouter([
  {path:"/", element:<Login/>},
  {path:"/homepage", element:<Homepage/>},
  {path:"/movieDetails", element:<MovieDetails/>},
  {path:"/login", element:<Login/>}
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
