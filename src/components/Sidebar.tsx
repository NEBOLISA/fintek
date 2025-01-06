import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import avater from '../assets/avater.png'
import link2 from '../assets/loan.png'
import { GrOverview } from "react-icons/gr";
import { RiFileHistoryLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";




import { Link } from 'react-router-dom'
import { AppContext } from '../state/context/AppContext'

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = React.useState("/")
      const { isSidebarOpen,setIsSidebarOpen } = useContext(AppContext);
    return (
        <div className={` ${isSidebarOpen? "absolute left-0 top-0 bottom-0":"hidden"} lg:block w-72 bg-white z-50 lg:bg-transparent h-screen p-4 `}>
            <IoIosClose className='absolute right-2 top-[6px] cursor-pointer w-8 h-8' onClick={()=>setIsSidebarOpen(false)}/>

            <div className='flex w-full items-center justify-between pr-2'>
                <img className='w-12 h-12 ' src={logo} alt="logo" />
                <div className='flex h-14 w-max items-center justify-center bg-white px-1 py-2 rounded-3xl'>
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
            <div className='w-full bg-white h-[63%] py-4 my-6 rounded-xl'>
                <ul className="list-none space-y-6  px-6">
                    <Link to="/" className={`${activeIndex === "/" ? "bg-purple-300":""} ${activeIndex === "/" ? "bg-purple-300":""} hover:bg-purple-300 flex gap-4 align-center hover:cursor-pointer hover:text-black p-2 rounded`} onClick={() => setActiveIndex("/")}>
                    <GrOverview className='w-6 h-6' />  Overview
                    </Link>
                    <Link to="/loans" className={`${activeIndex === "loans" ? "bg-purple-300":""} hover:bg-purple-300 flex gap-4 align-center  hover:cursor-pointer hover:text-black p-2 rounded`} onClick={() => setActiveIndex("loans")}>
                    <img className='w-6 h-6' src={link2} alt="loan" />Loan Management
                    </Link>
                    <Link to="/trxn"  className={`${activeIndex === "trxn" ? "bg-purple-300":""} hover:bg-purple-300 flex gap-4 align-center  hover:cursor-pointer hover:text-black p-2 rounded`} onClick={() => setActiveIndex("trxn")}>
                    <RiFileHistoryLine className='w-6 h-6'/> Transaction History
                    </Link>
                    <Link to="/message" className={`${activeIndex === "message" ? "bg-purple-300":""} hover:bg-purple-300 flex gap-4 align-center  hover:cursor-pointer hover:text-black p-2 rounded`} onClick={() => setActiveIndex("message")}>
                    <TiMessages className='w-6 h-6'/>  Message
                    </Link>
                    <Link to="/favourite"  className={`${activeIndex === "favourite" ? "bg-purple-300":""} hover:bg-purple-300 flex gap-4 align-center  hover:cursor-pointer hover:text-black p-2 rounded`} onClick={() => setActiveIndex("favourite")}>
                    <FaHeart className='w-6 h-6'/> Favourite
                    </Link>
                    <Link to="/statistics" className={`${activeIndex === "statistics" ? "bg-purple-300":""} hover:bg-purple-300 flex gap-4 align-center  hover:cursor-pointer hover:text-black p-2 rounded`} onClick={() => setActiveIndex("statistics")}>
                    <IoStatsChart className='w-6 h-6'/> Statistics
                    </Link>
                    <Link to="/profile" className={`${activeIndex === "profile" ? "bg-purple-300":""} hover:bg-purple-300 flex gap-4 align-center  hover:cursor-pointer hover:text-black p-2 rounded`}   onClick={() => setActiveIndex("profile")}>
                    <FaUser className='w-6 h-6'/> Profile
                    </Link>
                </ul>
            </div>
            <div className='w-full bg-white h-[25%] py-4 my-6 rounded-xl'>
            <ul className="list-none space-y-4  px-6">
                    <Link to="/support"  className={`${activeIndex === "support" ? "bg-purple-300":""} hover:bg-purple-300 flex gap-4 align-center hover:cursor-pointer hover:text-black p-2 rounded`} onClick={() => setActiveIndex("support")}>
                    <MdContactSupport className='w-6 h-6' /> Support
                    </Link>
                    <Link to="/settings" className={`${activeIndex === "settings" ? "bg-purple-300":""} hover:bg-purple-300 flex gap-4 align-center hover:cursor-pointer hover:text-black p-2 rounded`} onClick={() => setActiveIndex("settings")}>
                    <IoMdSettings className='w-6 h-6' /> Settings
                    </Link>
                    <Link to="/logout" className={`${activeIndex === "logout" ? "bg-purple-300":""} hover:bg-purple-300 flex gap-4 align-center hover:cursor-pointer hover:text-black p-2 rounded`} onClick={() => setActiveIndex("logout")}>
                    <IoLogOut className='w-6 h-6' /> Log out
                    </Link>
                    </ul>
            </div>
        </div>
    )
}

export default Sidebar
