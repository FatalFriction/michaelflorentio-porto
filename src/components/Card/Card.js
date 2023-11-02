import Particleseng from '@/utils/Particleseng';
import Image from 'next/image';
import React from 'react'
import localFont from 'next/font/local'
import Text3d from '../Text3D/Text3d';

const myFont = localFont({
  src: '/Josefin.ttf',
  display: 'swap',
})

const Card = ({ card }) => {

    return (
      <div
        key={card.id}
        className="group relative w-screen h-screen bg-neutral-200"
      >
        <Image
          src={card.url}
          className="absolute inset-0 z-0 w-full h-full bg-center bg-cover"
          alt={card.id}
          width={5000}
          height={5000}
          priority={true}
        />
        {card.id === 1 ? 
        <div>
          <h1 className='absolute bottom-[20%] left-[9%] text-[12rem] text-info'>Who <br/><span className='absolute bottom-[-60%] left-[41%] '>am i</span></h1>
          <h1 className='absolute bottom-[20%] left-[10%] text-[12rem] text-white'>Who <br/><span className='absolute bottom-[-60%] left-[40%] '>am i</span></h1>
          <h2 className='absolute bottom-[25%] left-[41.7%] underline underline-offset-4 text-4xl text-info'>scroll </h2>
          <h2 className='absolute bottom-[25%] left-[42%] underline underline-offset-4 text-4xl text-white'>scroll </h2>
          <div className={myFont.className}>
            <div className='text-3xl'>
              <h3 className='absolute top-[5%] right-[5.1%] underline underline-offset-4 text-info'>[discover more] </h3>
              <h3 className='absolute top-[5%] right-[5%] underline underline-offset-4 text-white'>[discover more] </h3>
            </div>  
          </div>
          <Particleseng id="tsparticles" number={0}/>
        </div> : null}
        {card.id === 2 ? 
        <div className="flex flex-col items-start">
          <div className="ml-28 mt-40">
            <Text3d first="Michael" second="Mastery"/>
          </div>
          <div className="mx-auto mt-20">
            <Text3d first="Florentio" second="ForwarD"/>
          </div>
          <Particleseng id="tsparticles1" number={1}/>         
        </div> : null}
      </div>
    );
  };

export default Card