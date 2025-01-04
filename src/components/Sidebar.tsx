import React from 'react'
import logo from '../assets/logo.png'
import avater from '../assets/avater.png'

const Sidebar = () => {
    return (
        <div className='w-72 bg-transparent h-screen p-4 '>
            <div className='flex w-full items-center justify-between pr-2'>
                <img className='w-12 h-12 ' src={logo} alt="logo" />
                <div className='flex w-max items-center justify-center bg-white px-1 py-2 rounded-3xl'>
                    <p className='ml-4 w-full text-[12px]'>Welcome back, <span className='text-purple-600 font-semibold'>Jelly!</span></p>
                    <div className="flex rounded-full p-1 bg-gray-200 justify-center items-center">
                        <img
                            src={avater}
                            alt="Circular Image"
                            className="w-6 h-4 rounded-full object-cover"
                        />
                    </div>

                </div>
            </div>
            <div className='w-full bg-white h-2/3 my-6 rounded-xl'>
                <ul className="list-none space-y-4  px-6">
                    <li className="hover:bg-purple-300 hover:cursor-pointer hover:text-black p-2 rounded">
                        <a href="/user-overview" className="block">Overview</a>
                    </li>
                    <li className="hover:bg-purple-300 hover:cursor-pointer hover:text-black p-2 rounded">
                        <a href="/loan-management" className="block">Loan Management</a>
                    </li>
                    <li className="hover:bg-purple-300 hover:cursor-pointer hover:text-black p-2 rounded">
                        <a href="/transaction-history" className="block">Transaction History</a>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Sidebar
