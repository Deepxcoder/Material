import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext"; // Added useTheme
import { XPProvider } from "./context/XPContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Study from "./pages/Study";
import Subjects from "./pages/Subjects";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import PixelHeader from "./components/layout/PixelHeader";
import ModernHeader from './components/layout/ModernHeader'; // Added ModernHeader
import FloatingNav from './components/layout/FloatingNav'; // Added FloatingNav
import Explore from './pages/Explore';
import ProfileV3 from './pages/ProfileV3';
import Recent from './pages/Recent';

// Moved ProtectedRoute outside App for clarity and to match the new structure's intent
const ProtectedRoute = ({ children, allowGuest = false }) => {
  const { user, loading } = useAuth();
  const { currentTheme } = useTheme(); // useTheme is now imported

  if (loading) return null; // Wait for auth to initialize

  if (!user && !allowGuest) return <Navigate to="/login" />;

  const isModern = currentTheme.includes('modern');

  return (
    <div className={`min-h-screen ${isModern ? '' : 'bg-pixel-dark-charcoal'}`}>
      {/* Top Header */}
      {isModern ? <ModernHeader /> : <PixelHeader />}
      <main className={`${isModern ? '' : 'pt-16 px-8 pb-12 max-w-7xl mx-auto'}`}>
        {children}
      </main>
      {/* Floating Bottom Navigation - conditionally rendered for modern theme */}
      {isModern && <FloatingNav />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <XPProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute allowGuest={true}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/explore"
                element={
                  <ProtectedRoute allowGuest={true}>
                    <Explore />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/recent"
                element={
                  <ProtectedRoute allowGuest={true}>
                    <Recent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute allowGuest={true}>
                    <ProfileV3 />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/study"
                element={
                  <ProtectedRoute>
                    <Study />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/subjects"
                element={
                  <ProtectedRoute>
                    <Subjects />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/stats"
                element={
                  <ProtectedRoute>
                    <Stats />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
          </ThemeProvider>
        </XPProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
