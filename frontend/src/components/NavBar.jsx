import React from 'react'
import logo from '../assests/images/Profile.jpg'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
      <div className='p-4 bg-blue-900 flex items-center justify-between'>
        <h1 className='flex items-center font-roboto font-semibold gap-3'>
          <img src={logo} alt="" className='rounded-full'/>
          GoAlgo
        </h1>
        <h1>Option Chain</h1>
        <ul className='text-2xl flex justify-center items-center gap-5'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/dashboard'><li>DashBoard</li></Link>
          <Link to='/profile'><li>Profile</li></Link>
        </ul>
      </div>
  )
}

export default NavBar