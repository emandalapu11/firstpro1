import React,{useState} from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Moresecond = () => {
    const [moreless,setMoreless]=useState(false)
    const handclick=()=>{
     setMoreless(!moreless)
    }
  return (
    <div>
         {!moreless?
        
           <div className='p-2 pl-3 max-w-sm  bg-gray-300 h-[180px]'>
           
          <div className='shadow-xl text-black font-bold'>Team's Active Projects</div>
          <ul className='pt-2  text-[10px]'>
            <h6 className='pb-1 text-black underline'>Credit Risk Analysis</h6>
            <h6 className='pb-1 text-black underline'>Customer Segmentation</h6>
            <h6 className='pb-1 text-black underline'>Loan Risk Analysis</h6>
            <h6 className='pb-1 text-black underline'>Credit Score</h6>
            <h6 className='pb-1 text-black underline'>Credit Amount</h6>
            <h6 className='pb-1 text-black underline'>Total Score</h6>
            <button className='flex text-blue-500' onClick={handclick}>See Less
               <IoIosArrowRoundForward  className='inline-flex pb-2 w-6 h-6 pl-2'/></button></ul>
             </div>:
                <div className='p-2 pl-3 max-w-sm  bg-gray-300 h-[150px]'>
           
                <div className='shadow-xl text-black font-bold'>My Team's Active Projects</div>
                <ul className='pt-2  text-[10px]'>
                  <h6 className='pb-1 text-black underline'>Credit Risk Analysis</h6>
                  <h6 className='pb-1 text-black underline'>Customer Segmentation</h6>
                  <h6 className='pb-1 text-black underline'>Loan Risk Analysis</h6>
                  <h6 className='pb-1 text-black underline'>Credit Score</h6>
                  <button className='flex text-blue-500' onClick={handclick}>See More
                     <IoIosArrowRoundForward  className='inline-flex pb-2 w-6 h-6 pl-2'/></button></ul>
                   </div>
             }
              </div>
    
    
  )
}

export default Moresecond
