import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
const Header = () => {
    return (
        <div className='bg-white w-full flex items-center justify-between pr-6 h-14 rounded-3xl'>
            <div className='relative w-[30%] focus:outline-none focus:ring-1 focus:ring-purple-200 rounded-3xl  ml-8 bg-gray-100' >

                <input
                    type="search"
                    id='input'
                    placeholder="Search..."
                    className=" pl-10 px-4 rounded-3xl  py-2 w-full focus:outline-none focus:ring-1 focus:ring-purple-200  bg-transparent text-gray-700 "
                />
                <label htmlFor="input">

                    <IoSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500' />
                </label>
            </div>
           <div className='flex items-center justify-center gap-8'>
            <div className='p-1 relative rounded-full border-[1px] border-gray-300 cursor-pointer'>
                <div className='bg-red-400 w-2 h-2 rounded-full -right-[.5px] -top-[.2px] absolute'></div>
            <IoIosNotificationsOutline  className='w-6 h-6'/>
            </div>
            <div className='border-[1px] border-gray-300 p-[4px] px-3 rounded-lg bg-white'>
                28 Jan
            </div>
          
           </div>
        </div>
    )
}

export default Header
