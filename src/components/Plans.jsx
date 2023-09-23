import React from 'react'

export default function 
() {
  return (
    <div className='max-w-[1240px]  mx-auto gap-5 my-[70px] md:grid grid-cols-3 px-[25px] py-[15px]'>

        <div className=' hover:scale-105 duration-[400ms] h-[500px] shadow-lg flex justify-evenly flex-col text-center py-[40px] px-[20px]'>
            <h2 className='text-3xl font-bold'>Digital Marketing</h2>
            <h1 className='text-2xl font-semibold'>$149</h1>
            <p className='shadow-sm'>Planning to learn Digital Marketing</p>
            <p  className='shadow-sm'>Start Learning from industry expert at your own flexible schedule</p>
            <p  className='shadow-sm'>Start Learning Now!!!</p>
            <button className='bg-green-500 text-white mx-auto  p-2 rounded-lg w-[130px] inline-block '>Get Started</button>
        </div>

        <div className=' hover:scale-105 duration-[400ms] h-[500px] shadow-lg flex justify-evenly flex-col text-center py-[40px] px-[20px]'>
            <h2 className='text-3xl font-bold'>Data Science</h2>
            <h1 className='text-2xl font-semibold'>$199</h1>
            <p className='shadow-sm'>Planning to learn Data Science</p>
            <p  className='shadow-sm'>Start Learning from industry expert at your own flexible schedule</p>
            <p  className='shadow-sm'>Start Learning Now!!!</p>
            <button className='bg-black text-white mx-auto  p-2 rounded-lg w-[130px] inline-block '>Get Started</button>
        </div>


         <div className=' hover:scale-105 duration-[400ms] h-[500px] shadow-lg flex justify-evenly flex-col text-center py-[40px] px-[20px]'>
            <h2 className='text-3xl font-bold'>Cyber Security</h2>
            <h1 className='text-2xl font-semibold'>$299</h1>
            <p className='shadow-sm'>Planning to learn Cyber Security</p>
            <p  className='shadow-sm'>Start Learning from industry expert at your own flexible schedule</p>
            <p  className='shadow-sm'>Start Learning Now!!!</p>
            <button className='bg-green-500 text-white mx-auto  p-2 rounded-lg w-[130px] inline-block '>Get Started</button>
        </div>
        
    </div>
  )
}
