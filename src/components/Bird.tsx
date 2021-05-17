import { useAnimations, useGLTF } from "@react-three/drei";
import { SceneProps, useFrame } from "@react-three/fiber";
import React, { FC, useEffect } from "react";

export interface BirdProps extends SceneProps {
	speed: number;
	factor: number;
	url: string;
}

export const Bird: FC<BirdProps> = ({ speed, factor, url, ...props }) => {
	const { nodes, animations } = useGLTF(url);
	const { ref, mixer } = useAnimations(animations);

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		mixer.clipAction(animations[0], ref.current).play();
	}, [mixer, animations, ref]);

	useFrame((state, delta) => {
		if (!ref.current) {
			return;
		}

		ref.current.rotation.y +=
			Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
		mixer.update(delta * speed);
	});

	return (
		<group ref={ref}>
			<scene name="Scene" {...props}>
				<mesh
					name="Object_0"
					morphTargetDictionary={(nodes.Object_0 as any).morphTargetDictionary}
					morphTargetInfluences={(nodes.Object_0 as any).morphTargetInfluences}
					rotation={[1.5707964611537577, 0, 0]}
				>
					<bufferGeometry attach="geometry" {...(nodes.Object_0 as any).geometry} />
					<meshStandardMaterial
						attach="material"
						{...(nodes.Object_0 as any).material}
						name="Material_0_COLOR_0"
					/>
				</mesh>
			</scene>
		</group>
	);
};
