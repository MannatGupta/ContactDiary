import React from 'react'
import { RiUserSearchFill as SearchContactIcon } from "react-icons/ri";
import { LuUserPlus as AddContactIcon } from "react-icons/lu";
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar/>
      <div className='flex gap-2'>
      <div className='flex relative items-center ml-1'>
        <SearchContactIcon className='text-white text-3xl absolute \'/>
        <input type='text' className='bg-transparent border pl-[116px] text-white flex-grow border-white rounded-md h-10'/>
      </div>
      <AddContactIcon className='text-white text-3xl cursor-pointer'/>
      </div>
    </div>
  )
}

export default App