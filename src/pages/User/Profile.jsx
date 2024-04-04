import React from 'react'
import UserProfile from "../../components/User/UserProfile"
import Navbar from "../../components/User/Navbar.jsx";
import Footer from "../../components/User/Footer.jsx"

export default function Profile() {
  return (
    <div className='min-h-screen bg-black'>
        <Navbar />
        <UserProfile />
        <Footer />
    </div>
  )
}
