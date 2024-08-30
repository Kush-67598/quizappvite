import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='bg-slate-700 h-14 w-[100vw] flex justify-center items-center text-white text-md font-medium lg:w-[100vw] '>
      <ul className=' flex gap-5   '>
        <Link to="/"><li className='hover:font-bold cursor-pointer hover:border-b-2 '>Home</li></Link>
        <Link to="/Quizes"><li className='hover:font-bold cursor-pointer hover:border-b-2'>Categories</li></Link>
        
      </ul>

    </nav>
    </>
  )
}

export default Navbar
