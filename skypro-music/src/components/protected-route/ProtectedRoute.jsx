import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import Cookies from 'js-cookie'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
    // const isAllowed = Cookies.get('user')
		const isAllowed = localStorage.getItem('user')
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />
    }
    return <Outlet />
}

export default ProtectedRoute
