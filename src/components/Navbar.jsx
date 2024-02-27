import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full h-[64px] bg-[#212731] flex items-center justify-evenly px-10 text-white'>
            <div className='w-[260px] h-[36px] bg-white border-[1px] rounded-lg border-[#E1E4E6] flex items-center justify-between px-1'>
                <button className='size-[24px]  text-[#212731]'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input type="text" className='w-[220px] h-[24px] focus:border-transparent focus:outline-none text-black' />
            </div>
            <NavLink className='text-[#D1D6DA] md:flex hidden'>
                Categories
            </NavLink>
            <NavLink className='text-[#D1D6DA] md:flex hidden'>
                Website Builders
            </NavLink>
            <NavLink  className='text-[#D1D6DA] md:flex hidden'>
                Today's deals
            </NavLink>
        </div>
    )
}

export default Navbar