import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';


const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen  ">
      <Sidebar/> 
      <main className="flex-1 p-4">
        <Header/>
        <Outlet /> 
      </main>
    </div>
  );
};

export default DashboardLayout;

