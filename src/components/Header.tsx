import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppContext } from '../state/context/AppContext';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
   const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
       
    }
    const handleSideBar = () =>{
     setIsSidebarOpen(!isSidebarOpen)
    }
    return (
        <div className='bg-white w-full flex items-center justify-between pr-6 pl-6 lg:pl-0 h-14 rounded-3xl'>
            
             
            <GiHamburgerMenu className='absolute lg:hidden w-6 h-6 cursor-pointer' onClick={()=>handleSideBar}/>
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
                {/* <div className="relative inline-block text-left">
                  
                    <button
                        id="dropdownButton"
                        className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-200"
                        onClick={()=>toggleDropdown()}
                    >
                        Users
                        
                        <RiArrowDropDownLine  className='text-2xl'/>
                    </button>

                   
                    <div
                        id="dropdownMenu"
                        className={`${isDropdownOpen ? "opacity-100 scale-100 block":""} absolute right-0 z-10 w-48 py-2 mt-2 origin-top-right bg-white border border-gray-300 rounded-lg shadow-lg opacity-0 transform scale-95 transition-all duration-300 `}
                    >
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Option 1
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Option 2
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Option 3
                        </a>
                    </div>
                </div> */}

                <div className='p-1 relative rounded-full border-[1px] border-gray-300 cursor-pointer'>
                    <div className='bg-red-400 w-2 h-2 rounded-full -right-[.5px] -top-[.2px] absolute'></div>
                    <IoIosNotificationsOutline className='w-6 h-6' />
                </div>
                <div className='border-[1px] border-gray-300 p-[4px] px-3 rounded-lg bg-white'>
                    28 Jan
                </div>

            </div>
        </div>
    )
}

export default Header
