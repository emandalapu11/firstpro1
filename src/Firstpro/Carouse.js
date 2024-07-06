import React,{useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Proj from "./Proj"
import Moresecond from './Moresecond';
import More from './More';
import Proj1 from './Proj1';

const Carouse = () => {
 
  return (
    <div>
     
        
<Carousel>
<div className='grid grid-cols-4 gap-4'>
  <Proj/><Proj/><Proj/><Proj/></div>
  <div className='grid grid-cols-4 gap-4'>
  <Proj/><Proj/><Proj/><Proj/></div>
  <div className='grid grid-cols-4 gap-4'>
  <Proj/><Proj/><Proj/><Proj/></div>
</Carousel>


      </div>
  
  )
}

export default Carouse
