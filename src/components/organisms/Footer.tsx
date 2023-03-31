//Next
import Link from "next/link";

//Components
import Container from "../atoms/Container";

export default function Footer() {
	return (
		<Container>
			<div className="flex flex-col items-center gap-y-2.5 mb-20">
				<div className="h-2.5 w-[15px] bg-bright rounded-full"></div>
				<div className="h-2.5 w-[100px] bg-bright rounded-full"></div>
				<div className="h-2.5 w-[200px] bg-bright rounded-full"></div>
				<div className="text-primary-dark px-5 py-2.5 bg-bright rounded-full flex sm:gap-2 flex-col sm:flex-row items-center">
					<span>Bütün hakları saklıdır © 2023</span>
					<Link href="/" className="font-black">
						Mehmet Konukçu
					</Link>
				</div>
				<div className="flex flex-col items-center text-lg">
					&
					<div className="font-black flex gap-x-2">
						designed and coded with{" "}
						<div className="animate-heart-attack">❤️</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
