import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import { Socials } from '@/utils/indexdata'
import PanelDataProvider from './PanelDataProvider'

const myFont = localFont({
  src: '/Josefin.ttf',
  display: 'swap',
})

const ThirdPanel = () => {
  return (
    <>
    <div className="panel-container flex flex-row text-white bg-info h-auto 2xl:min-w-[calc(100vw)] xl:min-w-[calc(320vw)] lg:min-w-[calc(450vw)] w-fit justify-center px-[250px]">
        <section className="third-container flex flex-col justify-center w-fit px-44">
            <div className="flex flex-row">
                <div className={myFont.className}>
                    <h1 className="text-7xl uppercase">Designer</h1>
                </div>
                <Image src="/Tech/web.svg" alt="web" className="mx-10 my-2" width={150} height={150}/>
            </div>
            <div className="bottom-part -translate-y-[4rem] flex">
                <div className='text-lists flex flex-row font-extralight items-center text-base space-y-16 space-x-10'>
                    <div className='left-part space-y-4'>
                        <h1 className="leading-[1.8] indent-8">I love concocting fresh experiences <br/>but i <strong>never lose sight of usability</strong><br/> for my audiences</h1>
                        <h1 className="leading-[1.8] text-left block">I always aim to make our experiences smooth<br/> even on low specification device<strong><br/> because no one should be forgotten</strong>.</h1>    
                    </div>
                    <div className="list-container">
                        <h2 className="text-xl text-secondary"><strong>Thing i enjoy designing:</strong></h2>
                        <li>User Interface</li>
                        <li>User Experiences</li>
                        <li>Websites</li>
                        <li>Applications</li>
                    </div>
                </div>
            </div>
        </section>
        <div className="w-px bg-white h-4/6 my-auto"/>
        <section className="third-container flex flex-col justify-center w-fit px-44">
            <div className={myFont.className}>
                <h1 className="text-7xl uppercase">My<br/><span className="ml-16">thought pathway</span><br/><span className="text-end block pr-24">process</span></h1>
            </div>
            <div className="bottom-part -translate-y-[4.3rem]">
                <div className='text-lists flex flex-row font-extralight items-center text-base space-y-16 space-x-10 w-auto'>
                    <div className='left-part space-y-4'>
                        <h1 className="leading-[1.8] indent-8">I believe that technical scope should<br/> be defined at the project&apos;s earliest stage. <br/> This is why a <strong>technical director </strong>need<br/> to be present all along process</h1>
                        <h1 className="leading-[1.8]">I bring my expertise during the discovery <br/>phase to prototype and create possibilities of <br/><strong>the most impactful experiences</strong>.</h1>    
                    </div>
                        <h1 className="leading-[1.8]">This process leads to<strong> better communication </strong><br/> between designers and developers<br/> helping to <strong> solve issues </strong>that might have <br/> occurred at a later stage of the project.</h1>
                </div>
            </div>
        </section>
        <div className="w-px bg-white h-4/6 my-auto"/>
        <section className="third-panel-container flex flex-col justify-center px-44">
            <div className={myFont.className}>
                <h1 className="text-7xl uppercase">Personal</h1>
            </div>
            <div className="bottom-part">
                <div className='container space-y-4 font-extralight text-base w-auto'>
                    <h1 className="leading-[1.8] indent-8">I&apos;m passionate about <strong>Digital World</strong> and love exploring the <br/>world of <strong>Innovation</strong>. Here are some places where you can connect <br/>with me. Feel free to explore, connect, and<br/> don&apos;t hesitate to reach out!</h1>
                </div>
                <div className={myFont.className}>
                    <div className="flex flex-row justify-between items-center">
                        <div className="container flex flex-row space-x-6 items-center">
                            {Socials.map((social,index) => (
                                <PanelDataProvider key={index} src={social.src} width={social.width} height={social.height} alt={social.name} url={social.url}/>
                            ))}
                        </div>
                        <h1 className="text-end text-7xl uppercase">space</h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default ThirdPanel