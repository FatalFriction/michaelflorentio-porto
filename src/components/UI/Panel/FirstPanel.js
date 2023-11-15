import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '/Josefin.ttf',
  display: 'swap',
})

const FirstPanel = () => {
  return (
    <>
        <div className="panel-container flex lg:flex-row flex-col text-white bg-info h-auto 2xl:min-w-[calc(100vw)] xl:min-w-[calc(150vw)] lg:min-w-[calc(200vw)] lg:w-screen w-full lg:pt-32 pt-0">
            <section className="flex lg:ml-0 ml-10">
                <div className="block-gradient-container lg:w-[330px] w-0 h-screen absolute top-0 -translate-x-[250px] z-50 bg-gradient-to-l from-info from-40% to-90%" />
                <div className="block-gradient-container lg:w-[380px] w-0 h-screen absolute top-0 -translate-x-[400px] z-50 bg-gradient-to-l from-info from-30% to-100% opacity-90" />
                <div className="block-gradient-container lg:w-[400px] w-0 h-screen absolute top-0 -translate-x-[350px] z-50 bg-gradient-to-l from-info from-70% to-100% opacity-60" />
                <section className="first-panel-container flex flex-col lg:pl-[190px] pl-0">
                    <div className={myFont.className}>
                        <div className="text-block uppercase flex -tracking-wider lg:text-6xl items-center">
                            <div className="lg:w-px w-0 bg-white top-2 py-[120px] lg:mr-12"/>
                            <span className="span-container leading-[1.15]">i&apos;m Michael florentio<br/>a digital alchemist crafting<br/>outstanding & functional websites<br/><span className="flex justify-end lg:pl-[360px]">based in jakarta, indonesia.</span></span>
                        </div>
                    </div>
                    <div className="bottom-part ">
                        <div className='bottom-text-block lg:pl-[48px] lg:pt-[100px] flex lg:flex-row flex-col flex-wrap lg:space-y-0 space-y-8 lg:space-x-40'>
                            <div className='first-text-block flex flex-row flex-wrap space-x-8'>
                                <h1 className='highlights uppercase font-extrabold lg:text-lg text-sm'>My<br/>Strenghts</h1>
                                <ul className='text-lists font-extralight lg:text-xl text-base space-y-2'>
                                    <ul>Real time 3D / WebGL</ul>
                                    <ul>Technical Direction</ul>
                                    <ul>Web Experiences</ul>
                                    <ul>Custom Solutions</ul>
                                    <ul>Project Planning</ul>
                                </ul>
                            </div>
                            <div className='second-text-block flex flex-row flex-wrap lg:space-x-8 space-x-5'>
                                <h1 className='highlights uppercase font-extrabold lg:text-lg text-sm'>My<br/>specialities</h1>
                                <ul className='text-lists font-extralight lg:text-xl text-base space-y-2'>
                                    <ul>Performance Optimization</ul>
                                    <ul>Web Design</ul>
                                    <ul>Development</ul>
                                    <ul>User experience</ul>
                                    <ul>Problem-Solving</ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="right-bottom-part flex items-end lg:my-0 my-20 lg:pr-0 pr-12">
                    <div className='bottom-text-block flex flex-col p-10 space-y-6 bg-[url("/quote.png")] bg-contain bg-no-repeat bg-left-top'>
                        <h1 className='First-paragraph text-sm'>It&apos;s all about making <span className='font-bold'>memorable experiences</span><br/>for everyone.</h1>
                        <h1 className='Second-paragraph text-sm'>I bring expertise and <span className='font-bold'>innovative vision</span><br/> while staying focused on <span className='font-bold'>user-friendliness</span>.</h1>
                    </div>
            </section>
        </div>
    </>
  )
}

export default FirstPanel