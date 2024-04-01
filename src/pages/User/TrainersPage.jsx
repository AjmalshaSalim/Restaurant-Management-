import React from 'react'
import Navbar from "../../components/User/Navbar.jsx"
import Trainers from "../../components/User/Trainers.jsx"

export default function TrainersPage() {
  return (
    <div className='bg-black h-screen'>
       <Navbar />
       <Trainers />
    </div>
  )
}
