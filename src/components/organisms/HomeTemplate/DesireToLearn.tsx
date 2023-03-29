//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import Container from "@/components/atoms/Container";

//Icons
import { TiInfinity } from "react-icons/ti";

export default function DesireToLearn() {
	return (
		<Container>
			<ComponentNameContainer name="DesireToLearn">
				<div className="flex flex-col gap-2.5 w-full">
					<h1 className="leading-tight text-2xl md:text-4xl font-black text-primary-dark">
						Yeni şeyler öğrenme isteği? ⚡️
					</h1>
					<div className="w-full relative">
						<div className="w-1/2 sm:w-1/3 flex flex-col gap-0.5">
							<div className="flex justify-between font-black text-xs text-primary-dark px-4">
								<span>0%</span>
								<span>100%</span>
							</div>
							<div className="h-12 w-full bg-primary bg-opacity-5 rounded-full border-2 border-dashed border-primary"></div>
						</div>
						<div className="w-full absolute left-2 bottom-2">
							<div className="w-full bg-primary rounded-full font-black text-xs px-4 py-2 flex justify-end items-center text-white">
								<TiInfinity className="text-base" />%
							</div>
						</div>
					</div>
				</div>
			</ComponentNameContainer>
		</Container>
	);
}
