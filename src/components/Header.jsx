import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'

export default function Header() {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-[#2699fb] p-4'>

        <div className='max-w-[1240px]  py-[12px]  mx-auto flex justify-between items-center'>

<div className='text-3xl font-bold cursor-pointer hover:underline'>
    Growth Hack

</div>

{
    toggle ? 
    <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/> 
    
    :
    <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>

}
<ul className=' font-medium hidden md:flex gap-20 text-white'>
    <li className='cursor-pointer  p-2 hover:shadow-lg hover:shadow-lg hover:shadow-black'>
        Home
    </li>
    <li className='cursor-pointer p-2 hover:shadow-lg hover:shadow-lg hover:shadow-black'>
        Resources
    </li>
    <li className='cursor-pointer p-2 hover:shadow-lg hover:shadow-lg hover:shadow-black'>
        About
    </li>
    <li className='cursor-pointer p-2 hover:shadow-lg hover:shadow-lg hover:shadow-black'>
        Contact
    </li>
   
</ul>

{/* for responsiveness */}
<ul className={`  md:hidden  fixed bg-black h-screen duration-300 w-full text-white top-[92px] ${toggle?'left-[0]':'left-[-100%]'}` }>
    <li className='p-5'>
        Home
    </li>
    <li className='p-5'>
        Resources
    </li>
    <li className='p-5'>
        About
    </li>
    <li className='p-5'>
        Contact
    </li>
   
</ul>
      
        </div>
        
    </div>
  )
}
