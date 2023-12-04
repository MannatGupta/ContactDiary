import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { RiUserSearchFill as SearchContactIcon } from "react-icons/ri";
import { LuUserPlus as AddContactIcon } from "react-icons/lu";

import { db } from './config/firebase';
import Navbar from './components/navbar'
import ContactCard from './components/ContactCard';
import AddAndUpdateContact from './components/AddAndUpdateContact';

const App = () => {
  const [contactsList, setContactsList] = useState([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const getContacts = async ()  => {
      try {
        const contactsCollection = collection(db, 'contacts');
        const contactsSnapshot = await getDocs(contactsCollection);
        const contactListFromFirebase = contactsSnapshot?.docs?.map((doc) => {
          return {
            id: doc?.id,
            ...doc.data(),
          }
        });
        setContactsList(contactListFromFirebase);
      } catch (error) {
        console.log(error);
      };
    };
    getContacts();    
  }, []);

  const onClose = () => {
    setOpen(false);
  }
 
  return (
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar/>
      <div className='flex gap-2'>
      <div className='flex relative items-center ml-1'>
        <SearchContactIcon className='text-white text-3xl absolute \'/>
        <input type='text' className='bg-transparent border pl-[116px] text-white flex-grow border-white rounded-md h-10'/>
      </div>
      <AddContactIcon className='text-white text-3xl cursor-pointer'
      onClick={() => setOpen(true)}/>
      </div>
      <div className='mt-4 gap-3 flex flex-col'>
        {contactsList?.map((contacts) => {
          return <ContactCard 
          key = { contacts?.id }
          contacts={ contacts }/>
        })}
      </div>
      <AddAndUpdateContact
      isOpen={isOpen}
      onClose={onClose}
      />
    </div>
  )
}

export default App