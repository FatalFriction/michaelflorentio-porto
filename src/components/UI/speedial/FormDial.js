import React from 'react'

const FormDial = () => {
  return (
    <div className='absolute flex flex-col space-y-6 items-center justify-center bottom-6 right-32 w-[29rem] py-6 bg-amber-500 opacity-70'>
        <span className='text-black font-bold text-3xl opacity-100'>
        Join My Mailing List!
        </span>
        <form method="POST" action="https://www.formbackend.com/f/664decaabbf1c319">
            <div>
            <input type="text" name="email" className='outline outline-2 outline-white mr-4 py-2' placeholder=' email address'/>
            <button type="submit" className='bg-black px-6 py-2 '>Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default FormDial;