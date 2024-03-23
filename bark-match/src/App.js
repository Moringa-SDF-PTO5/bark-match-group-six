// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Favorites from './pages/Favorites';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  // Placeholder authentication logic
  const isAuthenticated = true; // For demonstration purposes, assuming the user is authenticated

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/reset-password" component={ResetPassword} />
          <ProtectedRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
<ProtectedRoute path="/settings" component={Settings} isAuthenticated={isAuthenticated} />
<ProtectedRoute path="/favorites" component={Favorites} isAuthenticated={isAuthenticated} />
<ProtectedRoute path="/admin" component={AdminDashboard} isAuthenticated={isAuthenticated} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
