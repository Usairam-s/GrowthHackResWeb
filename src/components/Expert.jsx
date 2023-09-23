import React from 'react'
import Laptop from '../assets/img/laptop.jpg'

export default function Expert() {
  return (
    <div className='max-w-[1240px] my-10 mx-auto md:grid grid-cols-2 p-2 '>


        <div className='col-span-1 md:w-[80%] text-center'>
            <img className='inline' src={Laptop} alt="" srcset="" />
        </div>
        <div className="  col-span-1 flex flex-col justify-center p-2">
            <h1 className='font-bold text-sky-400 mb-3'>LEARN FROM EXPERTS</h1>
            <p className='mb-3 text-justify'>Learn from experts in Cybersecurity, Digital Marketing, and Data Science to gain essential skills for today's digital landscape. Protect your data, master online marketing strategies, and unlock the power of data-driven decision-making with guidance from industry leaders in these fields.</p>
            <button className='bg-black text-white w-[130px] p-2 rounded-lg  '>Get Started</button>
        </div>


        
    </div>
  )
}
