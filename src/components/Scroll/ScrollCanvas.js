"use client"
import { OrbitControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { BwScroll } from './Bwscroll'
import { Scrolls } from './Scrolls'

const ScrollCanvas = () => {
  const ref = useRef();
  
  return (
    <div className='scroll-container w-[2000px] h-screen bg-[#dfdfdf]'>
        <Canvas gl={{ preserveDrawingBuffer: true }} shadows camera={{ fov: 28, near:0.1, far:200 }} dpr={[ 1,2 ]}>
            <OrbitControls 
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2} 
                />
                <ambientLight intensity={0.03} />
            <ScrollControls pages={4} damping={0.25} >
                  <Scrolls />
            </ScrollControls>
        </Canvas>
    </div>
  )
}

export default ScrollCanvas