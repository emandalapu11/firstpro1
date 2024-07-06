import React from 'react'
import { LuMenu } from "react-icons/lu";
import { FaRegSquare } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
        <nav className=' fixed  w-[77%] bg-blue-500 h-[30px]'>
                  <div className='grid grid-cols-2 justify-around'>
                    <div className='flex  items-center  text-white py-1 px-4'>
                  <LuMenu  className=''/>
                <h1 className='flex pl-4'>Metaculars</h1><p className=' font-bold inline-flex'>[Beta]</p>
                </div>
           <div className=' flex flex-row place-content-end gap-2 items-center pr-3 text-white'>
          <FaRegSquare className='' /> <FaRegSquare className='' /> <FaRegSquare className='' /> 
          <FaRegSquare className='' />  <FaRegSquare className='' /></div></div></nav></div>
    
  )
}

export default Header
