import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Select } from "@react-three/postprocessing"

export default function AuxEngine({url, position, scale}) {
    const { scene } = useGLTF(url)
    return (
        <Select enabled={false}>
            <primitive object={scene} position={position} scale={scale} rotation-y={Math.PI / 180 * 270}/>
        </Select>
    )
}