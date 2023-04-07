//Components
import DateLineBlockDate from "@/components/atoms/DateLineBlock/DateLineBlockDate";

//Next
import Link from "next/link";

//Icons
import { MdLocationPin } from "react-icons/md";
import { TbLink } from "react-icons/tb";

//Types
type Props = {
	endingDate?: DateLineDateType;
	startingDate: DateLineDateType;
	title: string;
	hideLine?: boolean;
	location?: string;
	company?: {
		href: string;
		title: string;
	};
	msg: string;
};

type DateLineDateType = {
	month?: string;
	year: string;
};

export default function DateLineBlock({
	endingDate,
	startingDate,
	title,
	location,
	company,
	msg,
	hideLine = false,
}: Props) {
	return (
		<div className="flex gap-x-2.5">
			<div className="flex flex-col gap-y-2.5 items-center">
				<div className="shrink-0 flex flex-col py-2 min-h-[48px] gap-px bg-gradient-to-r from-primary-dark to-primary text-white rounded-full min-w-[48px] items-center justify-center">
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
				{!hideLine && (
					<div className="w-px flex-1 border-l border-dashed border-l-darken"></div>
				)}
			</div>
			<div className="flex flex-col gap-[5px]">
				<div className="text-xl sm:text-2xl lg:text-4xl font-black min-h-[48px] flex items-center leading-none text-primary-dark">
					{title}
				</div>
				{(location || company) && (
					<div className="flex gap-x-2.5">
						{location && (
							<div className="flex items-start">
								<MdLocationPin className="text-primary" />
								<span className="font-normal text-primary-dark text-sm -mt-px">
									{location}
								</span>
							</div>
						)}
						{company && (
							<div className="flex items-start gap-x-px">
								<TbLink className="text-primary" />
								<Link
									href={company.href}
									target="_blank"
									className="font-black text-primary-dark text-sm -mt-px"
								>
									{company.title}
								</Link>
							</div>
						)}
					</div>
				)}
				<div className="text-custom-gray text-sm">{msg}</div>
			</div>
		</div>
	);
}
