import React,{useState} from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Datase1 = () => {
  const [moreless,setMoreless]=useState(false)
  const handclick=()=>{
   setMoreless(!moreless)
  }
  return (
    <div>
     
         { !moreless?
            <div className='max-w-sm bg-white h-[500px]'>
                <h1 className='shadow-xl ml-3'>Dataset Name</h1>
                <button className='mt-2 px-2 py-0 bg-blue-300 rounded-xl'>
                <h4 className='text-[12px] text-blue-700 '>Fraud detection</h4></button>
                <p className='pl-3 text-[13px] text-left'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint numquam
        quia delectus quo vero quod iusto corrupti illum accusamus odit hic ut
        ab minus eveniet, corporis ullam tempora debitis iure. Repellat,
        molestias sapiente exercitationem odio quia, animi eos distinctio tempora, ipsum
        hic vitae modi eum nostrum id perspiciatis impedit dolores. Sint numquam
      quia delectus quo vero quod iusto corrupti illum accusamus odit hic ut
      ab minus eveniet, corporis ullam tempora debitis iure. 
      Repellat,
        molestias sapiente exercitationem odio quia, animi eos distinctio tempora, ipsum
        hic vitae modi eum nostrum id perspiciatis impedit dolores.
      </p>
      <button className='flex text-blue-500 pl-3' onClick={handclick}>See Less
      <IoIosArrowRoundForward  className='inline-flex pb-1 w-8 h-8 pl-3'/></button>  </div>:
    
       <div className='max-w-sm bg-white h-[350px]'>
              <h1 className='shadow-xl ml-3'>Dataset Name</h1>
              <button className='mt-2 px-2 py-0 bg-blue-300 rounded-xl'>
              <h4 className='text-[12px] text-blue-700 '>Fraud detection</h4></button>
              <p className='pl-3 text-[13px] text-left'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint numquam
      quia delectus quo vero quod iusto corrupti illum accusamus odit hic ut
      ab minus eveniet, corporis ullam tempora debitis iure. Repellat,
      molestias sapiente exercitationem odio quia, animi eos distinctio tempora,
      ipsum hic vitae modi eum nostrum id perspiciatis impedit dolores.
    
    </p>
    <button className='flex text-blue-500 pl-3' onClick={handclick}>See More
    <IoIosArrowRoundForward  className='inline-flex pb-1 w-8 h-8 pl-3'/></button>  </div>}
   
      


          
    
    </div>
  )
}

export default Datase1
