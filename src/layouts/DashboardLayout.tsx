import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import UsersList from '../components/UsersList';


const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen overflow-y-hidden ">
      <Sidebar/> 
      <main className="flex-1 p-4 h-full">
        <Header/>
        <div className='grid grid-cols-[70%_25%] gap-4 w-full h-max justify-between '>

        <Outlet /> 
        <UsersList/>
        </div>

      </main>
    </div>
  );
};

export default DashboardLayout;

