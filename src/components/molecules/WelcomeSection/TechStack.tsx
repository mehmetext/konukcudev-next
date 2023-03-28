import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import Icon from "@/components/atoms/Icon";

const technologies = [
	"dart",
	"flutter",
	"javascript",
	"typescript",
	"react",
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
];

export default function TechStack() {
	return (
		<ComponentNameContainer name="TechStack">
			<div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 md:gap-2.5">
				{technologies.map((tech, i) => (
					<Icon
						key={i}
						name={tech}
						className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12"
					/>
				))}
			</div>
		</ComponentNameContainer>
	);
}
