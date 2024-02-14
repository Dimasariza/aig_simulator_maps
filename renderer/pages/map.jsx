import Head from "next/head";
import { Canvas } from '@react-three/fiber'
import { GizmoHelper, GizmoViewport } from '@react-three/drei'
import MainEngine from '../component/main_engine/main_engine'
import AssetsRenderer from "../component/assets_renderer";
import AuxEngine  from "../component/aux_engine/aux_engine"
import { OrbitControls } from '@react-three/drei';
import { Suspense } from "react";
import { useGLTF, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import { useRef } from "react";


export default function Maps(){
    const mainEnginePos = [
        [-0.15, 0, 0.2],
        [0.15, 0, 0.2],
    ]

    const auxEnginePos = [
        [-0.27, -0.22, -0.4],
        [0.04, -0.22, -0.4],
        // [-0.27, -0.22, -0.7],
        // [0.04, -0.22, -0.7],
        // [-0.27, -0.22, -1],
        // [0.04, -0.22, -1],
    ]

    const directionalLightRef = useRef(null)

    return (
        <>
            <Head>
                <title>Aux Engine 2</title>
            </Head>
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 1] }}>
                <directionalLight ref={directionalLightRef} position={[0, 2, 0]} intensity={10}/>
                <directionalLight ref={directionalLightRef} position={[-2, 2, 0]} intensity={5}/>
                <directionalLight ref={directionalLightRef} position={[2, 2, 0]} intensity={5}/>
                {/* <ambientLight intensity={5}/> */}
                <Suspense fallback={null}>
                    {
                        mainEnginePos.map((pos, id) => <AssetsRenderer key={id}> 
                            <MainEngine url={`/assets/main_engine/Main Engine 18 Cylinder ${id + 1}.glb`} position={pos} scale={0.01}/> 
                        </AssetsRenderer>)
                    }

                    {
                        auxEnginePos.map((pos, id) => <AssetsRenderer key={id}> 
                            <AuxEngine url={`/assets/aux_engine/Aux Eng V8 ${id + 1}.glb`} position={pos} scale={0.15}/>
                        </AssetsRenderer>)
                    }
                </Suspense>
                <OrbitControls enableZoom={true} enablePan={true} enableDamping={true} position={[0, 0, 0]}/>
                <GizmoHelper alignment="top-right" margin={[80, 80]} renderPriority={2}>
                    <GizmoViewport axisColors={["hotpink", "aquamarine", "#3498DB"]} labelColor="black" />
                </GizmoHelper>
            </Canvas>
        </>
    )
}