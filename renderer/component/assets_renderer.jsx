import { EffectComposer, Outline, SMAA, Selection, SSAA } from "@react-three/postprocessing";

export default function AssetsRenderer({children}){
    return(
        <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
            <Outline blur visibleEdgeColor="greenyellow" hiddenEdgeColor="green" edgeStrength={10} width={2000} />
            </EffectComposer>
            {/* <SMAA /> */}
            {children}
        </Selection>
    )
}