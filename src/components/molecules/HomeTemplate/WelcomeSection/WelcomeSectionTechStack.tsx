//Components
import TechStack from "@/components/molecules/TechStack";
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";

export default function WelcomeSectionTechStack() {
	return (
		<ComponentNameContainer name="TechStack">
			<TechStack
				itemClassName="h-8 w-8 lg:h-12 lg:w-12"
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
					"git",
					"github",
					"gitlab",
					"postman",
					"sourcetree",
					"slack",
					"linear",
				]}
				centered
			/>
		</ComponentNameContainer>
	);
}
