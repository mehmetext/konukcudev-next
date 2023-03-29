//Components
import DateLineBlockDate from "@/components/atoms/DateLineBlock/DateLineBlockDate";

//Types
type Props = {
	endingDate?: DateLineDateType;
	startingDate: DateLineDateType;
};

type DateLineDateType = {
	month: string;
	year: string;
};

export default function DateLineBlock({ endingDate, startingDate }: Props) {
	return (
		<div className="flex gap-x-2.5">
			<div className="flex flex-col gap-y-2.5">
				<div className="shrink-0 flex flex-col py-2 gap-px bg-primary text-white rounded-full min-w-[48px] items-center justify-center">
					{endingDate && (
						<>
							<DateLineBlockDate
								month={endingDate.month}
								year={endingDate.year}
							/>
							<div className="h-2.5 w-px bg-white rounded-full"></div>
						</>
					)}
					<DateLineBlockDate
						month={startingDate.month}
						year={startingDate.year}
					/>
				</div>
				<div className="w-px flex-1 bg-red-500"></div>
			</div>
			<div className="">adsa</div>
		</div>
	);
}
