"use client"
import React, { useState } from 'react';
import FormDial from './FormDial';

const Contactdial = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <div className="fixed left-6 bottom-6">
        <button className="btn btn-circle shadow-2xl btn-neutral hover:btn-success dark:btn-info dark:hover:btn-secondary" onClick={toggleForm}>
          {isFormOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="first h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="second h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          )}
          </button>
      </div>

      {isFormOpen && (
        <FormDial/>
      )}
    </>
  );
};

export default Contactdial;
