import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { Home } from './pages/dashboard/Home';
import { HomeLanding } from './pages/landing/HomeLanding';
import { SignIn } from './pages/auth/SignIn';
import { RegisterLanding } from './pages/landing/RegisterLanding'; 
import { Navbar } from './components/Navbar';

import { useAuth, AuthProvider } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { state } = useAuth();
  
  if (!state?.user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/register" element={<RegisterLanding />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={<p className="pt-40">There's nothing here: 404!</p>}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
