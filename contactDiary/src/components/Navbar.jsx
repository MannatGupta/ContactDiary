import React from 'react'
import { BiGridAlt as ContactDiaryLogo} from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='h-[60px] bg-white my-4 text-xl font-medium rounded-lg flex justify-center items-center gap-2'>
        <span><ContactDiaryLogo/></span>
        <h1>Contact Diary</h1>
    </div>
        
  )
}

export default Navbar