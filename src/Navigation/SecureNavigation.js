import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Screens/Secure/Dashboard'
import ROUTES from './routes'

export default function SecureNavigation() {
  return (
    <Routes>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
    </Routes>  
    )
}
