import React from 'react'

const Text3d = ({first, second}) => {
  return (
    <div className="text-container text-[2.5vw] p-4 relative cursor-pointer transform-gpu transform-style-3d transition-transform duration-[0.4s] hover:rotate-x-90">
        <div className="first-text text-info m-0 hover:-translate-y-full hover:opacity-0 transition-all duration-[0.4s]">
            <p >{first}</p>
            <p className="first-text text-white absolute top-4 left-3">{first}</p>
        </div>
        <div className="second-text text-info m-0 absolute top-0 opacity-0 -rotate-x-90 origin-bottom-center hover:opacity-100 transition-all duration-[0.4s]">
            <p>{second}</p>
            <p className="second-text text-accent m-0 absolute top-0 right-1">{second}</p>    
        </div>
        </div>
  )
}

export default Text3d