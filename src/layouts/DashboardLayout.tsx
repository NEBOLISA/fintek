import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import UsersList from '../components/UsersList';
import useFetch from '../hooks/useFetch';
import { AppContext } from '../state/context/AppContext';

interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    
  }
const DashboardLayout: React.FC = () => {
    const { data, isLoading, error } = useFetch<User[]>("https://677aa53e671ca03068347b04.mockapi.io/api/users/users");
     const { isSidebarOpen } = useContext(AppContext);
   
  return (
    <div className="flex h-screen overflow-y-scroll lg:overflow-y-hidden relative">
        <div className={`lg:block`}>

      <Sidebar /> 
        </div>
      <main className="flex-1 p-4 h-full">
        <Header/>
        <div className='block grid-cols-[70%_25%] lg:grid gap-4 w-full h-max justify-between '>

        <Outlet /> 
        { <UsersList data={data!} />}
        </div>

      </main>
    </div>
  );
};

export default DashboardLayout;

