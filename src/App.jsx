import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { HomeLanding } from './pages/landing/HomeLanding';
import { RegisterLanding } from './pages/landing/RegisterLanding'; 
import { SignIn } from './pages/auth/SignIn';

import { Navbar } from './components/Navbar';

import { supabase } from './supabaseClient';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/register" element={<RegisterLanding />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
