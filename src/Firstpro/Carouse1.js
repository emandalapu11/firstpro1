import React,{useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Datase1 from './Datase1';
import Datase from './Datase';
import Moresecond from './Moresecond';
import More from './More';
import Proj1 from './Proj1';

const Carouse1 = () => {
 
  return (
    <div>
     
        
<Carousel>
<div className='grid grid-cols-4 gap-4'>
  <Datase/><Datase/><Datase/><Datase/></div>
  <div className='grid grid-cols-4 gap-4'>
  <Datase/><Datase/><Datase/><Datase/></div>
  <div className='grid grid-cols-4 gap-4'>
  <Datase/><Datase/><Datase/><Datase/></div>
</Carousel>


      </div>
    
  )
}

export default Carouse1
