import React,{useState} from 'react'
import { LuMenu } from "react-icons/lu";
import { FaRegSquare } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import More from './More';
import Moresecond from './Moresecond';
import Tab1 from './Tab1'
import Header from './Header';




const Metahead = () =>{
 
  const [moreless,setMoreless]=useState(false)
  const handclick=()=>{
   setMoreless(!moreless)
  }
  const [lessmore,setLessmore]=useState(false)
  const setclick=()=>{
   setLessmore(!lessmore)
  }
  return (
    <div>
     <div className=' grid grid-cols-2 gap-4 mt-[70px]'>
      <div className='max-w-md h-[150px]  bg-gray-300 pl-5 pt-3 p-3'>
      <h2 className='text-xl text-black font-bold'>Welcome,John</h2>
      <h6 className='text-xs text-gray-500'>What are you looking to do today?</h6>
      <div className='flex max-w-md h-[15px] shadow-xl bg-gray-200 items-center pl-2 mt-3'>
      <IoIosSearch className='w-3 h-3 inline-flex' />
     <input  className='  flex px-[50px] text-[10px] pl-2 bg-gray-200 ' type="text"
      placeholder='Search for Files,Projects'/></div>
      <div className="mt-3  space-x-3">
        <button className='px-6 py-1 bg-blue-500 text-white'>New Project
               <GoPlus  className='inline-flex pl-2 w-6 h-6'/> </button>
               <button className='ml-3 pl-5 px-6 py-1 bg-black text-white'>New Dataset
               <GoPlus  className='inline-flex pl-2 w-6 h-6'/> </button>
      </div> </div>
      <div className='grid grid-cols-2 gap-3'>
        {!moreless?
        <div className='p-2 pl-3 max-w-sm  bg-gray-300 h-[150px]'>
          <div className='shadow-xl text-black font-bold'>My Active Projects</div>
          <ul className='pt-2  text-[10px]'>
        
          <li>   <h6 className='pb-1 text-black underline'>  Fraud Detection</h6> </li>
         <li> <h6 className='pb-1 text-black underline'>Transaction Anomalies</h6>  </li>
          <li>  <h6 className='pb-1 text-black underline'>Transaction Threshold</h6></li>
           <li>  <h6 className='pb-1 text-black underline'>Credit Score</h6></li>
            <button className='flex text-blue-500' onClick={handclick}>See More
               <IoIosArrowRoundForward  className='inline-flex pb-2 w-6 h-6 pl-2'/></button></ul>
          </div>:<div><More/></div>}

             {!moreless?
        <div className='p-2 pl-3 max-w-sm  bg-gray-300 h-[150px]'>
          <div className='shadow-xl text-black font-bold'>Team's Active Projects</div>
          <ul className='pt-2  text-[10px]'>
            <h6 className='pb-1 text-black underline'>Credit Risk Analysis</h6>
            <h6 className='pb-1 text-black underline'>Customer Segmentation</h6>
            <h6 className='pb-1 text-black underline'>Loan Risk Analysis</h6>
            <h6 className='pb-1 text-black underline'>Credit Score</h6>
            <button className='flex text-blue-500' onClick={handclick}>See More
               <IoIosArrowRoundForward  className='inline-flex pb-2 w-6 h-6 pl-2'/></button></ul>
             </div>:<div><Moresecond/></div>}
             </div> </div>
        
            </div>

      
  ) 
}

export default Metahead
