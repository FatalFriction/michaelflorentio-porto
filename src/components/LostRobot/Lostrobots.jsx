/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 lostrobot.glb 
Author: Mikita_Hubanau (https://sketchfab.com/Mikita_Hubanau)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lost-robot-5a5c314a82864818a3fa5a0f71b17990
Title: Lost robot
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations, Environment } from '@react-three/drei'
import { Butterfly } from '../Butterfly/Butterfly'
import { Butterfly1 } from '../Butterfly/Butterfly1'

export function Lostrobots(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/lostrobot/lostrobot.glb')
  const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} position={[0, -80, -80]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_7" position={[-0.481, 59.978, 0.699]} scale={[-174.944, 174.944, 174.944]}>
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Sphere} />
              </group>
              <Environment files="/assets/sunrise.hdr" background={true} />
              <group name="Tree_main_9" position={[0, 38.153, 0]} scale={0.417}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.Tree_main_and_grass_robot} />
              </group>
              <group name="Tree_up_10" position={[-5.915, 116.301, 4.803]} scale={0.082}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Tree_up} />
              </group>
              <Butterfly />
              <ambientLight />
              <Butterfly1 />
              <group name="Robot_11" rotation={[Math.PI / 2, 0, 0]}>
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.Robot} />
              </group>
              <group name="grass_main_12" position={[0, 38.967, 0]} scale={0.101}>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.Grass_down} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/lostrobot/lostrobot.glb')
