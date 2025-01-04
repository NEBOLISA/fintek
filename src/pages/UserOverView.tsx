import React from 'react'
import Button from '../components/Button'
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
const UserOverView = () => {
    return (
        <div className='py-4'>
            <div className='bg-white px-6 py-4 rounded-lg w-[60%]'>
                <h4 className='font-light text-[#5f5f5f] mb-3'>Total Balance</h4>
                <h1 className='text-5xl mb-9  '>29,900.00 <sub className='text-sm font-extralight'>USD</sub> </h1>
                <div className='flex items-center justify-between'>
                   
                    <Button text='Send' onclick={()=>{}} icon={< FaArrowUpLong className='text-[#f2f2f2] text-sm' />} bgColor='bg-purple-800' textColor='text-white' onHover='hover:bg-purple-900' />
                    <Button text='Request' onclick={()=>{}} icon={< FaArrowDownLong className='text-[#000] text-sm' />} bgColor='bg-gray-100' textColor='text-black' onHover='hover:bg-gray-200'/>
                    <Button text='Top Up' onclick={()=>{}} icon={< FaArrowUpLong className='text-[#000] text-sm' />} bgColor='bg-gray-100' textColor='text-black' onHover="hover:bg-gray-200"/>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default UserOverView
