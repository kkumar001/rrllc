import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Card from './Reusables/Card'
import DealCard from './Reusables/DealCard'

const MainContent = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='lg:w-[70%] w-[90%] flex flex-col my-4'>
                <div className='w-full'>
                    <h1 className='text-[48px] text-[#2C384A]'>Best Website builders in the US</h1>
                    <hr className='text-[#E1E4E6]' />
                    <div className='w-full flex justify-between my-1 text-[#4B5665] text-[14px]'>
                        <div className='flex gap-2 items-center'>
                            <FontAwesomeIcon className='size-[14px]' icon={faCircleCheck} />
                            <p>Last Updated - February 22, 2020</p>
                            <FontAwesomeIcon icon={faCircleInfo} className='size-[14px] ml-2' />
                            <p>Advertising Disclosure</p>
                        </div>
                        <div className='flex items-center'>
                            <p>Advertising Disclosure</p>
                            <FontAwesomeIcon icon={faAngleDown} className='size-[14px] ml-1' />
                        </div>
                    </div>
                    <hr className='text-[#E1E4E6]' />
                </div>
                <div className='flex sm:flex-row flex-col sm:gap-0 gap-2 text-[14px] my-4 mx-2 text-[#4B5665]'>
                    <div className='flex gap-10 sm:w-auto w-full justify-between'>
                        <Link className='hover:text-[#2C384A]'>Tools</Link>
                        <Link className='hover:text-[#2C384A]'>AWS Builder</Link>
                        <Link className='hover:text-[#2C384A]'>Start Build</Link>
                    </div>
                    <div className='flex gap-10 sm:ml-10 ml-0 sm:w-auto w-full justify-between'>
                        <Link className='hover:text-[#2C384A]'>Build Supplies</Link>
                        <Link className='hover:text-[#2C384A]'>Tooling</Link>
                        <Link className='hover:text-[#2C384A]'>BlueHosting</Link>
                    </div>
                </div>
                <nav class="flex text-[13px] text-[#727D87]" aria-label="Breadcrumb">
                    <ol class="flex items-center space-x-2 sm:flex-nowrap flex-wrap">
                        <li>
                            <a href="/" class=" hover:text-[#2C384A]">Home</a>
                        </li>
                        <li>
                            <span class="text-[#2C384A]"><FontAwesomeIcon icon={faAngleRight} /></span>
                        </li>
                        <li>
                            <a href="/" class=" hover:text-[#2C384A]">Hosting for all</a>
                        </li>
                        <li>
                            <span class="text-[#2C384A]"><FontAwesomeIcon icon={faAngleRight} /></span>
                        </li>
                        <li>
                            <a href="/" class=" hover:text-[#2C384A]">Hosting</a>
                        </li>
                        <li>
                            <span class="text-[#2C384A]"><FontAwesomeIcon icon={faAngleRight} /></span>
                        </li>
                        <li>
                            <a href="/" class=" hover:text-[#2C384A]">Hosting6</a>
                        </li>
                        <li>
                            <span class="text-[#2C384A]"><FontAwesomeIcon icon={faAngleRight} /></span>
                        </li>
                        <li>
                            <a href="/" class=" hover:text-[#2C384A]">Hosting5</a>
                        </li>
                    </ol>
                </nav>
                <div className='w-full flex flex-col gap-8 py-8'>
                    <Card
                        bestChoice={true}
                        bestValue={false}
                        srNo='1'
                        imgTitle='Builder1'
                        heading='WixPro 72-Inch Responsive Website Builder'
                        description='Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)'
                        highlight='[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.'
                        rating='9.8'
                        ratingComment='Exceptional'
                    />
                    <Card
                        bestChoice={false}
                        bestValue={true}
                        srNo='2'
                        imgTitle='Builder'
                        heading='SiteCraft 68-Inch Ultimate Web Design Studio'
                        description='Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)'
                        highlight='[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.'
                        rating='9.5'
                        ratingComment='Excellent'
                    />
                    <Card
                        bestChoice={false}
                        bestValue={false}
                        srNo='3'
                        imgTitle='Builder1'
                        heading='WixPro 72-Inch Responsive Website Builder'
                        description='Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)'
                        highlight='[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.'
                        rating='9.3'
                        ratingComment='Exceptional'
                    />
                    <Card
                        bestChoice={false}
                        bestValue={false}
                        srNo='4'
                        imgTitle='CDK'
                        heading='CDK Resposive Builder'
                        description='An extensive library of widgets and apps, and detailed step-by-step guides'
                        highlight={(
                            <div className='w-full flex flex-col gap-2 my-2'>
                                <div className='w-full flex flex-col gap-4 bg-[#FFF4ED] text-[16px] px-2 py-4 rounded-2xl'>
                                    <p><span className='size-[24px] rounded-lg p-1 mx-2 bg-white text-[#1B88F4]'>9.9</span>Building Responsive</p>
                                    <p><span className='size-[24px] rounded-lg p-1 mx-2 bg-white text-[#1B88F4]'>9.9</span>Building Responsive</p>
                                    <p><span className='size-[24px] rounded-lg p-1 mx-2 bg-white text-[#1B88F4]'>8.9</span>Building Responsive</p>
                                </div>
                                <div className='w-full mt-4'>
                                    <p className='text-[16px] text-[#2C384A]'>Why we love it</p>
                                    <p className='text-[15px] mt-2'><span><FontAwesomeIcon className='text-[#1B88F4] mr-2' icon={faCircleCheck} /></span>Documentation</p>
                                    <p className='text-[15px]'><span><FontAwesomeIcon className='text-[#1B88F4] mr-2' icon={faCircleCheck} /></span>Easy Use</p>
                                    <p className='text-[15px]'><span><FontAwesomeIcon className='text-[#1B88F4] mr-2' icon={faCircleCheck} /></span>Out of box</p>
                                </div>
                            </div>
                        )}
                        rating='9.1'
                        ratingComment='Very Good'
                    />
                </div>
                <div className='w-full flex flex-col gap-4 py-4'>
                    <h3 className='text-[#2C384A] text-[32px]'>Related deals you might like for</h3>
                    <div className='w-full flex sm:flex-row flex-col justify-between my-2 items-center sm:gap-0 gap-4'>
                        <DealCard />
                        <DealCard />
                        <DealCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent