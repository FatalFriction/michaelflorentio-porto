import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '/Josefin.ttf',
  display: 'swap',
})

const SecondPanel = () => {
  return (
    <>
    <div className="panel-container flex flex-row text-white bg-info h-auto lg:min-w-[calc(100vw)] w-screen justify-center">
        <section className="first-panel-container flex lg:flex-row flex-col items-center mb-32">
            <div className={myFont.className}>
                <div className="text-block uppercase flex -tracking-wider lg:text-7xl text-5xl">
                    <h1 className="span-container leading-[1.15] text-end uppercase">WE<br/>connect<br/><span className="lg:pr-[68px] pr-[45px]">brands</span><br/><span className="lg:pr-[167px] pr-[80px]">with</span><br/><span className="lg:pr-[220px] pr-[17px]">markets</span></h1>
                </div>
            </div>
            <div className="bottom-part lg:-translate-x-16">
                <div className='bottom-text-block flex flex-row flex-wrap lg:pt-[165px] pt-16'>
                    <div className='first-text-block'>
                        <span className='text-lists font-extralight text-sm lg:text-base space-y-4 w-fit'>
                            <h1 className="span-container leading-[1.8] lg:text-end lg:translate-x-10">The world market is <span className="font-extrabold">full of opportunities </span>but<br/><span className="lg:pr-36">requires a <span className="font-extrabold">tailored approach.</span></span></h1>
                            <h1 className="span-container leading-[1.8] lg:text-start ">I understand that running and developing business<br/>can be <span className="font-extrabold">challenging</span>.</h1>
                            <h1 className="span-container leading-[1.8] lg:text-start lg:-translate-x-10">I am here to to<span className="font-extrabold"> support you </span>and help you forge <br/> your businessess. I will help you<span className="font-extrabold"> build a bridge </span><br/>between your brand and Market.</h1>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default SecondPanel