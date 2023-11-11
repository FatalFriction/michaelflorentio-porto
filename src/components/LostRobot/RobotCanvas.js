"use client"
import { OrbitControls, Sparkles, SpotLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Lostrobots } from './Lostrobots'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '/Josefin.ttf',
  display: 'swap',
})

const RobotCanvas = () => {
  return (
    <div className="robot-container w-[2000px] h-screen">
        <Canvas 
           camera={{ position: [0, 0, 50], fov: 45}}
           shadows
           gl={{ preserveDrawingBuffer: true }}
         >
            <OrbitControls
                enableDamping
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}
                minAzimuthAngle={-Math.PI/4} 
                maxAzimuthAngle={Math.PI/8}
                target={(0,0,-15)}
            />
            <Sparkles count={90} scale={90} size={35} speed={1.4}/>
            <SpotLight distance={3000} angle={100} attenuation={235} anglePower={3} position={[-76.03, 179.407, 51.884]}/>
            <Lostrobots />
        </Canvas>
        <div className={myFont.className}>
            <span className="absolute top-1/4 m-0 rotate-90 pointer-events-none bg-gradient-to-br from-white/20 to-white/0 p-4 text-2xl font-black uppercase text-white backdrop-blur-lg rounded-lg">[ Drag to Rotate ]</span>
        </div>
    </div>
  )
}

export default RobotCanvas