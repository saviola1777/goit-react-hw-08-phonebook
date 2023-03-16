
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


// const HomePage = lazy(()=>import('Pages/HomePage/HomePage'))
// const RegisterPage = lazy(()=>import('Pages/RegisterPage/RegisterPage'))
// const LoginPage = lazy(()=>import('Pages/LoginPage/LoginPage'))
// const Header = lazy(()=>import('components/Header/Header'))

import HomePage from 'Pages/HomePage/HomePage'
import RegisterPage from 'Pages/RegisterPage/RegisterPage'
import LoginPage from 'Pages/LoginPage/LoginPage';
import Header from 'components/Header/Header'

const App = () => {

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />}/>
        </Routes>
      </Suspense>
    </>

  )

}
export default App