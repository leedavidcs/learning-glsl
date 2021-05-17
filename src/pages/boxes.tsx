import { Box } from "@/components/Box";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import React from "react";

export const Page: NextPage = () => {
	return (
		<>
			<h1>Click on me - Hover me :)</h1>
			<Canvas camera={{ position: [0, 0, 35] }}>
				<ambientLight intensity={2} />
				<pointLight position={[40, 40, 40]} />
				<Box position={[10, 0, 0]} />
				<Box position={[-10, 0, 0]} />
				<Box position={[0, 10, 0]} />
				<Box position={[0, -10, 0]} />
				<OrbitControls />
			</Canvas>
		</>
	);
};

export default Page;
