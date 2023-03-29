import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import Container from "@/components/atoms/Container";
import TechStack from "@/components/molecules/TechStack";

export default function Others() {
	return (
		<Container>
			<ComponentNameContainer name="Others">
				<div className="bg-bright flex flex-col gap-2.5 sm:gap-5 p-4 sm:p-8 w-full rounded-2xl">
					<h1 className="leading-tight text-2xl md:text-4xl font-black text-primary-dark">
						Ayrıca şu araçları & teknolojileri kullanabiliyorum:
					</h1>
					<TechStack
						itemClassName="h-8 w-8 sm:w-12 sm:h-12 md:w-[72px] md:h-[72px]"
						gapClassName="gap-2 md:gap-4"
						items={[
							"firebase",
							"figma",
							"photoshop",
							"xd",
							"git",
							"github",
							"gitlab",
							"sourcetree",
							"postman",
						]}
					/>
				</div>
			</ComponentNameContainer>
		</Container>
	);
}
