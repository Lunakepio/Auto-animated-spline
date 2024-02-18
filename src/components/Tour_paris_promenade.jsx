/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\tour_paris_promenade.glb --transform --shadows 
Files: .\tour_paris_promenade.glb [51.35MB] > C:\Users\mouli\dev\r3f-vite-starter\public\tour_paris_promenade-transformed.glb [2.24MB] (96%)
Author: amogusstrikesback2 (https://sketchfab.com/amogusstrikesback2)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tour-paris-promenade-9d9b5dcfd6504ea0b582d36687e10fab
Title: tour paris promenade
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tour_paris_promenade-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.N_Road_Ground_M_Cmn_MainColor_Detail_0.geometry} material={materials.M_Cmn_MainColor_Detail} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.N_Road_Ground_M_Mobp1_Road_A_0.geometry} material={materials.M_Mobp1_Road_A} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.N_Road_Ground_M_Mobp1_Road_B_0.geometry} material={materials.M_Mobp1_Road_B} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.N_Road_Ground_M_Mobp1_Water_0.geometry} material={materials.M_Mobp1_Water} scale={0.01} />
      {/* <mesh castShadow receiveShadow geometry={nodes.ShadowCollision_M_Cmn_ShadowCollision_0.geometry} material={materials.M_Cmn_ShadowCollision} scale={0.01} /> */}
      <mesh castShadow receiveShadow geometry={nodes.F_BlindBuilding_M_Mobp1_Textures01_0.geometry} material={materials.M_Mobp1_Textures01} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.Gmob_Paris_VR_M_Mobp1_VR_0.geometry} material={materials.M_Mobp1_VR} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.N_Building_002_M_Mobp1_kanban_0.geometry} material={materials.M_Mobp1_kanban} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.N_Building_002_M_Mobp1_gaisenmon_tex_0.geometry} material={materials.M_Mobp1_gaisenmon_tex} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.Rainbow_model_M_Mobp1_Rainbow_0.geometry} material={materials.M_Mobp1_Rainbow} position={[-0.16, 0.001, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.N_Audience_NoMove_01_M_Cmn_AudienceModel_0.geometry} material={materials.M_Cmn_AudienceModel} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/tour_paris_promenade-transformed.glb')
