import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captainlogin" element={<CaptainLogin/>} />
        <Route path="/captainsignup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
}

export default App