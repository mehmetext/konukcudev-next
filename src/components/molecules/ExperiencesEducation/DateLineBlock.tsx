import DateLineBlockDate from "@/components/atoms/DateLineBlock/DateLineBlockDate";

export default function DateLineBlock() {
	return (
		<div className="flex gap-x-2.5">
			<div className="flex flex-col gap-y-2.5">
				<div className="shrink-0 flex flex-col py-2 gap-px bg-primary text-white rounded-full min-w-[48px] items-center justify-center">
					<DateLineBlockDate month="09" year="2023" />
				</div>
				<div className="w-px flex-1 bg-red-500"></div>
			</div>
			<div className="">adsa</div>
		</div>
	);
}
