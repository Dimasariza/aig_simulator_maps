import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Select } from "@react-three/postprocessing"

export default function MainEngine({url, position, scale}) {
    const { scene } =  useGLTF(url)
    return (
        <Select enabled={true}>
            <primitive object={scene} position={position} scale={scale}/>
        </Select>
    )
}