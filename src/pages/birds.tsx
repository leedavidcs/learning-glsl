import { Bird } from "@/components/Bird";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import React, { Suspense } from "react";

export const Page: NextPage = () => {
	return (
		<>
			<Canvas camera={{ position: [0, 0, 35] }}>
				<ambientLight intensity={2} />
				<pointLight position={[40, 40, 40]} />
				<OrbitControls />
				<Suspense fallback={null}>
					{new Array(6).fill(null).map((_, i) => {
						const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1);
						const y = -10 + Math.random() * 20;
						const z = -5 + Math.random() * 10;
						const bird = ["stork", "parrot", "flamingo"][Math.round(Math.random() * 2)];
						const speed = bird === "stork" ? 0.5 : bird === "flamingo" ? 2 : 5;
						const factor =
							bird === "stork"
								? 0.5 + Math.random()
								: bird === "flamingo"
								? 0.25 + Math.random()
								: 1 + Math.random() - 0.5;

						return (
							<Bird
								key={i}
								position={[x, y, z]}
								rotation={[0, x > 0 ? Math.PI : 0, 0]}
								speed={speed}
								factor={factor}
								url={`/glb/${bird}.glb`}
							/>
						);
					})}
				</Suspense>
			</Canvas>
		</>
	);
};

export default Page;
