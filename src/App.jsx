import React from 'react'
import Home from './Home/Home'
import './App.css'
import Navbar from './Navbar/Navbar'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import About from './About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Notfound from './Notfound/Notfound'

export default function App() {
  let routes=createBrowserRouter([
    {path:'',element:<Layout/>,
      errorElement:<Notfound/>,
      children:[
        {index:true, element:<Home/>},
        {path:"portfolio",element:<Portfolio/>},
        {path: "contact" , element: <Contact/> },
        {path: 'about' , element: <About/> }

      ]
    }
  ])
  return (

    <div>
      
      <RouterProvider router={routes}></RouterProvider>
      </div>
  )
}
