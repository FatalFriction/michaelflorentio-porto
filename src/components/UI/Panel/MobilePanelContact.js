import React from 'react'
import PanelDataProvider from './PanelDataProvider'
import localFont from 'next/font/local'
import { Socials } from '@/utils/indexdata'

const myFont = localFont({
    src: '/Josefin.ttf',
    display: 'swap',
  })

const MobilePanelContact = () => {
  return (
    <section className="container flex flex-col justify-center bg-info text-white w-screen h-auto px-4">
            <div className={myFont.className}>
                <h1 className="text-6xl uppercase text-center">Personal</h1>
            </div>
            <div className="bottom-part">
                <div className='container font-extralight text-base max-w-screen-[360px] my-2'>
                    <h1 className="leading-[1.8] indent-8">I&apos;m passionate about <strong>Digital World</strong> and love exploring the world of <strong>Innovation</strong>. Here are some places where you can connect with me. Feel free to explore, connect, and don&apos;t hesitate to reach out!</h1>
                </div>
                <div className={myFont.className}>
                    <div className="container flex flex-row space-x-6 items-center justify-center mt-4">
                        {Socials.map((social,index) => (
                            <PanelDataProvider key={index} src={social.src} width={social.width} height={social.height} alt={social.name} url={social.url}/>
                        ))}
                    </div>
                </div>
                <h1 className="text-center text-6xl uppercase my-8">space</h1>
            </div>
    </section>
  )
}

export default MobilePanelContact