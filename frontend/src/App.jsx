import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import CreateProject from './components/CreateProject';
import CreateAccount from './components/CreateAccount';
import './App.css'

function App() {
  // routes indicate what element should be shown at each url endpoint.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
