
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
          <Route path="trxn" element={<TransactionHistory />} />
          <Route path="message" element={<UserOverview />} />
          <Route path="favourite" element={<UserOverview />} />
          <Route path="statistics" element={<UserOverview />} />
          <Route path="profile" element={<UserOverview />} />
          <Route path="support" element={<UserOverview />} />
          <Route path="settings" element={<UserOverview />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
