import React from 'react'
import AuthLayout from '../features/auth/components/AuthLayout'
import LoginPage from '../features/auth/pages/LoginPage'
import RegisterPage from '../features/auth/pages/RegisterPage'

const AuthRoute = [
    {
        path:"/",
        element: <AuthLayout/>,
        children: [
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: "/register",
                element: <RegisterPage/>
            }
        ]
    }
]

export default AuthRoute