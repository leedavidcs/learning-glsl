import { Box as NativeBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";

export const Box = (props) => {
	const mesh = useRef<Mesh>();

	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	useFrame(() => {
		if (!mesh.current) {
			return;
		}

		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});

	return (
		<NativeBox
			args={[1, 1, 1]}
			{...props}
			ref={mesh}
			scale={active ? [6, 6, 6] : [5, 5, 5]}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<meshStandardMaterial attach="material" color={hovered ? "#2b6c76" : "#720b23"} />
		</NativeBox>
	);
};
