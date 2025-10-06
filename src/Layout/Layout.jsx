import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
      <div className="layout d-flex flex-column">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}


