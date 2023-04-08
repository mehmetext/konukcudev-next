//Icons
import { FiInfo } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbLink } from "react-icons/tb";
import { BiGitRepoForked } from "react-icons/bi";

//Components
import Accordion from "../Accordion";
import TechStack from "../TechStack";

//React
import { ReactNode } from "react";

//Next
import Link from "next/link";

//Types
type Props = {
	reference: {
		image: string;
		name: string;
		technologies: string[];
		content?: ReactNode;
		repoLink?: string;
		link?: string;
	};
};

export default function ReferenceItem({ reference }: Props) {
	return (
		<div className="rounded-lg overflow-hidden flex border border-bright relative">
			<img
				src={`/images/${reference.image}`}
				alt={reference.name}
				className="max-h-[400px]"
			/>
			<div className="absolute top-0 left-0 w-full h-full flex items-end">
				<div className="bg-bright bg-opacity-90 backdrop-blur-md flex flex-col w-full">
					<Accordion
						header={(toggleIsOpen, isOpen) => {
							return (
								<div className="flex justify-between items-center gap-2.5 p-2.5">
									<div className="text-primary-dark font-black sm:text-xl flex items-center gap-1">
										{reference.name}{" "}
										{reference.link && (
											<Link href={reference.link} target="_blank">
												<TbLink className="text-primary" />
											</Link>
										)}
									</div>
									<div
										className="cursor-pointer relative text-custom-gray"
										onClick={() => toggleIsOpen()}
									>
										<FiInfo
											className={`transition duration-300 ${
												isOpen ? "scale-0" : "scale-100"
											}`}
										/>
										<AiOutlineCloseCircle
											className={`transition duration-300 absolute top-0 ${
												isOpen ? "scale-100" : "scale-0"
											}`}
										/>
									</div>
								</div>
							);
						}}
						content={
							<div className="px-2.5 pb-2.5 flex flex-col gap-2.5">
								<TechStack
									items={reference.technologies}
									itemClassName="w-5 h-5"
									gapClassName="gap-0.5"
								/>
								{reference.repoLink && (
									<div className="flex gap-2.5">
										{reference.repoLink && (
											<div className="flex items-center gap-x-0.5">
												<BiGitRepoForked className="text-primary text-base" />{" "}
												<Link
													href={reference.repoLink}
													className="text-sm font-semibold"
													target="_blank"
												>
													Repository
												</Link>
											</div>
										)}
									</div>
								)}
								{reference.content}
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
}
