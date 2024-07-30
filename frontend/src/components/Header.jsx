  import React from 'react'
  import { IoIosArrowDown } from "react-icons/io";
  import { IoMdPerson } from "react-icons/io";
import img from '../assests/images/Profile.jpg'
import { Link } from 'react-router-dom';

  const Header = () => {
   return (
    <>
     <div className='flex bg-[#004AAD] justify-around p-1'>
        <div className='bg-[#004AAD] flex items-center p-3'>
            <img src={img} alt="Logo" className='rounded-full size-24 ' />
            <h1 className='text-white text-2xl ml-3'>GoAlgo</h1>
          </div>
        <div className='flex items-center gap-3 z-20'>
            <nav className="relative group">
              <button className="bg-[#004AAD] flex items-center text-white px-4 py-2 rounded">Analysis<IoIosArrowDown /></button>
                  <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
                    <a href="/link1" className="block px-4 py-2 text-black">Link 1</a>
                    <a href="/link2" className="block px-4 py-2 text-black">Link 2</a>
                    <a href="/link3" className="block px-4 py-2 text-black">Link 3</a>
              </div>
            </nav>
            <nav className="relative group">
              <button className="bg-[#004AAD] flex items-center text-white px-4 py-2 rounded">Execution<IoIosArrowDown /></button>
                  <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
                    <a href="/link1" className="block px-4 py-2 text-black">Link 1</a>
                    <a href="/link2" className="block px-4 py-2 text-black">Link 2</a>
                    <a href="/link3" className="block px-4 py-2 text-black">Link 3</a>
              </div>
            </nav>
            <nav className="relative group">
              <button className="bg-[#004AAD] flex items-center text-white px-4 py-2 rounded">Auto-Execution<IoIosArrowDown /></button>
                  <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
                    <a href="/link1" className="block px-4 py-2 text-black">Link 1</a>
                    <a href="/link2" className="block px-4 py-2 text-black">Link 2</a>
                    <a href="/link3" className="block px-4 py-2 text-black">Link 3</a>
              </div>
            </nav>
            <nav className="relative group">
              <button className="bg-[#004AAD] flex items-center text-white px-4 py-2 rounded">Open Position<IoIosArrowDown /></button>
                  <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
                    <a href="/link1" className="block px-4 py-2 text-black">Link 1</a>
                    <a href="/link2" className="block px-4 py-2 text-black">Link 2</a>
                    <a href="/link3" className="block px-4 py-2 text-black">Link 3</a>
              </div>
            </nav>
        </div>

        <div className='flex gap-2 items-center'>
      <Link to='/sign-in'>
        <h1 className='text-black text-xl hover:cursor-pointer hover:text-white hover:underline transition duration-300'>
          Login
        </h1>
      </Link>
      <Link to='/sign-up'>
        <button type="button" className="flex items-center text-xl gap-2 px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300 hover:shadow-lg">
          <IoMdPerson /> Sign Up
        </button>
      </Link>
    </div>
      </div>
    </>
  );
  }

  export default Header