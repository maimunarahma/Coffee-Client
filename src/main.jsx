import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Banner from './Components/Banner';
import AddCoffee from './Components/AddCoffee';
import Update from './Update';
import Details from './Components/Details';
import Authentication from './Provider/Authentication';
import Login from './Components/Login';
import Register from './Components/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:
    [{
      
      path:'/',
      element:<Banner></Banner>,
      loader:()=>fetch('http://localhost:4000/addCoffee')
    },{
      path:'/addCoffee',
      element:<AddCoffee></AddCoffee>
    },{
      path:'/update/:id',
      element:<Update></Update>,
      loader:({params})=> fetch(`http://localhost:4000/update/${params.id}`)
      
    },{
      path:'/details/:id',
      element:<Details></Details>,
      loader:({params})=> fetch(`http://localhost:4000/details/${params.id}`)
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
    <RouterProvider router={router} />
    </Authentication>

  </StrictMode>,
)
