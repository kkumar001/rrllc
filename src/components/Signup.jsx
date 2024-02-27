import React from 'react'

const Signup = () => {
  return (
    <div className='w-full flex justify-center items-center py-[72px]'>
         <div className='lg:w-[70%] w-[90%] flex md:flex-row flex-col items-center justify-between px-6 gap-10'>
          <h3 className='text-[32px] text-[#5C6874] md:w-[45%] w-[100%] md:text-left text-center'>Sign up and get exclusive special deals</h3>
          <div className='md:w-[45%] w-[100%] flex md:justify-end justify-center'>
             <input type="email" className='h-[52px] rounded-l-2xl w-[80%] p-2' />
             <button className='bg-[#1B88F4] rounded-r-2xl px-2 w-[20%] h-[52px] text-white'>Sign Up</button>
          </div>
         </div>
    </div>
  )
}

export default Signup