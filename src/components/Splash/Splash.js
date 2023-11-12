"use client"
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';

const Splash = () => {
  
  return (
    <div className="flex flex-col mx-auto w-screen h-screen justify-center items-center bg-info">
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