import { AuthProvider, useAuth } from "./context/AuthContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CreateSaving } from "./pages/dashboard/CreateSaving";
import { Home } from "./pages/dashboard/Home";
import { HomeLanding } from "./pages/landing/HomeLanding";
import { Navbar } from "./components/Navbar";
import { RegisterLanding } from "./pages/landing/RegisterLanding";
import { SignIn } from "./pages/auth/SignIn";
import { CreateCredit } from "./pages/dashboard/CreateCredit";

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
            path="dashboard/create-saving"
            element={
              <ProtectedRoute>
                <CreateSaving />
              </ProtectedRoute>
            }
          />
        
          <Route
            path="dashboard/create-credit"
            element={
              <ProtectedRoute>
                <CreateCredit />
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

export default App;
