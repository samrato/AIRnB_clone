import React from 'react'
import airbnb from '../assets/airbnb.png';
import { FaStar } from "react-icons/fa6";
import { CiTextAlignCenter } from "react-icons/ci";
import { SiJamstack } from "react-icons/si";
import { MdOutlineAnimation } from "react-icons/md";

function Hero() {
  return (
    <div className='grid place-items-center h-screen p-4 '>
        <img src={airbnb}alt="" className='flex items-center justify-center h-screen ' />
      <div className='p-8 m-3 flex flex-row flex-wrap md:flex-row lg:flex-row sm:flex-col   gap-4 '>
      <div><CiTextAlignCenter size={32} />
        <h1 className='font-bold'>Online experiences</h1>
        <p className='font-sans'>Join unique interactive led by one of kind Hosts-all-leaving home </p></div>
       <div> <SiJamstack size={32} />
        <h1 className='font-bold'>Keep it flexible
        </h1>
        <p className='font-sans'>Homes with flexible cancellation make it easy to rethink your booking if your plans change</p></div>
        <div><MdOutlineAnimation size={32} />
        <h1 className='font-bold'>Get the amenities you want
        </h1>
        <p className='font-sans'>Join unique interactive led by one of kind Hosts-all-leaving home </p></div>
        <div><FaStar size={32}/>
        
        <h1 className='font-bold'>Read real reviews
        </h1>
        <p className='font-sans'>Find homes you’ll love based on the great experiences of people who’ve stayed there. </p></div>
        
      </div>
    </div>
  )
}

export default Hero
