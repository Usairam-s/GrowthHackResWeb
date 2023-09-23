import React from 'react'
import Typed from 'react-typed'

 export default function () {
  return (
    <div className='bg-[#2699fb] w-full py-[120px]' >

        <div className='max-w-[1240px] text-center mx-auto font-bold py-[50px]'>
            <div className='md:text-3xl text-xl md:p-3'>
                Learn with us
            </div>

            <h2 className=' md:p-2 md:text-6xl text-4xl text-white'>Grow with us.</h2>

            <div className='md:p-3 md:text-3xl text-xl text-white p-3'>
               <span className='pr-2'>Learn</span> 
                <Typed className=' bg-black' 

                strings={['Data Science' , 'Digital Marketing' , 'Cyber Security']}
                typeSpeed={100}
                loop={true}
                backSpeed={50}
                
                />
            </div>
            <button className='bg-black text-white w-[130px] p-2 rounded-lg mt-4 '>Get Started</button>
        </div>

    </div>
  )
}
