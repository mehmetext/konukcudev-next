//Components

import ComponentName from "@/components/atoms/ComponentName";
import Container from "@/components/atoms/Container";
import Link from "next/link";

export default function WhatDidIDo() {
	return (
		<div className="flex flex-col gap-1">
			<Container>
				<div className="flex">
					<ComponentName name="WhatDidIDo" />
				</div>
			</Container>
			<div className="w-full bg-[url('/images/what-did-i-do.jpg')] bg-center bg-cover">
				<div className="flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-8 sm:p-12 md:p-20 gap-2.5">
					<h1 className="font-black text-2xl sm:text-5xl text-center">
						Bugüne kadar neler mi yaptım?
					</h1>
					<Link
						href="/"
						className="bg-primary flex items-center text-center justify-center py-4 px-8 rounded-full font-black sm:text-2xl"
					>
						Referanslarıma Git (Yakında)
					</Link>
				</div>
			</div>
		</div>
	);
}
