import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='w-full h-[448px] flex justify-evenly gap-2 sm:px-10 px-3 py-10 bg-[#212731]'>
            <div>
                <h6 className='text-white text-[16px] my-2'>CATEGORIES</h6>
                <ul className='text-[#B6BDC4] text-[14px] flex flex-col gap-2'>
                    <li>Web Builder</li>
                    <li>Hosting</li>
                    <li>Data Center</li>
                    <li>Robotic-Automation</li>
                </ul>
            </div>
            <div>
                <h6 className='text-white text-[16px] my-2'>CONTACT</h6>
                <ul className='text-[#B6BDC4] text-[14px] flex flex-col gap-2'>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Service</li>
                    <li>Categories</li>
                    <li>About</li>
                </ul>
            </div>
            <div className='mt-20 text-[13px] text-[#D1D6DA]'>
                <div className='flex items-center gap-2 text-end'>
                    <p>United States</p>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
        </div>
    )
}

export default Footer