import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import UserOverview from './pages/UserOverView';
import LoanManagement from './pages/LoanManagement';
import TransactionHistory from './pages/TransactionHistory';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<UserOverview />} /> {/* Default route */}
          <Route path="loans" element={<LoanManagement />} />
          <Route path="transactions" element={<TransactionHistory />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
