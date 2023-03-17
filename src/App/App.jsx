import React, {lazy , Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const AuthLayout = lazy(()=>import('modules/AuthLayout/AuthLayout'))
const HomePage = lazy(()=>import('Pages/HomePage/HomePage'))
const RegisterPage = lazy(()=>import('Pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(()=>import('Pages/LoginPage/LoginPage'))
const Header = lazy(()=>import('components/Header/Header'))

// import AuthLayout from 'modules/AuthLayout/AuthLayout';
// import HomePage from 'Pages/HomePage/HomePage'
// import RegisterPage from 'Pages/RegisterPage/RegisterPage'
// import LoginPage from 'Pages/LoginPage/LoginPage';
// import Header from 'components/Header/Header'

const App = () => {

  return (
    <Suspense fallback={null}>
     <AuthLayout>
      
     <Header />
      
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />}/>
        </Routes>
      
      </AuthLayout>
      </Suspense>
    

  )

}
export default App