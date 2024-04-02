import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
  const authState = useSelector(state => state.auth)
  return (
    authState.auth ? <Outlet/> : <Navigate to='/Ownerlogin/'/>

  )
}

export default ProtectedRoutes