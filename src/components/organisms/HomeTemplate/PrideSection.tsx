//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import Container from "@/components/atoms/Container";

export default function PrideSection() {
	return (
		<Container>
			<ComponentNameContainer name="PrideSection">
				<div className="flex flex-col gap-2.5 w-full">
					<h1 className="leading-tight text-2xl md:text-4xl font-black text-primary-dark">
						“Ne mutlu Türk’üm diyene!” ❤️
					</h1>
					<div className="grid md:grid-cols-2 gap-2.5">
						<div className="flex items-center justify-center p-5 rounded-2xl bg-[#5196D6]">
							<img src="/images/gokturkce-turk.svg" alt="Göktürkçe Türk" />
						</div>
						<div className="flex items-center justify-center p-5 rounded-2xl bg-[#E30A17]">
							<img src="/images/turk-bayragi.svg" alt="Türk Bayrağı" />
						</div>
					</div>
				</div>
			</ComponentNameContainer>
		</Container>
	);
}
