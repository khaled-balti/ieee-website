import React from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../layout/Footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout
