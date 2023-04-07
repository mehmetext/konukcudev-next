//Icons
import { FiInfo } from "react-icons/fi";
import Accordion from "../Accordion";

//Types
type Props = {
	reference: {
		image: string;
		name: string;
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
									<div className="text-primary-dark font-black sm:text-xl">
										{reference.name}
									</div>
									<div
										className="cursor-pointer"
										onClick={() => toggleIsOpen()}
									>
										<FiInfo />
									</div>
								</div>
							);
						}}
						content={
							<div className="px-2.5 pb-2.5">
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
}
