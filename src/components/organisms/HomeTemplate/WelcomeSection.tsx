//Components
import MehmetKonukcu from "@/components/molecules/WelcomeSection/MehmetKonukcu";
import Saying from "@/components/molecules/WelcomeSection/Saying";
import TechStack from "@/components/molecules/TechStack";
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";

export default function WelcomeSection() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center gap-3 px-4 sm:px-0">
			<Saying />
			<MehmetKonukcu />

			<ComponentNameContainer name="TechStack">
				<TechStack
					itemClassName="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12"
					items={[
						"dart",
						"flutter",
						"javascript",
						"typescript",
						"react",
						"redux",
						"react-query",
						"nextjs",
						"tailwind",
						"c",
						"html",
						"css",
						"firebase",
						"figma",
						"photoshop",
						"xd",
					]}
					centered
				/>
			</ComponentNameContainer>
		</div>
	);
}
