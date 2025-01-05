import React from 'react'
import Button from '../components/Button'
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import Table from '../components/Table';
import useFetch from '../hooks/useFetch';
const columns = [
    { label: "Name", key: "name" },
    { label: "Age", key: "age" },
    { label: "Email", key: "email" },
  ];
  interface User {
    id: number;
    name: string;
    email: string;
    [key: string]: any;
  }
const data: Array<{ name: string; age: number; email: string; }> | [] = [
    { name: "John Doe", age: 25, email: "john@example.com" },
    { name: "Jane Smith", age: 30, email: "jane@example.com" },
    { name: "Michael Brown", age: 35, email: "michael@example.com" },
  ];
const UserOverView:React.FC = () => {
    // const { data, isLoading, error } = useFetch<User[]>("https://677aa53e671ca03068347b04.mockapi.io/api/users/users");
    return (
        <div className='py-4'>
            <div className='bg-white px-6 py-4 rounded-lg '>
                <h4 className='font-light text-[#5f5f5f] mb-3'>Total Balance</h4>
                <h1 className='text-5xl mb-9  '>29,900.00 <sub className='text-sm font-extralight'>USD</sub> </h1>
                <div className='flex items-center justify-between'>
                   
                    <Button text='Send' onclick={()=>{}} icon={< FaArrowUpLong className='text-[#f2f2f2] text-sm' />} bgColor='bg-purple-800' textColor='text-white' onHover='hover:bg-purple-900' />
                    <Button text='Request' onclick={()=>{}} icon={< FaArrowDownLong className='text-[#000] text-sm' />} bgColor='bg-gray-100' textColor='text-black' onHover='hover:bg-gray-200'/>
                    <Button text='Top Up' onclick={()=>{}} icon={< FaArrowUpLong className='text-[#000] text-sm' />} bgColor='bg-gray-100' textColor='text-black' onHover="hover:bg-gray-200"/>
                    <button></button>
                </div>
            </div>
            <div className='bg-white px-6 py-4 rounded-lg mt-8'> 
                <h2 className='mb-4'>Recent Transactions</h2>
                {

               data && data.length !== 0 ? <Table columns={columns} data={data} /> : <p className='text-center'>No Recent Transcation</p>
                }
            </div>
        </div>
    )
}

export default UserOverView
