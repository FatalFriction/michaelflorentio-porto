"use client"

import React from 'react'
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player'), {ssr: false});

const Splash = () => {
  
  return (
    <div className="flex flex-col mx-auto w-screen h-screen justify-center items-center bg-gray-300">
        <Player
        autoplay
        loop
        src="/loading.json"
        className="flex w-full h-auto"
        />
        <Image src={"/avalons.png"} width={80} height={80} alt='avalons' />
    </div>
  )
}

export default Splash