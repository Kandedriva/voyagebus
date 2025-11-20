import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BusCompanyDetail from './components/BusCompanyDetail';
import CompanyRegistration from './components/CompanyRegistration';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/:id" element={<BusCompanyDetail />} />
          <Route path="/register-company" element={<CompanyRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
