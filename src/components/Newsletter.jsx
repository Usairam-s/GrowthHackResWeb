import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#2699fb] mx-auto p-4'>



      <div className='max-w-[1240px] my-[30px]   mx-auto md:flex p-2 justify-between item-center'>

      <div className=' my-[20px]'>
        <h1 className='text-white text-3xl md:text-4xl font-bold'>Want to learn latest I.T skills?</h1>
        <p className='text-white'>Sigup to our nesletter and stay upto date</p>
        </div>

        <div className='mt-[10px]'>
        <input className='p-2 rounded-lg mb-2 mr-3' type="email" placeholder='Enter Email' />
        <button className='bg-black text-white w-[130px] p-2 rounded-lg  '>Notify me</button>
        <p className='text-white'>We care about you protection of data. Read our <br /> <a className='text-black' href="">privacy policy</a></p>
        </div>

      </div>
      
    </div>
  )
}
