import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Homepage from './homepage';
import MovieDetails from './components/MovieDetails';
import Login from './Login';

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
