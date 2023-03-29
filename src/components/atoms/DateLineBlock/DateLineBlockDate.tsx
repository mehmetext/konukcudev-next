//Types
type Props = {
	month: string;
	year: string;
};

export default function DateLineBlockDate({ month, year }: Props) {
	return (
		<div className="flex flex-col items-center justify-center">
			<span className="text-sm font-bold">{month}</span>
			<span className="text-[12px] font-bold -mt-1.5">{year}</span>
		</div>
	);
}
