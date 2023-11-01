"use client"
import React, { useState } from 'react';
import FormDial from './FormDial';
import { motion } from "framer-motion"

const Contactdial = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <div className="fixed left-6 bottom-6">
        <div className="" onClick={toggleForm}>
          {isFormOpen ? (
            <motion.button className="btn btn-circle btn-neutral" initial={{ x: 0 }} whileHover={{ x: 5 , transition: { duration: 0.8 }}} >
              <svg xmlns="http://www.w3.org/2000/svg" className="first h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </motion.button>
            ) : (
            <div className='flex flex-wrap items-center'>
              <motion.button className="btn btn-circle btn-neutral" whileHover={{ width: '280px', transition: { duration: 0.5 } }}>
                <motion.div className="absolute left-3 p-10" initial={{x: -40 }} whileHover={{x: -24 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="second h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </motion.div>
              </motion.button>
              <div className="fixed ml-16 text-white text-lg font-bold">
                Leave me a Message
              </div>
            </div>
            )}
          </div>
      </div>

      {isFormOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100  }} transition={{ duration: 0.8 }}>
            <FormDial/>
        </motion.div>
      )}
    </>
  );
};

export default Contactdial;
