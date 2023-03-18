import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';

const AuthLayout = lazy(() => import('modules/AuthLayout/AuthLayout'))
const HomePage = lazy(() => import('Pages/HomePage/HomePage'))
const RegisterPage = lazy(() => import('Pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'))
const Header = lazy(() => import('Pages/Header/Header'))


const App = () => {

  return (
    <Suspense fallback={null}>
      
        <Header />
        <AuthLayout>
        <Routes>
          <Route element={<PrivateRoute/>}>
          <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<PublicRoute/>}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>

      </AuthLayout>
    </Suspense>
  )
}

export default App