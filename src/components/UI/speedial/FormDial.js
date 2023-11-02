import React from 'react'

const FormDial = () => {
  return (
    <div className='fixed flex flex-col space-y-6 items-center justify-center bottom-6 left-28 w-[29rem] py-6 bg-accent opacity-90 rounded-sm'>
        <span className='text-info font-bold text-3xl opacity-100'>
        Join My Mailing List!
        </span>
        <form method="POST" action="https://www.formbackend.com/f/664decaabbf1c319">
            <div>
            <input type="text" name="email" className='outline outline-2 outline-white mr-4 py-2 px-6 rounded-sm' placeholder='email address'/>
            <button type="submit" className='bg-info text-white px-6 py-2 rounded-sm hover:bg-primary'>Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default FormDial;