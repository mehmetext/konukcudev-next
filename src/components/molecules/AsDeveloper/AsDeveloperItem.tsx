//Components
import ComponentNameContainer from "@/components/atoms/ComponentNameContainer";
import Container from "@/components/atoms/Container";
import { ReactNode } from "react";
import TechStack from "../TechStack";

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
					className={`flex gap-5 ${reversed ? "flex-row-reverse" : "flex-row"}`}
				>
					<div className="flex-1 flex flex-col gap-2.5">
						<h1 className="font-black text-2xl">
							Bir <span className={`text-4xl ${textColor}`}>{name}</span>{" "}
							olarak...
						</h1>
						<div className="flex flex-col gap-4">{paragraphs}</div>
						<div
							className={`flex flex-col p-4 gap-2.5 bg-opacity-5 rounded-2xl ${bgColor}`}
						>
							<h2 className="text-2xl font-black">
								{name} olarak şu teknolojileri kullanıyorum:
							</h2>
							<TechStack
								itemClassName="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12"
								items={technologies}
							/>
						</div>
					</div>
					<div className="flex">
						<img
							className="w-[400px] h-[400px]"
							src={`/images/${image}.svg`}
							alt={name}
						/>
					</div>
				</div>
			</ComponentNameContainer>
		</Container>
	);
}
