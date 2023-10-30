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
      <div className="fixed right-6 bottom-6">
        <button className="btn btn-circle shadow-2xl btn-warning hover:btn" onClick={toggleForm}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      {isFormOpen && (
        <FormDial/>
      )}
    </>
  );
};

export default Contactdial;
