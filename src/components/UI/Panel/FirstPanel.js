import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '/Josefin.ttf',
  display: 'swap',
})

const FirstPanel = () => {
  return (
    <>
        <div className="panel-container flex flex-row text-white bg-info h-auto min-w-[calc(100vw)] w-screen pt-32">
            <div className="block-gradient-container w-[330px] h-screen absolute top-0 -translate-x-[250px] z-50 bg-gradient-to-l from-info from-40% to-90%" />
            <div className="block-gradient-container w-[380px] h-screen absolute top-0 -translate-x-[400px] z-50 bg-gradient-to-l from-info from-30% to-100% opacity-90" />
            <div className="block-gradient-container w-[400px] h-screen absolute top-0 -translate-x-[350px] z-50 bg-gradient-to-l from-info from-70% to-100% opacity-60" />
            <section className="first-panel-container flex flex-col pl-[190px] items-start">
                <div className={myFont.className}>
                    <div className="text-block uppercase flex -tracking-wider text-6xl items-center">
                        <div className="w-px bg-white top-2 py-[150px] mr-12"/>
                        <span className="span-container leading-[1.15]">i&apos;m Michael florentio<br/>a digital alchemist crafting<br/>outstanding & functional websites<br/><span className="flex justify-end pl-[360px]">based in jakarta, indonesia.</span></span>
                    </div>
                </div>
                <div className="bottom-part">
                    <div className='bottom-text-block pl-[48px] pt-[100px] flex flex-row flex-wrap space-x-40'>
                        <div className='first-text-block flex flex-row flex-wrap space-x-8'>
                            <h1 className='highlights uppercase font-extrabold text-lg'>My<br/>Strenghts</h1>
                            <ul className='text-lists font-extralight text-xl space-y-2'>
                                <ul>Real time 3D / WebGL</ul>
                                <ul>Technical Direction</ul>
                                <ul>Web Experiences</ul>
                                <ul>Custom Solutions</ul>
                                <ul>Project Planning</ul>
                            </ul>
                        </div>
                        <div className='second-text-block flex flex-row flex-wrap space-x-8'>
                            <h1 className='highlights uppercase font-extrabold text-lg'>My<br/>specialities</h1>
                            <ul className='text-lists font-extralight text-xl space-y-2'>
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
            <section className="right-bottom-part flex items-end">
                    <div className='bottom-text-block flex flex-col p-10 space-y-6 bg-[url("/quote.png")] bg-contain bg-no-repeat bg-left-top'>
                        <h1 className='First-paragraph text-sm'>It&apos;s all about making <span className='font-bold'>memorable experiences</span><br/>for everyone.</h1>
                        <h1 className='Second-paragraph text-sm'>I bring expertise and <span className='font-bold'>innovative vision</span> while staying<br/>focused on <span className='font-bold'>user-friendliness</span>.</h1>
                    </div>
            </section>
        </div>
    </>
  )
}

export default FirstPanel