import React from 'react'
import { FaRegUserCircle as UserIcon } from "react-icons/fa";
import { FaUserEdit as ContactEdit } from "react-icons/fa";
import { TiUserDelete as ContactDelete } from "react-icons/ti";

const ContactCard = ( { contacts }) => {
  return (
    <div key={contacts?.id} className='bg-yellow items-center p-2 rounded-lg flex justify-between'>
            <div className='flex gap-1'>
            <UserIcon className='text-orange text-4xl'/>
            <div className=''>
              <h2 className='font-medium'>{contacts?.name}</h2>
              <p className='text-sm'>{contacts?.email}</p>
              <p className=''>{contacts?.contact}</p>
            </div>
            <div className='flex text-3xl'>
              <ContactEdit/>
              <ContactDelete className='text-orange'/>
              </div>
          </div>
          </div>
  )
}

export default ContactCard