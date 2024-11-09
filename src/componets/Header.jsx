import React from 'react'
import { TbBrandAirbnb } from "react-icons/tb";
function Header() {
  return (
    <div className='bg-white text-red-700 flex flex-row shadow-md h-15 items-start justify-start sticky top-0 max-w-md:700 w-full p-3 font-semibold'>
      <TbBrandAirbnb size={32}/>
      <h4>airbnb</h4>
    </div>
  )
}

export default Header
