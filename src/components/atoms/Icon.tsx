//Types
type Props = {
	className?: string;
	name: string;
};

//36, 48, 72
//4xl, 5xl, 7xl

export default function Icon({ className, name }: Props) {
	return (
		<div className={className}>
			<img
				className="w-full h-full"
				src={`images/icons/${name}.svg`}
				alt={name}
			/>
		</div>
	);
}
