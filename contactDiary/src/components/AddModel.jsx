import React from 'react'
import { createPortal } from 'react-dom';
import { GiCrossMark as CancelIcon } from "react-icons/gi";

const AddModel = ({onClose, isOpen, children}) => {
  return createPortal(
    <>
    {isOpen ? <>
        <div className='min-h-[200px] max-w-[80%] m-auto  bg-white p-4 z-50 relative'>
        <div className='flex justify-end'>
        <CancelIcon className='text-2xl'
        onClick={onClose}
        />
        </div>
        {children}
        </div>
        <div className=' backdrop-blur h-screen w-screen absolute top-0 z-40'
        onClick={onClose}/>
    </> : null}
    </>
  , document.getElementById('model-root'))
}

export default AddModel