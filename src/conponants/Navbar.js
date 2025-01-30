import React from 'react'
import {Link}  from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='border-b-4  border-green-700 taxt-center fixed top-0 bg-green-600 w-full font-bold text-lg text-white'>
        <ul className='p-2 m-2'>
            <li className='inline-block py-0'>
                <Link to='/' className='p-6'>Home</Link>
            </li>
            <li className='inline-block py-0'>
                <Link to='/about' className='pl-6 pr-6'>About</Link>
            </li>
            <li className='inline-block py-0'>
                <Link to='/article-list' className='pl-6 pr-6'>Articles</Link>
            </li>
            
        </ul>

    </nav>
  )
}

export default Navbar