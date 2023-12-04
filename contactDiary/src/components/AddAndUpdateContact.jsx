import React from 'react'
import AddModel from './AddModel'

const AddAndUpdateContact = ({ isOpen, onClose}) => {
  return (
    <div> <AddModel
    isOpen={ isOpen }
    onClose={onClose}
    >
        <form>
        <div className=''>
        <div className='p-4'>
        <p>Name</p>
        <input type='text'
        placeholder='Add name'
        className='border border-black'
        />
        </div>
        <div className='p-4'>
         <p>Email </p>
        <input type='text'
        placeholder='Add email'
        className='border border-black mt-2'
        />
        </div>
        <div className='p-4'>
         <p>Contact </p>
        <input type='number'
        placeholder='Add contact'
        className='border border-black'
        />
        </div>
        </div>
        </form>
        
        
        </AddModel></div>
  )
}

export default AddAndUpdateContact