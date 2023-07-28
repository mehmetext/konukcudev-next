//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import Container from "@/components/atoms/Container";
import { ReactNode } from "react";
import TechStack from "../../TechStack";

//Types
type Props = {
	componentName: string;
	image: string;
	textColor: string;
	bgColor: string;
	name: string;
	paragraphs: ReactNode;
	technologies: string[];
	reversed?: boolean;
};

export default function AsDeveloperItem({
	componentName,
	image,
	textColor,
	bgColor,
	name,
	paragraphs,
	technologies,
	reversed = false,
}: Props) {
	return (
		<Container>
			<ComponentNameContainer name={componentName}>
				<div
					className={`flex flex-col-reverse items-center md:items-start gap-5 ${
						reversed ? "md:flex-row-reverse" : "md:flex-row"
					}`}
				>
					<div className="flex-1 flex flex-col gap-2.5">
						<h1 className="font-black text-xl sm:text-2xl text-primary-dark">
							Bir{" "}
							<span className={`text-2xl sm:text-4xl ${textColor}`}>
								{name}
							</span>{" "}
							olarak...
						</h1>
						<div className="flex flex-col gap-4 text-custom-gray text-sm">
							{paragraphs}
						</div>
						<div
							className={`flex flex-col p-4 gap-2.5 bg-opacity-5 rounded-2xl ${bgColor}`}
						>
							<h2 className="text-lg sm:text-2xl leading-tight font-black text-primary-dark">
								{name} olarak şu teknolojileri kullanıyorum:
							</h2>
							<TechStack
								itemClassName="h-9 w-9"
								items={technologies}
								gapClassName="gap-2.5"
							/>
						</div>
					</div>
					<div className="flex">
						<img
							className="sm:w-[400px] sm:h-[400px]"
							src={`/images/${image}.svg`}
							alt={name}
						/>
					</div>
				</div>
			</ComponentNameContainer>
		</Container>
	);
}
