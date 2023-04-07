//Icons
import { FiInfo } from "react-icons/fi";

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
					<div className="flex justify-between items-center gap-2.5 p-2.5">
						<div className="text-primary-dark font-black sm:text-xl">
							{reference.name}
						</div>
						<FiInfo />
					</div>
				</div>
			</div>
		</div>
	);
}
