/* eslint-disable @next/next/no-img-element */
import Particleseng from '@/utils/Particleseng';
import Image from 'next/image';
import React from 'react'
import Text3d from '../Text3D/Text3d';
import localFont from 'next/font/local'
import Skills from '../Skills/Skills';

const myFont = localFont({
  src: '/Josefin.ttf',
  display: 'swap',
})

const Card = ({ card }) => {

    return (
      <div
        key={card.id}
        className="group relative w-screen h-screen"
      >
        <Image
          src={card.url}
          className="absolute inset-0 z-0 w-full h-full bg-center bg-cover"
          alt={card.id}
          width={2000}
          height={2000}
          priority={true}
        />
        {card.id === 1 ? 
        <div>
          <div className='contain'>
            <h1 className='absolute bottom-[20%] left-[9%] text-[12rem] text-info'>who <br/><span className='absolute bottom-[-60%] left-[32%] '>am i</span></h1>
            <h1 className='absolute bottom-[20%] left-[10%] text-[12rem] text-white'>who <br/><span className='absolute bottom-[-60%] left-[31%] '>am i</span></h1>
            <h2 className='absolute bottom-[25%] left-[38.5%] underline underline-offset-4 text-4xl text-info'>scroll </h2>
            <h2 className='absolute bottom-[25%] left-[38.9%] underline underline-offset-4 text-4xl text-white'>scroll </h2>
            <div className={myFont.className}>
              <div className='text-3xl'>
                <h3 className='absolute top-[5%] right-[5.1%] underline underline-offset-4 text-info'>[ discover more ]</h3>
                <h3 className='absolute top-[5%] right-[5%] underline underline-offset-4 text-white'>[ discover more ]</h3>
              </div>  
            </div>
          </div>
          <Particleseng id="tsparticles" number={0}/>
        </div> : null}
        {card.id === 2 ? 
        <div className="flex flex-row">
          <div className="flex flex-col ml-20">
            <div className="mt-52">
              <Text3d first="constant" second="efficient"/>
            </div>
            <Text3d first="innovation" second="solution"/>
          </div>
          <Skills/>
          <Particleseng id="tsparticles1" number={1}/>
        </div> : null}
      </div>
    );
  };

export default Card