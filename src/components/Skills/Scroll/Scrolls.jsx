/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 scroll.glb 
Author: Shahriar Shahrabi (https://sketchfab.com/shahriyarshahrabi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mountain-and-river-scroll-dd37769bdc0148a988535f893d01c551
Title: Mountain And River Scroll
*/

import React from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { BwScroll } from './Bwscroll'

export function Scrolls(props) {
  const { nodes, materials } = useGLTF('/assets/Scroll/Scroll.glb')
  
  const scrolling = useScroll()
  useFrame((state) => {
    const offset = 1 - scrolling.offset
    state.camera.position.set(Math.cos((offset * Math.PI) / 2) * 100, Math.cos(((offset-0.2) * Math.PI) / 2) * 15, Math.sin((offset * Math.PI) / 2) * -330)
    
  })

  return (
    <>
    <BwScroll />
    <group {...props} dispose={null}>
      <group scale={0.012} position={[ 25, -11, -10]} rotation={[0, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} >
          <group scale={100}>
            <mesh geometry={nodes.Accesories_VertexCollor_0.geometry} material={materials.VertexCollor} />
            <mesh geometry={nodes.Accesories_VertexCollor_0_1.geometry} material={materials.VertexCollor} />
            <mesh geometry={nodes.Accesories_VertexCollor_0_2.geometry} material={materials.VertexCollor} />
            <mesh geometry={nodes.Accesories_VertexCollor_0_3.geometry} material={materials.VertexCollor} />
            <mesh geometry={nodes.Accesories_VertexCollor_0_4.geometry} material={materials.VertexCollor} />
            <mesh geometry={nodes.Accesories_VertexCollor_0_5.geometry} material={materials.VertexCollor} />
            <mesh geometry={nodes.Accesories_VertexCollor_0_6.geometry} material={materials.VertexCollor} />
          </group>
          <group scale={100}>
            <mesh geometry={nodes.Outline_VertexCollorBackFace_0.geometry} material={materials.VertexCollorBackFace} />
            <mesh geometry={nodes.Outline_VertexCollorBackFace_0_1.geometry} material={materials.VertexCollorBackFace} />
          </group>
        </group>
        <mesh geometry={nodes.Plane001_Material_0.geometry} material={materials.Material} position={[-10137.571, 3446.379, 939.938]} rotation={[-1.558, 0, 3.138]} scale={113.239} />
        <mesh geometry={nodes.Plane003_Material001_0.geometry} material={materials['Material.001']} position={[-10016.212, 3757.468, -3755.637]} rotation={[-1.58, 0, Math.PI]} scale={70.807} />
        <mesh geometry={nodes.Main_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/assets/Scroll/Scroll.glb')
